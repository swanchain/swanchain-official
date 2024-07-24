import image1 from '@/assets/img/network/about-image-Introduction.jpg'
// const gmtTime = new Date().toGMTString()
export const anchor = ref([
  {
    sourceId: 'source-swanToken-1',
    targetId: 'SWANToken',
    actived: false,
    mainTitle: true,
    mainTitleText: 'SWAN Token',
    title: '',
    image: null,
    content: [
      'The SWAN token is the cornerstone of the Swan Chain ecosystem, driving innovation and participation through a well-structured token economics model and a strong governance framework.'
    ]
  },
  {
    sourceId: 'source-swanToken-2',
    targetId: 'SWANToken-Introduction',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Introduction',
    image: image1,
    content: [
      "Swan Chain introduces a comprehensive tokenomics structure designed to support its ecosystem's growth, incentivize participation, and ensure operational sustainability.",
      'SWAN token is the native encryption token of the Swan Chain ecosystem and plays a key role in this distributed computing network. Through innovative economic model design, Swan Chain empowers participants, stimulates network vitality, and ensures long-term sustainable development.',
      'The total supply of SWAN tokens is fixed at 1 billion tokens, ensuring scarcity and long-term protection against inflation. ',
      'The token economics is designed to support the growth and sustainability of the Swan Chain, and its distribution is as follows:'
    ]
  },
  // {
  //   sourceId: 'source-swanToken-3',
  //   targetId: 'Token-Figures',
  //   actived: false,
  //   mainTitle: false,
  //   mainTitleText: '',
  //   title: 'Token Figures',
  //   image: null,
  //   content: []
  // },
  // {
  //   sourceId: 'source-swanToken-4',
  //   targetId: 'Buying-SWANETH',
  //   actived: false,
  //   mainTitle: false,
  //   mainTitleText: '',
  //   title: 'Buying SWANETH',
  //   image: null,
  //   content: [
  //     'SWANETH is available on the following exchanges.'
  //   ]
  // },
])
