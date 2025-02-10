import type { IOption } from 'types/common'

export const activeMenuPath = ref('')

export const menus = ref<IOption[]>([
  {
    label: 'Network',
    value: '/network',
    children: [
      { label: 'About SWAN', value: '/network/about-swan/General-Information' },
      { label: 'SWAN Stats', value: '/network/swan-stats' },
      { label: 'SWAN Token', value: '/network/swan-token' }
    ]
  },
  {
    label: 'Ecosystem',
    value: '/ecosystem',
    children: [
      {
        label: 'Market Provider', value: '/ecosystem/market-provider',
        children: [
          { label: 'Orchestrator', value: '/ecosystem/market-provider/Orchestrator' },
          { label: 'ZK Engine', value: '/ecosystem/market-provider/ZK-Engine' }
        ]
      },
      { label: 'Computing Provider', value: '', link: 'https://orchestrator.swanchain.io/provider-status' },
      { label: 'Swan Provider Dashboard', value: '', link: 'https://provider.swanchain.io' },
      { label: 'Apps', value: '/ecosystem/Apps' },
      { label: 'Blog', value: '', link: 'https://swanchain.medium.com/' }
    ]
  },
  { label: 'Bridge', value: '', link: 'https://bridge.swanchain.io/' },
  { label: 'Governance', value: '', link: 'https://docs.swanchain.io/getting-started/protocol-stack/governance' },
  {
    label: 'Developer', value: '/Developer',
    children: [
      { label: 'Status', value: '', link: 'https://status.swanchain.io/status/orchestrator' },
      { label: 'Swan chain Faucet', value: '', link: 'https://faucet.swanchain.io/' },
      { label: 'Swan SDK', value: '', link: 'https://docs.swanchain.io/tools-and-applications/swan-sdk/1-quick-start' },
      { label: 'Documentation', value: '', link: 'https://docs.swanchain.io/' },
      {
        label: 'Explorer', value: '/Explorer',
        children: [
          { label: 'SWAN Scan', value: '', link: 'https://swanscan.io/' },
          { label: 'SWAN Mainnet Explorer', value: '', link: 'https://mainnet-explorer.swanchain.io/' }
        ]
      }
    ]
  },
  {
    label: 'Pricing', value: '/Pricing',
    children: []
  },
  { label: 'White Paper', value: '', link: '/files/Swan_Chain_White_Paper_Nov_2024.pdf' }
])
