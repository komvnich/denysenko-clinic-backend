import type { CollectionConfig } from 'payload'

const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'subcategory', 'order'],
    group: 'Послуги',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      uk: 'Послуга',
    },
    plural: {
      uk: 'Послуги',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        uk: 'Назва послуги',
      },
      required: true,
      admin: {
        placeholder: 'Наприклад: Ультразвукове очищення обличчя',
      },
    },
    {
      name: 'price',
      type: 'number',
      label: {
        uk: 'Ціна',
      },
      required: true,
      admin: {
        placeholder: 'Наприклад: 40 евро',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        uk: 'Опис',
      },
      admin: {
        placeholder: 'Детальний опис послуги',
      },
    },
    {
      name: 'subcategory',
      type: 'relationship',
      label: {
        uk: 'Підкатегорія',
      },
      relationTo: 'subcategories',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'duration',
      type: 'text',
      label: {
        uk: 'Тривалість',
      },
      admin: {
        position: 'sidebar',
        placeholder: 'Наприклад: 60 хв',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: {
        uk: 'Порядок відображення',
      },
      defaultValue: 1,
      admin: {
        position: 'sidebar',
        description: 'Менше число = вище в списку',
      },
    },
    {
      name: 'isPopular',
      type: 'checkbox',
      label: {
        uk: 'Популярна послуга',
      },
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Відмітьте, щоб виділити цю послугу як популярну',
      },
    },
  ],
}

export default Services
