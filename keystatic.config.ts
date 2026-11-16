import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'your-team/your-project',
  },
  collections: {
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'name',
      path: 'content/testimonials/*',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        quote: fields.text({ label: 'Testimonial', multiline: true }),
        initials: fields.text({ label: 'Initials', validation: { length: { max: 3 } } }),
        color: fields.select({
          label: 'Avatar color',
          options: [
            { label: 'Green', value: 'green' },
            { label: 'Orange', value: 'orange' },
            { label: 'Blue', value: 'blue' },
            { label: 'Purple', value: 'purple' },
            { label: 'Pink', value: 'pink' },
            { label: 'Teal', value: 'teal' },
            { label: 'Indigo', value: 'indigo' },
            { label: 'Gray', value: 'gray' },
          ],
          defaultValue: 'orange',
        }),
      },
    }),
  },
  singletons: {
    gallery: singleton({
      label: 'Gallery Images',
      path: 'content/gallery',
      schema: {
        images: fields.array(
          fields.object({
            url: fields.url({ label: 'Image URL' }),
            alt: fields.text({ label: 'Alt text' }),
          }),
          {
            label: 'Images',
            itemLabel: (props) => props.fields.alt.value || 'Image',
          }
        ),
      },
    }),
  },
});
