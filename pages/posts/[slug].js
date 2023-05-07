import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import { indexQuery, postQuery, postSlugsQuery } from '../../lib/queries'
import { urlForImage, usePreviewSubscription } from '../../lib/sanity'
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server'
import { SearchDTO } from '../../lib/searchDto'

export default function Post({ data = {}, preview }) {
  const router = useRouter()

  const slug = data?.post?.slug

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  const {
    data: { post, morePosts, allPosts: initialAllPosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  })

  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })

  return (
    <Layout preview={preview}>
      <Container>
        <div className="dark:text-light">
          <Header data={SearchDTO(allPosts)} />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <Head>
                  <title>{post.title} | Assuntos.dev</title>
                  <meta name="description" content={post.excerpt} />
                  {post.coverImage?.asset?._ref && (
                    <meta
                      key="ogImage"
                      property="og:image"
                      content={urlForImage(post.coverImage)
                        .width(1200)
                        .height(627)
                        .fit('crop')
                        .url()}
                    />
                  )}
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))

  return {
    props: {
      preview,
      data: {
        post,
        allPosts,
        morePosts: overlayDrafts(morePosts),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
