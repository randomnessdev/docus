export default defineAppConfig({
  docus: {
    title: 'Performance Ergonomie',

    description: "Solutions d'ergonomie et de prévention des risques professionnels.",

    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {},

    layout: 'default',

    header: {
      title: '',
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },

    aside: {
      level: 1,
      collapsed: false,
      exclude: ['contact']
    },

    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Performance Ergonomie',
        href: 'https://performance-ergonomie.com'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    }
  }
})
