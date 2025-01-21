import image1 from '@/assets/img/network/about-image-Introduction.png'
import image2 from '@/assets/img/network/about-image-Diagram.jpg'
import imageGS from '@/assets/img/network/gs.jpg'
import imageGS01 from '@/assets/img/network/gs-1.jpg'
import imageGS02 from '@/assets/img/network/gs-2.jpg'
import imageGS03 from '@/assets/img/network/gs-3.jpg'
import imageGS04 from '@/assets/img/network/Scenarios-1.avif'
import imageGS05 from '@/assets/img/network/Scenarios-2.webp'
// const gmtTime = new Date().toGMTString()
export const anchor = ref([
  {
    sourceId: 'source-swanToken-1',
    targetId: 'SWANToken',
    actived: false,
    mainTitle: true,
    mainTitleText: 'Tokenomics',
    title: '',
    image: null,
    content: [
      'SwanChain Tokenomics and Governance Framework'
    ]
  },
  {
    sourceId: 'source-swanToken-2',
    targetId: 'SWANToken-Overview',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Overview',
    image: null,
    content: [
      "SwanChain introduces a comprehensive tokenomics structure designed to support its ecosystem's growth, incentivize participation, and ensure operational sustainability. This document outlines the strategic allocation, governance mechanisms, planned token release schedule, and specific formulas for the Fog Computing Providers (FCP), Edge Computing Providers (ECP), and Market Providers (MP) to provide a clear understanding of how SwanChain utilizes its native tokens to drive network engagement and development. "
    ]
  },
  {
    sourceId: 'source-swanToken-5',
    targetId: 'Total-Token-Supply',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Total Token Supply',
    image: image1,
    content: [],
    ul: [
      {
        title: 'Total Supply: ',
        content: '1,000,000,000 Swan Tokens'
      }
    ]
  },
  {
    sourceId: 'source-swanToken-6',
    targetId: 'Token-Allocation-and-Distribution-Breakdown',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Token Allocation and Distribution Breakdown',
    image: null,
    content: [],
    contentUl: [
      {
        t: '<b class="font-bold">1. Early Purchasers (20%)</b>',
        ul: [
          {
            title: 'Purpose: ',
            content: 'To fund the initial development and expansion phases of SwanChain.'
          },
          {
            title: 'Details: ',
            content: 'Early Purchasers provide essential capital for foundational buildout and scaling operations. This funding supports technical development, operational infrastructure, and initial market strategies.'
          },
          {
            title: 'Unlock Schedule: ',
            content: '<ol><li>1.8% unlocked at TGE (Token Generation Event).</li><li>Remaining tokens distributed linearly over 4–8 quarters after a 6-month cliff.</li></ol>'
          }
        ]
      },
      {
        t: '<b class="font-bold">2. DAO Treasury (20%)</b>',
        ul: [
          {
            title: 'Purpose:',
            content: 'To manage investments, cover legal costs, and other financial necessities.'
          },
          {
            title: 'Details:',
            content: 'The DAO Treasury is critical for financial management and operational expenditures. It is funded by contributions from market providers and is used for strategic investments and covering essential expenses such as legal fees.'
          },
          {
            title: 'Unlock Schedule: ',
            content: '<ol><li>2% unlocked at TGE.</li><li>Remaining tokens distributed linearly over 40 quarters.</li></ol>'
          }
        ]
      },
      {
        t: '<b class="font-bold">3. Ecosystem Fund (25%)</b>',
        ul: [
          {
            title: 'Purpose:',
            content: 'To support ecosystem growth through grants, projects, and other initiatives.'
          },
          {
            title: 'Details:',
            content: 'This fund is crucial for nurturing innovation within the SwanChain ecosystem, providing financial support to developers, startups, and community projects that contribute to the network’s enhancement.'
          },
          {
            title: 'Unlock Schedule: ',
            content: '<ol><li>4% unlocked at TGE.</li><li>Remaining tokens distributed linearly over 16 quarters.</li></ol>'
          }
        ]
      },
      {
        t: '<b class="font-bold">4. Core Contributors (15%)</b>',
        ul: [
          {
            title: 'Purpose:',
            content: 'To reward and retain the developers and team members who are integral to the development and maintenance of SwanChain.'
          },
          {
            title: 'Details:',
            content: 'This allocation ensures that the developers and personnel central to SwanChain’s operations are motivated and retained, facilitating ongoing innovation and network maintenance.'
          },
          {
            title: 'Unlock Schedule: ',
            content: '<ol><li>0% unlocked at TGE.</li><li>Remaining tokens distributed linearly over 12 quarters after a 6-month cliff.</li></ol>'
          }
        ]
      },
      {
        t: '<b class="font-bold">5. Airdrops (20%)</b>',
        ul: [
          {
            title: 'Purpose:',
            content: 'To incentivize broad network participation and engagement.'
          },
          {
            title: 'Details:',
            content: 'Airdrops distribute Swan tokens widely across the community to stimulate network activity and growth, enhancing user adoption and community vibrancy. 10% of the total supply has been reserved for computing providers over the years. The annual airdrop rate cannot exceed 10% of the current circulation supply.'
          },
          {
            title: '',
            content: '2% unlocked at TGE.'
          },
          {
            title: '',
            content: 'Remaining tokens distributed linearly over 32 quarters.'
          }
        ]
      }
    ]
  },
  {
    sourceId: 'source-swanToken-7',
    targetId: 'Token-Flow-Diagram',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Token Flow Diagram',
    image: image2,
    content: []
  },
  {
    sourceId: 'source-swanToken-8',
    targetId: 'Governance-and-Incentives',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Governance and Incentives',
    image: null,
    content: [],
    contentUl: [
      {
        t: '<b class="font-bold">Governance Participation</b>',
        ul: [
          {
            title: 'Collateral Requirement: ',
            content: 'Community members must stake tokens to participate in governance decisions.'
          },
          {
            title: 'Governance Rewards: ',
            content: 'Active participants may receive rewards, such as 1% of the DAO Treasury, to incentivize involvement and wise decision-making.'
          }
        ]
      },
      // {
      //   t: '<b class="font-bold">Annual Inflation and UBI</b>',
      //   ul: [
      //     {
      //       title: 'Annual Inflation Rate:',
      //       content: 'Swan Token is fixed supply, and the inflation rate is 0 .'
      //     },
      //     {
      //       title: 'Universal Basic Income (UBI):',
      //       content: 'Tokens are distributed as UBI to eligible network participants, promoting sustained engagement and rewarding contributions, this part is from airdrops.'
      //     }
      //   ]
      // },
      // {
      //   t: '<b class="font-bold">Validators</b>',
      //   text: [
      //     "As a Layer 2 (L2) solution built on Ethereum, SwanChain leverages the security and consensus mechanisms of Ethereum's Layer 1 (L1) network. This means that SwanChain does not require its validators to secure the network. Instead, it inherits the robust security properties of the Ethereum mainnet."
      //   ]
      // }
    ]
  },
  {
    sourceId: 'source-swanToken-9',
    targetId: 'Collateral-and-Slashing-Mechanism',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Governance',
    image: null,
    content: [],
    contentUl: [
      {
        t: '',
        text: [
          "The SWAN DAO Governance is the backbone of the SWAN network, ensuring that decisions are made in a decentralized, transparent, and community-driven manner. It not only embodies the principles of decentralized autonomous organizations but also oversees the strategic management of the network's treasury."
        ]
      },
      {
        t: '<b class="font-bold">Key Components of SWAN DAO Governance:</b>',
        text: []
      },
      {
        t: '<b class="font-bold">Committee Structure:</b>',
        ul: [
          {
            title: 'Representation: ',
            content: 'The committee comprises representatives from various stakeholder groups, including SWAN token holders, core developers, builders, and other contributors.'
          },
          {
            title: 'Election: ',
            content: "Committee members are elected through a transparent voting process, ensuring that those with the network's best interests are at the helm."
          }
        ]
      },
      {
        t: '<b class="font-bold">Decision-making Process</b>',
        ul: [
          {
            title: 'Proposals:',
            content: 'Any member of the SWAN community can submit proposals for consideration. These can range from protocol upgrades to budget allocations.'
          },
          {
            title: 'Voting:',
            content: "Proposals are put to a vote, with outcomes determined by the majority. The weight of a member's vote can be determined by factors like the number of SWAN tokens held, tenure in the community, or other criteria set by the DAO."
          },
          {
            title: 'Implementation:',
            content: 'Once a proposal is approved, it moves to the implementation phase, overseen by the relevant sub-committees or teams.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Transparency</b>',
        ul: [
          {
            title: 'Open Ledger:',
            content: 'All financial transactions, decisions, and votes are recorded on a public ledger, ensuring complete transparency.'
          },
          {
            title: 'Regular Reporting:',
            content: 'The committee provides regular updates to the community, ensuring they are kept in the loop about decisions, financial status, and other relevant matters.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Community Engagement</b>',
        ul: [
          {
            title: 'Feedback Channels:',
            content: 'Multiple channels (forums, chats, town halls) are available for community members to voice their opinions, concerns, and feedback.'
          },
          {
            title: 'Educational Initiatives:',
            content: 'The DAO organizes workshops and webinars to educate members about governance processes, ensuring informed decision-making.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Treasury Management</b>',
        ul: [
          {
            title: 'Allocation:',
            content: "The SWAN DAO oversees the network's treasury, strategically allocating funds for various initiatives, including collateral rewards, investments, community building, Network Tasks, and Creator Rewards."
          },
          {
            title: 'Budget Oversight:',
            content: "Regular audits and reviews ensure that funds are being used judiciously and in line with the community's interests."
          },
          {
            title: 'Investment Strategy:',
            content: "A portion of the treasury is invested in promising projects or assets, aiming to grow the treasury's value over time."
          },
          {
            title: 'Compensation:',
            content: "The DAO manages compensation for job creators, especially when the UBI rate exceeds the target. This ensures a balance between incentivizing job creation and providing UBI."
          }
        ]
      },
      {
        t: '<b class="font-bold">Continuous Evolution</b>',
        ul: [
          {
            title: 'Adaptability:',
            content: 'The governance model is not static. It evolves based on feedback, changing network needs, and the broader blockchain landscape.'
          },
          {
            title: 'Protocol Upgrades:',
            content: 'The DAO is responsible for overseeing and implementing protocol upgrades, ensuring the SWAN network remains cutting-edge.'
          }
        ]
      },
      {
        t: '',
        text: [
          "In summary, the SWAN DAO Governance ensures that the SWAN network remains decentralized, transparent, and in tune with its community's needs. Through a structured yet flexible approach, it ensures that the network grows sustainably while staying true to its foundational principles. The treasury management aspect ensures that the network's financial resources are used strategically, fostering growth and stability"
        ]
      }
    ]
  },
  {
    sourceId: 'source-swanToken-10',
    targetId: 'Income-and-Commission-Structure',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Computing Provider Income',
    image: null,
    content: [],
    contentUl: [
      {
        t: '',
        text: [
          "Swan Chain is a decentralized network that connects computing providers with users requiring computational resources. To foster early network growth and incentivize CPs to join and contribute resources, a dual compensation mechanism has been designed:"
        ]
      },
      {
        t: '',
        ul: [
          {
            title: 'Universal Basic Income (UBI): ',
            content: "Provides CPs with a predictable token income when their resources are underutilized."
          },
          {
            title: 'Paid Jobs: ',
            content: 'Offers market-priced compensation for computational tasks requested by users.'
          }
        ]
      },
      {
        t: '',
        text: [
          "This mechanism ensures a fair and gradual distribution of tokens to providers, supporting the network's expansion until it reaches a critical mass of user-paid tasks. Importantly, the UBI distribution rate is influenced by the resource usage rate, and CPs earn market-based compensation when engaged in paid jobs."
        ]
      },
      {
        t: '<b class="font-bold">Total Income</b>',
        text: [
          "The total daily income I(x)for a computing provider on day (x) comprises two components: "
        ]
      },
      {
        t: '',
        ul: [
          {
            title: 'UBI Income',
            content: "yUBI (x)"
          },
          {
            title: 'Paid Job Income',
            content: 'yPaid (x)'
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center text-center mt-10">I(x) = yUBI (x) + yPaid (x)</i>',
          '<br />',
          "Substituting the expressions for yUBI (x) and yPaid (x)",
          '<br />',
          '<i class="font-18 flex flex-jc-center text-center mt-10">I(x) = A · x<small class="font-12 mr-4 ml-4">B</small> · e<small class="font-12 mr-4 ml-4">−Cx</small> · (1 − u(x))+<span class="flex flex-jc-center flex-ai-end text-center">P <small class="font-12 mr-4 ml-4">market</small></span> (x) · u(x)</i>'
        ]
      },
      {
        t: '<b class="font-bold">Resource Usage Rate Impact</b>',
        ul: [
          {
            title: 'When ',
            content: 'u(x) = 0: <ol><li>CP receives full UBI allocation.</li><li>No income from paid jobs.</li></ol>'
          },
          {
            title: 'When ',
            content: 'u(x) = 1: <ol><li>All resources are utilized by paid jobs.</li><li>CP receives full income from paid jobs.</li><li>No UBI allocation.</li></ol>'
          },
          {
            title: 'Intermediate Values:',
            content: "<ol><li>CP's income is a combination of UBI and paid job compensation, proportional to resource utilization.</li></ol>"
          },
        ]
      },
      {
        t: "<b class='font-bold'>Individual CP's UBI</b>",
        text: [
          'To calculate the UBI for a single CP, we consider both the resource usage and completion rates of tasks. UBI allocation is conditional on sufficient resource contribution and performance metrics:'
        ]
      },
      {
        t: '<b class="font-bold">UBI Workload Calculation</b>',
        ul: [
          {
            content: 'Calculate the daily completion rate of a single ECP zk-task: <i class="font-18">P</i> <small class="font-12">ECP</small>'
          },
          {
            content: 'Calculate the completion rate of a single FCP sampling task: <i class="font-18">P</i> <small class="font-12">FCP</small>'
          },
          {
            content: 'Number of GPUs: <i class="font-18">N</i> <small class="font-12">ECP</small> (<i class="font-18">GPU</i> <small class="font-12">K</small>) and GPU types. '
          },
          {
            content: 'Calculate the total UBI workload:'
          }
        ],
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">UBI<small class="font-12 mr-4">total</small> = <i class="font-18 ml-4">UBI</i> <small class="font-12 mr-4">ECP</small> + <i class="font-18 ml-4">UBI</i> <small class="font-12">FCP</small></i>',
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">UBI<small class="font-12 mr-4">ECP</small> = <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">i</small></div> (<div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">k</small></div>N<small class="font-12 mr-4">ECP , i</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) x f<small class="font-12 mr-4">K</small>)</i>',
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">UBI<small class="font-12 mr-4">FCP</small> = <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">j</small></div> (<div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">k</small></div>N<small class="font-12 mr-4">FCP , j</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) x f<small class="font-12 mr-4">K</small>) * W<small class="font-12 mr-4">FCP</small></i>',
        ],
      },
      {
        t: '<b class="font-bold">Calculating the UBI for a single CP:</b>',
        text: [
          'As an ECP:',
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">UBI <small class="font-12 mr-4">ECP , i(x)</small> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:235px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;padding-bottom: 15px;"> <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">k</small></div>N<small class="font-12 mr-4">ECP , i</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) x f<small class="font-12 mr-4">K</small> x P<small class="font-12 mr-4">ECP , i</small> </div><div>UBI<small class="font-12 mr-4">ECP</small> + UBI<small class="font-12 mr-4">FCP</small></div></div> × yUBI(x)</i>',
          '<br />As an FCP:',
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">UBI <small class="font-12 mr-4">FCP , i(x)</small> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:235px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;padding-bottom: 15px;"> <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">k</small></div>N<small class="font-12 mr-4">FCP , i</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) x f<small class="font-12 mr-4">K</small> x P<small class="font-12 mr-4">FCP , i</small> x W<small class="font-12 mr-4">FCP</small> </div><div>UBI<small class="font-12 mr-4">ECP</small> + UBI<small class="font-12 mr-4">FCP</small></div></div> × yUBI(x)</i>',
        ]
      },
      {
        t: '<b class="font-bold">Conditions for CP to Receive UBI</b>',
        text: ['A CP must meet certain conditions to qualify for UBI:']
      },
      {
        t: '<b class="font-bold">Sufficient Collateral:</b>',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">Collateral<small class="font-12 mr-4">ECP</small> = <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">k</small></div>N<small class="font-12 mr-4">ECP</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) x C<small class="font-12 mr-4">base</small> x f<small class="font-12 mr-4">K</small></i>',
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">Collateral<small class="font-12 mr-4">FCP</small> = <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">k</small></div>N<small class="font-12 mr-4">FCP</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) x C<small class="font-12 mr-4">base</small> x f<small class="font-12 mr-4">K</small> x W<small class="font-12 mr-4">FCP</small></i>',
          'Where:'
        ],
      },
      {
        ul: [
          {
            content: '<i class="font-18">N</i> <small class="font-12">ECP</small> (<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the number of ECP for <i class="font-18">GPU</i> <small class="font-12">K</small>'
          },
          {
            content: '<i class="font-18">C</i> <small class="font-12">base</small> is the base collateral, with an initial value of 3500 (this value will be dynamically adjusted based on the daily computing units of the entire network; for specific adjustment rules, check <a class="underline color-primary" href="https://docs.swanchain.io/core-concepts/token/computing-provider-collateral/collateral-requirement-and-earning-multiplier" target="_blank">here</a>)'
          },
          {
            content: '<i class="font-18">N</i> <small class="font-12">FCP</small> (<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the number of <i class="font-18">GPU</i> <small class="font-12">K</small> in FCP'
          },
          {
            content: '<i class="font-18">N</i> <small class="font-12">ECP</small> (<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the number of <i class="font-18">GPU</i> <small class="font-12">K</small> in ECP'
          },
          {
            content: '<i class="font-18">W</i> <small class="font-12">FCP</small> represents the FCP resource bonus ratio, currently set at a constant value of 1.2'
          },
          {
            title: 'NOTE:',
            content: 'The value of <i class="font-18">W</i> <small class="font-12">FCP</small> , 1.2, means that if the same configuration of servers is deployed for FCP, it will generate 20% more earnings than ECP.'
          },
        ]
      },
      {
        t: '<b class="font-bold">Completion of Basic Test Tasks:</b>',
        ul: [
          {
            content: 'FCP: Sampling task'
          },
          {
            content: 'ECP: ZK task'
          }
        ]
      },
      {
        t: '<b class="font-bold">GPU count and type are also factored into the UBI eligibility.</b>',
      },
      {
        t: '<b class="font-bold"><br />Exit Mechanism:</b>',
        ul: [
          {
            content: 'CPs can exit by adjusting the setting of accepting tasks through their <i>TaskType</i>  (ECP: 1, 2, 4; FCP: 3, 5). '
          },
          {
            content: 'CPs can request to withdraw their collateral, but this requires a 7-day confirmation period to ensure settlement before the withdrawal is finalized (first <i>requestWithdraw</i>, followed by <i>confirmRequest</i> after 7 days).'
          }
        ]
      }
    ]
  },
  {
    sourceId: 'source-swanToken-11',
    targetId: 'Formulas-for-Collateral-and-Reward-Calculation',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Computing Provider Collateral',
    image: null,
    content: [],
    contentUl: [
      {
        t: '<b class="font-bold">Introduction</b>',
        text: [
          "In the Swan Chain network, Computing Providers (CPs) contribute their computational resources to support the network's decentralized computing infrastructure. To ensure stability and economic security, CPs are required to provide collateral in Swan tokens. This collateral acts as a financial commitment, incentivizing CPs to act in the best interest of the network while also sharing in the economic rewards generated from providing computing power."
        ]
      },
      {
        t: '<b class="font-bold">Collateral Model</b>',
        text: [
          'The collateral amount for each CP is determined by an inverse correlation model based on the total computing power contributed by the CP to the network. The formula for calculating the collateral amount is:',
        ],
        images: [imageGS]
      },
      {
        t: 'Where:',
        ul: [
          {
            content: '<i class="font-18">W</i> <small class="font-12">FCP</small> represents the FCP resource bonus ratio, currently set at a constant value of 1.2'
          },
          {
            content: '<i class="font-18">N</i> <small class="font-12">FCP</small> (<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the number of <i class="font-18">GPU</i> <small class="font-12">K</small> in FCP'
          },
          {
            content: '<i class="font-18">N</i> <small class="font-12">ECP</small> (<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the number of <i class="font-18">GPU</i> <small class="font-12">K</small> in ECP'
          },
          {
            content: '<i class="font-18">f</i> <small class="font-12">K</small> represents the earnings growth factor'
          },
        ]
      },
      {
        text: [
          'Currently, the computing units <i class="font-18">CU</i> <small class="font-12">totak</small> in the network are capped at (CU_0 = 3000). If the computing units remain at or below (3000), the base collateral remains constant at:',
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10"><i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">C <small class="font-12 mr-4">base</small></i> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">10,000,000</div><div>3000</div></div> + 200 = 3533</i>',
          'Example: If <i class="font-18">CU</i> <small class="font-12">totak</small> <b class="font-bold">increases to 6000</b>',
        ]
      },
      {
        ul: [
          {
            content: 'Substitute <i class="font-18">CU</i> <small class="font-12">totak</small> = 6000 into the formula:',
          }
        ],
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10"><i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">C <small class="font-12 mr-4">base</small></i> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">10,000,000</div><div>6000</div></div> + 200</i>',
        ]
      },
      {
        ul: [
          {
            content: 'Perform the calculation:',
          }
        ],
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10"><i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">C <small class="font-12 mr-4">base</small></i> = 1666.67 + 200 = 1866.67</i>',
          '<br />',
          'So, if the computing units (CU) exceed 3000, the base collateral amount will start to decrease. In the example where CU is 6000, the base collateral amount is 1867, which is lower than the 3533 calculated earlier when CU was 3000.'
        ]
      },
      {
        t: '<b class="font-bold">Revenue Sharing and APR Calculation</b>',
        text: [
          'Once a CP provides collateral, they are eligible to receive revenue generated from both Universal Basic Income (UBI) tokens and paid jobs. The revenue model includes:'
        ]
      },
      {
        ul: [
          {
            title: 'UBI Income:',
            content: 'CPs receive UBI tokens as a baseline income for their participation, which is inversely related to their collateral and computing power.'
          },
          {
            title: 'Paid Job Income:',
            content: 'CPs can earn additional revenue by completing paid jobs, which are offered at a market rate determined by user demand.'
          }
        ],
        text: [
          'The <b class="font-bold">Annual Percentage Rate (APR)</b> for the CPs is calculated separately for both their operating revenue and collateral revenue:'
        ]
      },
      {
        ul: [
          {
            title: 'Operator APR:',
            content: 'The revenue generated by CPs for providing computing power divided by their total operational costs.'
          },
          {
            title: 'Collateral APR:',
            content: 'Calculated based on the revenue earned by providing collateral relative to the collateral amount itself.'
          }
        ],
        text: [
          'The <b class="font-bold">total APR</b> includes both the operator APR and collateral APR, providing a complete picture of the financial returns for CPs participating in the Swan Chain network.'
        ]
      },
      {
        t: '<b class="font-bold">Slashing Mechanism</b>',
        text: [
          'To maintain network performance and accountability, CPs are subject to a precise slashing mechanism that penalizes inefficient or unreliable computing services. For each failed task, CPs face graduated penalties:',
        ]
      },
      {
        ul: [
          {
            content: 'Edge Computing Providers (ECP) lose 0.025% of their current full collateral amount per failed task (approximately 0.88 SWAN for a 3080 GPU), with around 48 tasks processed daily.'
          },
          {
            content: 'Fog Computing Providers (FCP) lose 0.1% of their current full collateral amount per failed task (approximately 3.533 SWAN for a 3080 GPU), with around 14 tasks processed daily.'
          }
        ],
        text: [
          "If a CP's collateral amount falls below the required threshold, they become ineligible to receive Universal Basic Income (UBI) tasks. To mitigate the risk of unexpected task exclusion, CPs are advised to maintain a buffer in their collateral amount."
        ]
      },
      {
        t: '<b class="font-bold">Impact of Collateral Model</b>',
        text: [
          'The negative correlation between collateral and computing power has several benefits:',
        ]
      },
      {
        ul: [
          {
            title: 'Incentivizing Scale:',
            content: 'CPs are encouraged to scale up their contributions to the network, as increasing their computing power reduces their collateral requirements.'
          },
          {
            title: 'Risk Mitigation:',
            content: "Collateral serves as a safeguard, ensuring that CPs have a financial stake in the network's success and discouraging malicious behavior."
          },
          {
            title: 'Economic Participation:',
            content: "By allowing CPs to share in both operator and collateral revenue, the model promotes balanced economic participation, where CPs are rewarded not only for their computational contributions but also for their financial commitment."
          }
        ]
      },
    ]
  },
  {
    sourceId: 'source-swanToken-12',
    targetId: 'UBI-Distribution-Example',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'UBI Allocation Curve',
    image: null,
    content: [
      "Universal Basic Income (UBI) and Paid Job Compensation for Computing Providers (CP) in Swan Chain"
    ],
    contentUl: [
      {
        t: '<br /><b class="font-bold">Introduction</b>',
        text: [
          'Swan Chain is a decentralized network that connects computing providers with users requiring computational resources. To foster early network growth and incentivize CPs to join and contribute resources, a dual compensation mechanism has been designed:'
        ]
      },
      {
        ul: [
          {
            title: 'Universal Basic Income (UBI):',
            content: 'Provides CPs with a predictable token income when their resources are underutilized.'
          },
          {
            title: 'Paid Jobs:',
            content: 'Offers market-priced compensation for computational tasks requested by users.'
          },
        ],
        text: [
          "This mechanism ensures a fair and gradual distribution of tokens to providers, supporting the network's expansion until it reaches a critical mass of user-paid tasks. Importantly, the UBI distribution rate is influenced by the resource usage rate, and CPs earn market-based compensation when engaged in paid jobs."
        ]
      },
      {
        t: '<b class="font-bold">Compensation Model</b>',
        text: [
          '<i class="font-18 flex flex-jc-center text-center mt-10">I(x) = A · x<small class="font-12 mr-4 ml-4">B</small> · e<small class="font-12 mr-4 ml-4">−Cx</small> · (1 − u(x))+<span class="flex flex-jc-center flex-ai-end text-center">P <small class="font-12 mr-4 ml-4">market</small></span> (x) · u(x)</i>',
          'The total daily income I(x)for a computing provider on day (x) comprises two components:'
        ]
      },
      {
        ul: [
          {
            title: 'UBI Income',
            content: 'yUBI(x)'
          },
          {
            title: 'Paid Job Income',
            content: 'yPaid(x)'
          }
        ],
        text: [
          'The <b class="font-bold">UBI income</b> is modeled using a gamma-like function adjusted by the resource usage rate u(x):',
          '<i class="font-18 flex flex-jc-center text-center mt-10">yUBI(x) = A · x<small class="font-12 mr-4 ml-4">B</small> · e<small class="font-12 mr-4 ml-4">−Cx</small> · (1 − u(x))</i>',
        ]
      },
      {
        t: 'Where:',
        ul: [
          {
            content: '<i class="font-18">A</i> = 20,000 (Scaling factor)'
          },
          {
            content: '<i class="font-18">B</i> = 0.3100 (Growth rate exponent)'
          },
          {
            content: '<i class="font-18">C</i> = 0.0017 (Decay rate constant)'
          },
          {
            content: 'x is the day number, starting from 1'
          },
          {
            content: 'u(x) is the resource usage rate on day(x) (ranging from 0 to 1)'
          },
        ],
        text: [
          'The paid job income depends on the market demand and the resource utilization:',
          '<i class="font-18 flex flex-ai-end flex-jc-center text-center mt-10">yPaid(x) = P<small class="font-12 mr-4">market</small>(x) · u(x)</i>',
          '<br />',
          'Where:'
        ]
      },
      {
        ul: [
          {
            content: '<i class="font-18">P</i> <small class="font-12 mr-4">market</small>(x) is the total market value for computational resources on day (x)'
          },
          {
            content: "(x) represents the proportion of a CP's resources utilized by paid job"
          }
        ]
      },
      {
        t: '<b class="font-bold">Defining </b> u(x) <b class="font-bold"><br /><br />Calculate the total duration of real GPU orders across the network</b>',
        images: [imageGS01]
      },
      {
        text: [
          'Where:'
        ]
      },
      {
        ul: [
          {
            content: '<i class="font-18">Task</i> <small class="font-12 mr-4">FCP , i</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the time that the i-th FCP task uses <i class="font-18">GPU</i> <small class="font-12">K</small>'
          },
          {
            content: '<i class="font-18">Task</i> <small class="font-12 mr-4">ECP , j</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the time that the j-th ECP task uses <i class="font-18">GPU</i> <small class="font-12">K</small>'
          },
          {
            content: '<i class="font-18">f</i> <small class="font-12 mr-4">K</small> represents the earnings growth factor'
          },
          {
            content: '<i class="font-18">W</i> <small class="font-12 mr-4">FCP</small> represents the FCP resource bonus ratio, currently set at a constant value of 1.2'
          },
          {
            title: 'NOTE:',
            content: 'The value of <i class="font-18">W</i> <small class="font-12 mr-4">FCP</small>, 1.2, means that if the same configuration of servers is deployed for FCP, it will generate 20% more earnings than ECP.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Calculate the total available usage time for all GPUs in the network</b>',
        images: [imageGS02]
      },
      {
        text: [
          'Where:'
        ]
      },
      {
        ul: [
          {
            content: '<i class="font-18">N</i> <small class="font-12 mr-4">FCP</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the number of <i class="font-18">GPU</i> <small class="font-12">K</small> in FCP'
          },
          {
            content: '<i class="font-18">N</i> <small class="font-12 mr-4">ECP</small>(<i class="font-18">GPU</i> <small class="font-12">K</small>) represents the number of <i class="font-18">GPU</i> <small class="font-12">K</small> in ECP'
          },
        ]
      },
      {
        t: '<b class="font-bold">Calculate u(x)</b>',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10">u(x) = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">T <small class="font-12">day</small></div><div>T <small class="font-12">total</small></div></div></i>',
        ]
      },
      {
        t: '<b class="font-bold">Defining Total Market Value</b> <i class="font-18">P</i> <small class="font-12 mr-4">market</small>(x)',
        text: [
          '<i class="font-18">P</i> <small class="font-12 mr-4">market</small>(x) represents the cost in Swan Tokens when all GPUs in the CP are fully utilized:',
        ],
        images: [imageGS03]
      },
      {
        text: [
          'Where:'
        ]
      },
      {
        ul: [
          {
            content: '<i class="font-18">Price</i> (<i class="font-18">GPU</i> <small class="font-12">K</small>) is the price of <i class="font-18">GPU</i> <small class="font-12">K</small>'
          },
          {
            content: '<i class="font-18">W</i> <small class="font-12 mr-4">FCP</small> represents the FCP resource bonus ratio, currently set at a constant value of 1.2'
          },
          {
            content: '<i class="font-18">N</i> <small class="font-12 mr-4">FCP</small>represents the number of <i class="font-18">GPU</i> <small class="font-12">K</small> in FCP'
          },
          {
            content: '<i class="font-18">N</i> <small class="font-12 mr-4">ECP</small>represents the number of <i class="font-18">GPU</i> <small class="font-12">K</small> in ECP'
          }
        ]
      },
      {
        t: '<b class="font-bold">Algorithm Implementation</b>',
        text: [
          'The compensation mechanism proceeds as follows:',
        ]
      },
      {
        ul: [
          {
            title: 'Initialization:',
            content: 'Set day (x=1).'
          },
          {
            title: 'Determine Resource Usage Rate:',
            content: "Calculate u(x) based on the CP's resource utilization by paid jobs."
          },
          {
            title: 'Compute UBI Income:',
            content: '<br /><i class="font-18 flex flex-jc-center text-center mt-10">yUBI(x) = 20,000 × x<small class="font-12 mr-4 ml-4">0.3100</small> x e<small class="font-12 mr-4 ml-4">−0.0017x</small> · (1 − u(x))</i>'
          },
          {
            title: 'Compute Paid Job Income:',
            content: '<br /><i class="font-18 flex flex-ai-end flex-jc-center text-center mt-10">yPaid(x) = P<small class="font-12 mr-4">market</small>(x) × u(x)</i>'
          },
          {
            title: 'Calculate Total Income:',
            content: '<br /><i class="font-18 flex flex-ai-end flex-jc-center text-center mt-10">I(x) = yUBI(x) + yPaid(x)</i>'
          },
          {
            title: 'Distribute Income:',
            content: "Allocate I(x) to CPs based on their resource contributions and utilization."
          },
          {
            title: 'Increment Day:',
            content: "Increase x by 1."
          },
          {
            title: 'Repeat:',
            content: "Continue the process for each subsequent day."
          }
        ]
      },
      {
        t: '<b class="font-bold">Visualization of Income Over Time <br /><br />Scenarios</b>',
        text: [
          "We consider three scenarios to illustrate how CPs' income evolves over time:"
        ]
      },
      {
        ul: [
          {
            title: 'No Paid Jobs',
            content: 'u(x) = 0 : CPs receive income solely from UBI.'
          },
          {
            title: 'Low Paid Job Demand',
            content: "u(x) = 0.1: CPs primarily earn UBI income with a small contribution from paid jobs."
          },
          {
            title: 'Increasing Paid Job Demand:',
            content: "Resource usage rate u(x) increases over time, shifting CPs' income from UBI to paid jobs."
          }
        ],
        images: [imageGS04, imageGS05]
      },
      {
        t: '<b class="font-bold">Interpretation of the Plots <br /><br />Total Income Over 720 Days</b>',
        ul: [
          {
            title: 'Scenario 1:',
            content: 'u(x) = 0 <br /><ol><li>CPs receive income solely from UBI.</li><li>The total income decreases gradually over time due to the decay in the UBI function.</li></ol>'
          },
          {
            title: 'Scenario 2:',
            content: 'u(x) = 0.1 <br /><ol><li>CPs receive slightly less UBI income than in Scenario 1 due to the 10% resource usage.</li><li>Paid job income contributes minimally, resulting in a slightly lower total income.</li></ol>'
          },
          {
            title: 'Scenario 3:',
            content: 'Increasingu(x) <br /><ol><li>Initially, total income is similar to Scenario 1.</li><li>As u(x) increases, paid job income increases while UBI income decreases.</li><li>Total income remains relatively stable or increases slightly, demonstrating that paid job income offsets the reduction in UBI.</li></ol>'
          }
        ]
      },
      {
        t: '<b class="font-bold">Income Components for Scenario 3</b>',
        ul: [
          {
            title: 'UBI Income:',
            content: '<br /><ol><li>Decreases over time as resource usage rate u(x) increases.</li><li>Reflects the transition from reliance on UBI to paid jobs.</li></ol>'
          },
          {
            title: 'Paid Job Income:',
            content: '<br /><ol><li>Increases over time with the increase in u(x) .</li><li>Compensates for the decrease in UBI income.</li></ol>'
          },
          {
            title: 'Total Income Stability:',
            content: '<br /><ol><li>The sum of UBI and paid job income maintains income stability for CPs.</li></ol>'
          }
        ]
      },
      {
        t: '<b class="font-bold">Resource Usage Rate u(x)  for Scenario 3</b>',
        ul: [
          {
            content: 'Shows a smooth increase from 0 to 0.8 over 720 days.'
          },
          {
            content: 'Reflects the gradual adoption of paid tasks in the network.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Data Points Illustration</b>',
        text: [
          "Below is a table of computed token allocations for selected days:"
        ],
        tableList: true
      },
      {
        text: [
          'Note: The "Cumulative UBI" column represents the definite integral of y(x) from day 1 to the specified day.'
        ]
      },
      {
        t: '<b class="flex font-medium" style="background-color: rgba(255, 152, 0, 0.3); border-radius: 0.1rem; padding: 0.1rem 0.2rem;">This table shows simulated data for UBI distribution calculated under the condition of U(x) = 0. The actual UBI release will dynamically change based on the network CP resource utilization rate.</b>',
        text: [
          '<br />'
        ]
      },
      {
        t: '<b class="font-bold">Impact of the Design <br /><br />Incentivizing Optimal Resource Utilization</b>',
        ul: [
          {
            title: 'Adaptive Compensation:',
            content: 'CPs are motivated to engage in paid jobs as they become available, earning higher income through market rates.'
          },
          {
            title: 'Resource Availability:',
            content: 'UBI ensures that CPs keep their resources available to the network, even during periods of low demand.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Sustainable Long-Term Distribution</b>',
        ul: [
          {
            title: 'Transition to Market-Based Economy:',
            content: 'As the network matures and paid job demand increases, CPs naturally shift from UBI reliance to market compensation.'
          },
          {
            title: 'Controlled Token Issuance:',
            content: 'The decreasing UBI allocation over time prevents token oversupply, maintaining economic stability.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Economic Implications</b>',
        ul: [
          {
            title: 'Income Stability:',
            content: 'CPs benefit from a combination of UBI and paid job income, smoothing income fluctuations.'
          },
          {
            title: 'Market Alignment:',
            content: 'Compensation reflects real-time network demand, promoting efficient resource allocation.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Conclusion</b>',
        text: [
          "The combined UBI and paid job compensation model for Swan Chain computing providers effectively balances incentives, supporting early network growth while promoting efficient resource utilization. By dynamically adjusting CPs' income based on resource usage rates and market demand, the model ensures sustainable network development and economic stability as the network transitions to a mature, user-driven ecosystem."
        ]
      },
      {
        t: '<b class="font-bold">Future Work</b>',
        ul: [
          {
            title: 'Dynamic Market Pricing:',
            content: 'Implement real-time market pricing mechanisms for paid jobs to reflect supply and demand accurately.'
          },
          {
            title: 'Adaptive UBI Parameters:',
            content: 'Explore methods to adjust UBI parameters ( A ), ( B ), and ( C ) based on network growth metrics.'
          },
          {
            title: 'Enhanced Monitoring Tools:',
            content: 'Develop systems to track resource usage and job completion accurately, ensuring fair compensation.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Appendix <br /><br />Sample Calculations <br /><br />Scenario 1: No Paid Jobs <br /><br />Day 1:</b>',
        ul: [
          {
            title: 'UBI Income:',
            content: '<br /><i class="flex text-center mt-10">yUBI(1) = 20000 × 1<small class="font-12 mr-4 ml-4">0.31</small> × e<small class="font-12 mr-4 ml-4">−0.0017×1</small> ≈ 19,965.90 tokens</i><br />'
          },
          {
            title: 'Paid Job Income:',
            content: '<br />0 tokens (No paid job demand)<br /><br />'
          },
          {
            title: 'Total Income:',
            content: '<br /><i style="font-family: serif;">I</i> (1) = 19,965.90 + 0 = 19,965.90 tokens<br />'
          }
        ]
      },
      {
        t: '<b class="font-bold">Scenario 2: Low Paid Job Demand <br /><br />Day 1:</b>',
        ul: [
          {
            title: 'UBI Income:',
            content: '<br /><i class="flex text-center mt-10">yUBI(1) = 20000 × 1<small class="font-12 mr-4 ml-4">0.31</small> × e<small class="font-12 mr-4 ml-4">−0.0017×1</small> ≈ 19,965.90 tokens</i><br />'
          },
          {
            title: 'Paid Job Income:',
            content: '<br /><i class="flex text-center mt-10">yPaid(1) = 50000 × 0.1 = 5,000 tokens</i><br />'
          },
          {
            title: 'Total Income:',
            content: '<br /><i style="font-family: serif;">I</i> (1) = 19,965.90 + 5,000 = 24,965.90 tokens'
          }
        ]
      },
      {
        t: '<b class="font-bold">Scenario 3: Increasing Paid Job Demand <br /><br />Day 360:</b>',
        ul: [
          {
            title: 'UBI Income:',
            content: '<br /><i class="flex text-center mt-10">yUBI(360) = 20000 × 360<small class="font-12 mr-4 ml-4">0.31</small> × e<small class="font-12 mr-4 ml-4">−0.0017×360</small> ≈ 13,898.99 tokens</i><br />'
          },
          {
            title: 'Paid Job Income:',
            content: '<br /><i class="flex text-center mt-10">yPaid(360) = 50000 × 0.4 = 20,000 tokens</i><br />'
          },
          {
            title: 'Total Income:',
            content: '<br /><i style="font-family: serif;">I</i> (360) = 13,898.99 + 20,000 = 33,898.99 tokens'
          }
        ]
      },
      {
        t: '<b class="font-bold">Day 720:</b>',
        ul: [
          {
            title: 'UBI Income:',
            content: '<br /><i class="flex text-center mt-10">yUBI(720) = 20000 × 720<small class="font-12 mr-4 ml-4">0.31</small> × e<small class="font-12 mr-4 ml-4">−0.0017×720</small> × (1 − 0.8) ≈ 2,477.66 tokens</i><br />'
          },
          {
            title: 'Paid Job Income:',
            content: '<br /><i class="flex text-center mt-10">yPaid(720) = 50000 × 0.8 = 40,000 tokens</i><br />'
          },
          {
            title: 'Total Income:',
            content: '<br /><i style="font-family: serif;">I</i> (720) = 2,477.66 + 40,000 = 42,477.66 tokens'
          }
        ]
      },
      {
        t: '<b class="font-bold">Observations</b>',
        ul: [
          {
            title: 'Income Stability: ',
            content: 'Despite the decrease in UBI income over time, total income remains stable or increases due to higher compensation from paid jobs.'
          },
          {
            title: 'Incentive Alignment: ',
            content: 'Community participants (CPs) are incentivized to participate in paid jobs without experiencing significant income loss during transitions from UBI reliance to paid employment.'
          }
        ]
      }
    ]
  }
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
