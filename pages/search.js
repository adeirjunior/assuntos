import React from 'react'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { usePreviewSubscription } from '../lib/sanity'
import { indexQuery, postQuery } from '../lib/queries'
import { SearchDTO } from '../lib/searchDto'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Head from 'next/head'

export default function search({ allPosts: initialAllPosts, preview }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })

  return (
    <Layout preview={preview}>
      <Container>
        <div className="dark:text-light">
          <Header data={SearchDTO(allPosts)} />
          <article>
            <Head>
              <title>Pesquisa | Assuntos.dev</title>
              <meta name="description" content="search" />
            </Head>
          </article>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))

  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}
