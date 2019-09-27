import icon from 'react-icons/lib/md/av-timer'

export default {
  name: 'session',
  type: 'document',
  title: 'Session',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'persons',
      type: 'array',
      title: 'Persons',
      description: 'Who is responsible for this session?',
      of: [
        {
          name: 'person',
          type: 'personReference',
          title: 'Person'
        }
      ]
    },
    {
      name: 'sessionType',
      type: 'string',
      title: 'Session type',
      options: {
        list: [
          {value: 'ceremony', title: 'Ceremony'},
          {value: 'cocktail hour', title: 'Cocktail Hour'},
          {value: 'reception', title: 'Reception'},
          {value: 'brunch', title: 'Brunch'},
          {value: 'rehearsal dinner', title: 'Rehearsal Dinner'}
        ]
      }
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      sessionType: 'sessionType',
      person: 'person.name',
      media: 'image'
    },
    prepare ({title, media, sessionType, person}) {
      return {
        title,
        media,
        subtitle: `${sessionType} ${person ? `- ${person}` : ''}`
      }
    }
  }
}
