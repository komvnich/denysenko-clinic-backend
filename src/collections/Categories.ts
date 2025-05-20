import type { CollectionConfig } from 'payload'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order'],
    group: 'Послуги',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      uk: 'Категорія',
    },
    plural: {
      uk: 'Категорії',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: {
        uk: 'Назва категорії',
      },
      required: true,
      admin: {
        placeholder: 'Наприклад: Косметологія',
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
        description: 'Використовується в URL. Наприклад: cosmetology',
        placeholder: 'cosmetology',
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
      name: 'description',
      type: 'textarea',
      label: {
        uk: 'Опис категорії',
      },
      admin: {
        placeholder: 'Короткий опис категорії послуг',
      },
    },
    {
      name: 'icon',
      type: 'text',
      label: {
        uk: 'Назва іконки',
      },
      admin: {
        description: 'Наприклад: "Sparkles", "Heart", "Scissors"',
        placeholder: 'Sparkles',
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

export default Categories
