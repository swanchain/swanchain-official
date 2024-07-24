import image1 from '@/assets/img/network/about-image-overview.jpg'
import image2 from '@/assets/img/network/about-image-architecture.jpg'

export const anchor = ref([
  {
    sourceId: 'source-anchor-1',
    targetId: 'SWAN-Introduction',
    actived: true,
    mainTitle: true,
    mainTitleText: 'SWAN Introduction',
    title: 'General Information',
    image: null,
    content: [
      'A Full Toolset AI Blockchain.'
    ]
  },
  {
    sourceId: 'source-anchor-2',
    targetId: 'Overview',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Overview',
    image: image1,
    content: [
      'Swan Chain distributes processing tasks across a distributed network of nodes consisting of edge computing providers (ECPs) and fog computing providers (FCPs), thereby releasing computing power from the center to the edges, greatly improving the overall computing power.'
    ]
  },
  {
    sourceId: 'source-anchor-3',
    targetId: 'Architecture',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Architecture',
    image: image2,
    content: [
      'Marketing Providers will automatically assign the tasks to Computing providers. Tasks usually come from Lagrange, Swan Chain users and Swan Chain SDK.<br /><br />',
      'ECP focuses on real-time computing requirements at the edge, and meets the urgent needs of the network for low-latency real-time processing by providing services such as zero-knowledge proof computing, image recognition, and content distribution.<br /><br />',
      'FCP gives full play to the advantages of cloud computing and provides support for AI model training and deployment by sinking computing power to the edge of the network. With infrastructure such as Kubernetes, FCP is able to efficiently handle scalable, massively distributed computing tasks.<br /><br />',
      'MP provides smart and automatic engines which would be able to allocate the tasks to the most appropriate Computing Providers.',
    ]
  },
])

export const anchorProvider = ref([
  {
    sourceId: 'source-provider-1',
    targetId: 'SWAN-Providers',
    actived: true,
    mainTitle: true,
    mainTitleText: 'Swan Chain Providers',
    externalLink: {
      name: 'View Provider explorer',
      link: 'https://orchestrator.swanchain.io/provider-status'
    },
    title: 'Providers',
    image: null,
    content: [
      'A computing provider is an individual or organization that participates in the decentralized computing network by offering computational resources such as processing power (CPU and GPU), memory, storage, and bandwidth.<br /><br />',
      'As a resource provider, you can run a ECP(Edge Computing Provider) and FCP(Fog Computing Provider) to contribute your computing resource.'
    ]
  },
  {
    sourceId: 'source-provider-2',
    targetId: 'Resources',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    externalLink: {
      name: '',
      link: ''
    },
    title: 'Resources',
    image: null,
    content: []
  },
  {
    sourceId: 'source-provider-3',
    targetId: 'Providers-location',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    externalLink: {
      name: '',
      link: ''
    },
    title: 'Providers location',
    image: null,
    content: []
  },
  {
    sourceId: 'source-provider-4',
    targetId: 'Provider-Guidance',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    externalLink: {
      name: 'View Details',
      link: 'https://docs.swanchain.io/swan-provider/cp-computing-provider'
    },
    title: 'Provider Guidance',
    image: null,
    content: []
  },
])
