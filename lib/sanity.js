import createImageUrlBuilder from '@sanity/image-url'
import { createPreviewSubscriptionHook } from 'next-sanity'
import { sanityConfig } from './config'

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = (source) => imageBuilder.image(source)

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig)
