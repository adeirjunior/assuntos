export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        { type: 'block' }, 
        {
          type: 'code', 
          options: { language: 'html' }
        }
      ],
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'string',
      validation: (Rule) => Rule.max(204)
    },
    {
      name: 'coverImage',
      title: 'Capa',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Data',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'category.picture',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
}
