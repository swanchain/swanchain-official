import image1 from '@/assets/img/ecosystem/ZK-image-overview.jpg'

export const anchor = ref([
  {
    sourceId: 'source-ZKEngine-1',
    targetId: 'ZKEngine',
    actived: false,
    mainTitle: true,
    mainTitleText: 'ZK Engine',
    title: '',
    image: null,
    content: []
  },
  {
    sourceId: 'source-ZKEngine-2',
    targetId: 'zk-Overview',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Overview',
    image: image1,
    content: [
      'Swan Chain uses zero-knowledge proof technology to inject privacy protection mechanisms into data processing and transactions. ZK computing can ensure that sensitive data and code in AI models are fully protected in a distributed environment. In addition, Swan Chain has also built a dedicated ZK market to distribute complex ZK computing tasks to GPU providers around the world, thereby significantly reducing the computing cost of ZK computing. As a key component of Swan Chain, ZK-Engine is responsible for managing and distributing these ZK tasks to edge computing providers (ECPs) around the world, further strengthening the privacy protection and computing efficiency of the network.'
    ]
  },
  {
    sourceId: 'source-ZKEngine-3',
    targetId: 'zk-Engine-Status',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Engine Status',
    image: null,
    content: []
  },
  {
    sourceId: 'source-ZKEngine-4',
    targetId: 'Features',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Features',
    image: null,
    content: []
  },
])
