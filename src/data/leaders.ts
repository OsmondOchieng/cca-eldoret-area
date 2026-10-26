export type Leader = {
  id: string
  name: string
  role: string
  category: string
  description: string
  image?: string
}

export const leaders: Leader[] = [
  {
    id: 'founding-father',
    name: 'Archbishop Dr. Mathews Abednego Ajuoga',
    role: 'Founding Father',
    category: 'CCA Leadership',
    description:
      'The founding father whose vision and service contributed to the spiritual foundation and growth of the Church of Christ in Africa.',
    image: '/images/leadership/founding-father.jpg',
  },

  {
    id: 'archbishop',
    name: 'Archbishop',
    role: 'Archbishop',
    category: 'CCA Leadership',
    description:
      'Providing spiritual leadership and direction within the Church of Christ in Africa.',
  },

  {
    id: 'bishop',
    name: 'Bishop',
    role: 'Bishop',
    category: 'CCA Leadership',
    description:
      'Supporting the spiritual and administrative work of the church.',
  },

  {
    id: 'area-in-charge',
    name: 'Rev. Prof. Peter Odera Ajuoga',
    role: 'Area In-Charge',
    category: 'Eldoret Area Leadership',
    description:
      'Providing leadership and coordination across the CCA Eldoret Area.',
    image: '/images/leadership/area-in-charge.jpg',
  },

  {
    id: 'min-ji',
    name: 'Min Ji',
    role: 'Wife of Area In-Charge',
    category: 'Eldoret Area Leadership',
    description:
      'Supporting the family, fellowship and ministry life of the Eldoret Area.',
  },

  {
    id: 'assistant-kipkaren',
    name: 'Assistant Area In-Charge',
    role: 'Assistant Area In-Charge — Kipkaren Pastorate',
    category: 'Eldoret Area Leadership',
    description:
      'Supporting pastoral coordination and ministry work within the Kipkaren Pastorate.',
  },

  {
    id: 'assistant-kingongo',
    name: "Assistant Area In-Charge — King'ong'o Pastorate",
    role: "Assistant Area In-Charge — King'ong'o Pastorate",
    category: 'Eldoret Area Leadership',
    description:
      "Supporting pastoral coordination and ministry work within the King'ong'o Pastorate.",
  },

  {
    id: 'secretary',
    name: 'Secretary',
    role: 'Area Secretary',
    category: 'Administration',
    description:
      'Supporting communication, records and administrative coordination.',
  },

  {
    id: 'treasurer',
    name: 'Treasurer',
    role: 'Area Treasurer',
    category: 'Administration',
    description:
      'Supporting financial administration and accountability within the area.',
  },

  {
    id: 'women-chairlady',
    name: 'Women Chairlady',
    role: 'Women Ministry Chairlady',
    category: 'Ministries',
    description:
      'Supporting women’s fellowship, participation and ministry activities.',
  },

  {
    id: 'sunday-school',
    name: 'Sunday School Teacher',
    role: 'Sunday School Teacher',
    category: 'Children Ministry',
    description:
      'Supporting Christian education and spiritual development among children.',
  },

  {
    id: 'youth-chairman',
    name: 'Youth Chairman',
    role: 'Youth Chairman',
    category: 'Youth Ministry',
    description:
      'Supporting youth fellowship, development and ministry activities.',
  },

  {
    id: 'youth-chairlady',
    name: 'Youth Chairlady',
    role: 'Youth Chairlady',
    category: 'Youth Ministry',
    description:
      'Supporting youth fellowship, development and ministry activities.',
  },

  {
    id: 'ict-chairperson',
    name: 'Osmond Odera',
    role: 'ICT Chairperson',
    category: 'ICT Department',
    description:
      'Leading the church’s ICT initiatives, digital communication, website management, technology support and digital services.',
    image: '/images/leadership/ict-chairperson.jpg',
  },
]