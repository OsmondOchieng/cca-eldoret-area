export type Ministry = {
  id: string
  title: string
  description: string
  icon: string
}

export const ministries: Ministry[] = [
  {
    id: 'worship',
    title: 'Worship & Praise',
    description:
      'Creating opportunities for the church family to worship God through music, praise and thanksgiving.',
    icon: '♫',
  },

  {
    id: 'youth',
    title: 'Youth Ministry',
    description:
      'Helping young people grow in faith, purpose, leadership and fellowship.',
    icon: '✦',
  },

  {
    id: 'women',
    title: 'Women Ministry',
    description:
      'Building fellowship, spiritual growth and service among women in the church.',
    icon: '♡',
  },

  {
    id: 'children',
    title: 'Children Ministry',
    description:
      'Nurturing children through Christian teaching, fellowship and activities.',
    icon: '☀',
  },

  {
    id: 'men',
    title: 'Men Ministry',
    description:
      'Encouraging men to grow spiritually and serve their families and communities.',
    icon: '◆',
  },

  {
    id: 'evangelism',
    title: 'Evangelism & Outreach',
    description:
      'Sharing the message of Christ and serving communities beyond the church.',
    icon: '↗',
  },
]