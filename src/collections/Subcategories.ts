import type { CollectionConfig } from 'payload'

const Subcategories: CollectionConfig = {
  slug: 'subcategories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'order'],
    group: 'Послуги',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      uk: 'Підкатегорія',
    },
    plural: {
      uk: 'Підкатегорії',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: {
        uk: 'Назва підкатегорії',
      },
      required: true,
      admin: {
        placeholder: 'Наприклад: Чистки обличчя',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: {
        uk: 'Ідентифікатор (slug)',
      },
      required: true,
      unique: true,
      admin: {
        description: 'Використовується в URL. Наприклад: face-cleaning',
        placeholder: 'face-cleaning',
      },
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value !== 'string') return true
        if (!/^[a-z0-9-]+$/.test(value)) {
          return 'Slug повинен містити тільки латинські літери в нижньому регістрі, цифри та дефіси'
        }
        return true
      },
    },
    {
      name: 'category',
      type: 'relationship',
      label: {
        uk: 'Категорія',
      },
      relationTo: 'categories',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        uk: 'Опис підкатегорії',
      },
      admin: {
        placeholder: 'Короткий опис підкатегорії послуг',
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
  ],
}

export default Subcategories
