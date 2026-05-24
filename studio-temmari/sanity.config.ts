import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'   // ← this line is critical

export default defineConfig({
  name: 'default',
  title: 'temmari',
  projectId: '1uozlcg2',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,    // ← and this one
  },
})