import React from 'react'
import { postQuery, postTagNameQuery, postTagOneNameQuery } from '../../lib/queries'
import { getClient, overlayDrafts, sanityClient } from '../../lib/sanity.server'

function Tag({post}) {
  return (
    <div>{post?.title}</div>
  )
}

export default Tag

export async function getStaticProps({ params, preview = false }) {
    const { post } = await getClient(preview).fetch(postTagOneNameQuery, {
      category: params.name,
    })
  
    return {
      props: {
        preview,
        post,
      },
      // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    }
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(postTagNameQuery)
    return {
      paths: paths.map(name => ({ params: { name } })),
      fallback: true,
    }
  }
  