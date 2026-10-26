export type Church = {
  slug: string
  name: string
  pastorate: string
  location: string
  serviceTime: string
  description: string
  image: string
}

export const churches: Church[] = [
  {
    slug: 'kipkaren',
    name: 'Kipkaren Church',
    pastorate: 'Kipkaren Pastorate',
    location: 'Kipkaren, Eldoret',
    serviceTime: 'Service information coming soon',
    description:
      'Kipkaren Church is part of the CCA Eldoret Area and the Kipkaren Pastorate.',
    image: '/images/churches/kipkaren.jpg',
  },

  {
    slug: 'mwangaza',
    name: 'Mwangaza Church',
    pastorate: 'Kipkaren Pastorate',
    location: 'Mwangaza, Eldoret',
    serviceTime: 'Service information coming soon',
    description:
      'Mwangaza Church is part of the CCA Eldoret Area and the Kipkaren Pastorate.',
    image: '/images/churches/mwangaza.jpg',
  },

  {
    slug: 'majengo',
    name: 'Majengo Church',
    pastorate: "King'ong'o Pastorate",
    location: 'Majengo, Eldoret',
    serviceTime: 'Service information coming soon',
    description:
      'Majengo Church is part of the CCA Eldoret Area and the King’ong’o Pastorate.',
    image: '/images/churches/majengo.jpg',
  },

  {
    slug: 'kingongo',
    name: "King'ong'o Church",
    pastorate: "King'ong'o Pastorate",
    location: "King'ong'o, Eldoret",
    serviceTime: 'Service information coming soon',
    description:
      "King'ong'o Church is part of the CCA Eldoret Area and the King'ong'o Pastorate.",
    image: '/images/churches/kingongo.jpg',
  },

  {
    slug: 'turbo',
    name: 'Turbo Church',
    pastorate: "King'ong'o Pastorate",
    location: 'Turbo, Uasin Gishu',
    serviceTime: 'Service information coming soon',
    description:
      "Turbo Church is part of the CCA Eldoret Area and the King'ong'o Pastorate.",
    image: '/images/churches/turbo.jpg',
  },
]