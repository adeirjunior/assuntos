import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemaTypes from './schemas/schema'
import { scheduledPublishing } from '@sanity/scheduled-publishing'
import { media } from 'sanity-plugin-media'
import { LaunchIcon } from '@sanity/icons'
import { contentGraphView } from 'sanity-plugin-graph-view'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'assuntos',
  icon: LaunchIcon,
  projectId: 'skqv6dht',
  dataset:
    process.env.NODE_ENV === 'development' ? 'development' : 'production',
  plugins: [
    deskTool(),
    scheduledPublishing(),
    media(),
    contentGraphView({}),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
