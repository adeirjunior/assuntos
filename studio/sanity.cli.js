// sanity.cli.js
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'skqv6dht',
    dataset:
      process.env.NODE_ENV === 'development' ? 'development' : 'production',
  },
})
