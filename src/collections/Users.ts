import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'role'],
    group: 'Адміністрування',
  },
  auth: true,
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      uk: 'Користувач',
    },
    plural: {
      uk: 'Користувачі',
    },
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'fullName',
          type: 'text',
          label: {
            uk: "Повне ім'я",
          },
          required: true,
          admin: {
            placeholder: 'Іван Денисенко',
            width: '50%',
          },
        },
        {
          name: 'role',
          type: 'select',
          label: {
            uk: 'Роль',
          },
          defaultValue: 'user',
          options: [
            {
              label: {
                uk: 'Адміністратор',
              },
              value: 'admin',
            },
            {
              label: {
                uk: 'Менеджер',
              },
              value: 'manager',
            },
            {
              label: {
                uk: 'Користувач',
              },
              value: 'user',
            },
          ],
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      label: {
        uk: 'Телефон',
      },
      admin: {
        placeholder: '+380 XX XXX XX XX',
      },
    },
  ],
}
