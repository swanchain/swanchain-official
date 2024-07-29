import image1 from '@/assets/img/network/about-image-Introduction.jpg'
import image2 from '@/assets/img/network/about-image-Diagram.jpg'
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
        t: '<b class="font-bold">1. Investors (20%)</b>',
        ul: [
          {
            title: 'Purpose: ',
            content: 'To fund the initial development and expansion phases of SwanChain.'
          },
          {
            title: 'Details: ',
            content: 'Investors provide essential capital for foundational buildout and scaling operations. This funding supports technical development, operational infrastructure, and initial market strategies.'
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
            title: 'Staking Requirement: ',
            content: 'Community members must stake tokens to participate in governance decisions.'
          },
          {
            title: 'Governance Rewards: ',
            content: 'Active participants may receive rewards, such as 1% of the DAO Treasury, to incentivize involvement and wise decision-making.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Annual Inflation and UBI</b>',
        ul: [
          {
            title: 'Annual Inflation Rate:',
            content: 'Swan Token is fixed supply, and the inflation rate is 0 .'
          },
          {
            title: 'Universal Basic Income (UBI):',
            content: 'Tokens are distributed as UBI to eligible network participants, promoting sustained engagement and rewarding contributions, this part is from airdrops.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Validators</b>',
        text: [
          "As a Layer 2 (L2) solution built on Ethereum, SwanChain leverages the security and consensus mechanisms of Ethereum's Layer 1 (L1) network. This means that SwanChain does not require its validators to secure the network. Instead, it inherits the robust security properties of the Ethereum mainnet."
        ]
      }
    ]
  },
  {
    sourceId: 'source-swanToken-9',
    targetId: 'Collateral-and-Slashing-Mechanism',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'Collateral and Slashing Mechanism',
    image: null,
    content: [],
    contentUl: [
      {
        t: '<b class="font-bold">Collateral Requirements</b>',
        text: [
          "To ensure commitment and mitigate potential risks associated with fraudulent activities, all providers on the network must post collateral to participate. There are three types of providers:"
        ]
      },
      {
        t: '<b class="font-bold">Fog Computing Provider (FCP)</b>',
        ul: [
          {
            title: 'Role: ',
            content: 'Offers a layered network extending cloud capabilities to the edge, providing services like AI model training and deployment.'
          },
          {
            title: 'Job-Based Collateral: ',
            content: 'Required to stake a significant amount of tokens based on the number and complexity of jobs they handle.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Edge Computing Provider (ECP)</b>',
        ul: [
          {
            title: 'Role:',
            content: 'Focuses on processing data for near real-time applications at the network’s edge, such as IoT sensor data analysis and image recognition.'
          },
          {
            title: 'Job-Based Collateral:',
            content: 'Required to stake a substantial amount of tokens based on the number and complexity of jobs they handle.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Market Provider (MP)</b>',
        ul: [
          {
            title: 'Role:',
            content: 'Facilitates the allocation of computing jobs to providers using an auction engine for job distribution and a payment engine for financial transactions.'
          },
          {
            title: 'Job-Based Collateral:',
            content: 'Required to stake a large amount of tokens based on the number and volume of transactions they manage.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Slashing Mechanism</b>',
        ul: [
          {
            title: 'Fraud Detection:',
            content: 'If a provider’s computing job is proven fraudulent, the collateral is subject to a 2x slashing.'
          },
          {
            title: 'Token Burn:',
            content: 'The slashed tokens are sent to a burning address, effectively removing them from circulation and penalizing dishonest behaviour.'
          }
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
    title: 'Income and Commission Structure for Computing Jobs Auction Engine and Market Providers (MP)',
    image: null,
    content: [],
    contentUl: [
      {
        t: '<b class="font-bold">Computing Jobs Auction Engine</b>',
      },
      {
        t: '<b class="font-bold">Income Generation</b>',
        text: [
          "The computing jobs auction engine facilitates the distribution of computing tasks to providers (FCPs and ECPs) through a competitive bidding process. This system ensures that tasks are allocated efficiently, with providers offering the best rates and performance."
        ]
      },
      {
        t: '<b class="font-bold">Commission Structure for Market Providers (MP)</b>',
        text: [
          "Market Providers (MP) play a crucial role in this ecosystem by managing the auction process. They ensure that tasks are allocated fairly and efficiently to the most suitable providers. MPs earn commissions from the tasks auctioned through the following structure:"
        ]
      },
      {
        t: '<b class="font-bold">Commission Calculation</b>',
        ul: [
          {
            title: 'Task Auction Commission Rate: ',
            content: "Let's assume the MP commission rate is set at 5% of the task value."
          },
          {
            title: 'Example Task Value: ',
            content: 'Assume a computing task is valued at 1000 Swan Tokens.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Calculation of MP Commission (<i class="font-18">MPC</i>)</b>',
        text: [
          '<i class="font-18 flex flex-jc-center text-center mt-10">MPC = TV × CR</i>',
          '<i class="font-18 flex flex-jc-center text-center mt-10">MPC = 1000SWAN × 0.05 = 50SWAN</i>'
        ]
      },
      {
        t: 'Where:',
        ul: [
          {
            title: '',
            content: "TV represents the Task Value."
          },
          {
            title: '',
            content: 'CR represents the Commission Rate.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Example Monthly Income for MP</b>',
        text: [
          'Assuming an MP manages 100 such tasks per month, the total monthly income from commissions (<i class="font-18">TMPC</i> <small class="font-12">Mon</small>) would be:',
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">TMPC<small class="font-12 mr-4">Mon</small> = Number of Tasks × MPC</i>',
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">TMPC<small class="font-12 mr-4">Mon</small> ​= 100 × 50 SWAN = 5,000 SWAN</i>'
        ]
      },
      {
        t: '<b class="font-bold">Income from Computing Jobs for Providers</b>',
        text: [' ']
      },
      {
        t: '<b class="font-bold">Income Calculation</b>',
        text: [
          'The income for providers (FCPs and ECPs) is derived from successfully completing and delivering computing tasks. The income per task is determined by the auction process, where the provider with the winning bid executes the task.'
        ]
      },
      {
        t: '<b class="font-bold">Example Calculation for Provider Income</b>',
        ul: [
          {
            title: 'Winning Bid: ',
            content: "Assume an FCP wins a bid for a computing task valued at 1000 Swan Tokens."
          },
          {
            title: 'Monthly Task Completion: ',
            content: 'Assume the FCP completes 20 such tasks per month.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Calculation of Monthly Income for FCP</b>',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10 mb-32">FCP<small class="font-12">Mon</small>​ = <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">i</small></div> task<small class="font-12" style="font-family: fangsong;">i</small>​ × V<small class="font-12" style="font-family: fangsong;">i</small></i>',
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10 mb-16">FCP<small class="font-12">Mon</small>​ = <div class="ml-4" style="position: relative;"><div class="font-24 w-100"><small class="font-12" style="font-family: fangsong;position: absolute;top: -0.08rem;left: 50%;transform: translate(-50%);white-space: nowrap;">20</small>∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);white-space: nowrap;">i=1</small></div> task<small class="font-12" style="font-family: fangsong;">i</small>​ ∗ V<small class="font-12" style="font-family: fangsong;">i</small></i>',
        ]
      },
      {
        t: 'Where:',
        ul: [
          {
            title: '',
            content: '<i class="font-18">FCP</i> <small class="font-12">Mon</small> represents the monthly income for the Fog Computing Provider (FCP).'
          },
          {
            title: '',
            content: '<i class="font-18">task</i> represents the number of tasks performed for in a month.'
          },
          {
            title: '',
            content: '<i class="font-18">V</i> represents the value of task.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Explanation:</b>',
        ul: [
          {
            title: 'Purchase Swan Products:',
            content: 'Users purchase products and pay in Swan ETH.'
          },
          {
            title: 'Match Compute Demand:',
            content: 'Demand is matched with supply via Proof-of-Work auction matching.'
          },
          {
            title: 'Fee Collection:',
            content: '75% of fees collected go to the Treasury, and 25% of fees go to Buyback.'
          },
          {
            title: 'Slashing:',
            content: 'Compute providers and auction engine validators can be slashed.'
          },
          {
            title: 'Staking:',
            content: 'Providers stake $SWAN to provide compute and participate in auction automation.'
          },
          {
            title: 'Rewards:',
            content: 'Rewards are paid in SWAN tokens to compute providers and auction engine validators.'
          },
          {
            title: 'Treasury Management:',
            content: 'DAO controls the treasury and allocates funds accordingly.'
          },
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
    title: 'Formulas for Collateral and Reward Calculation',
    image: null,
    content: [],
    contentUl: [
      {
        t: '<b class="font-bold">Fog Computing Provider (FCP) Formula</b>',
        ul: [
          {
            title: 'Collateral Requirement ',
            content: '(<i class="font-18">C <small class="font-12">FCP</small> </i>)'
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">C <small class="font-12 mr-4">FCP</small> = <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">i</small></div> J<small class="font-12" style="font-family: fangsong;">F</small>​ ∗ JCF</i>',
        ]
      },
      {
        t: 'Where:',
        ul: [
          {
            title: '',
            content: '<i class="font-18">C</i> <small class="font-12">FCP</small> represents the Collateral Requirement for the FCP'
          },
          {
            title: '',
            content: '<i class="font-18">J</i> <small class="font-12">F</small> represents the job handled by the FCP.'
          },
          {
            title: '',
            content: '<i class="font-18">JCP</i> represents the Job Complexity Factor, which is a factor based on the complexity and resources required for the jobs.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Edge Computing Provider (ECP) Formula</b>',
        ul: [
          {
            title: 'Collateral Requirement ',
            content: '(<i class="font-18">C <small class="font-12">ECP</small> </i>)'
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">C <small class="font-12 mr-4">ECP</small> = <div class="ml-4" style="position: relative;"><div class="font-24 w-100">∑</div><small class="font-12" style="font-family: fangsong;position: absolute;bottom: -0.12rem;left: 50%;transform: translate(-50%);">i</small></div> J<small class="font-12" style="font-family: fangsong;">E</small>​ ∗ JCF</i>',
        ]
      },
      {
        t: 'Where:',
        ul: [
          {
            title: '',
            content: '<i class="font-18">C</i> <small class="font-12">ECP</small> represents the Collateral Requirement for the ECP'
          },
          {
            title: '',
            content: '<i class="font-18">J</i> <small class="font-12">E</small> represents the job handled by the ECP.'
          },
          {
            title: '',
            content: '<i class="font-18">JCF</i>  represents the Job Complexity Factor, which is a factor based on the complexity and resources required for the jobs.'
          }
        ]
      },
      {
        t: '<b class="font-bold">Market Provider (MP) Formula</b>',
        ul: [
          {
            title: 'Collateral Requirement ',
            content: '(<i class="font-18">C <small class="font-12">MP</small> </i>)'
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">C <small class="font-12 mr-4">MP</small> = 200 × ( BC + CF )</i>',
        ]
      },
      {
        t: 'Where:',
        ul: [
          {
            title: '',
            content: 'BC (Base Collateral): A fixed minimum collateral required'
          },
          {
            title: '',
            content: 'CF: Total transaction volume handled by the Market Provider'
          }
        ]
      }
    ]
  },
  {
    sourceId: 'source-swanToken-12',
    targetId: 'UBI-Distribution-Example',
    actived: false,
    mainTitle: false,
    mainTitleText: '',
    title: 'UBI Distribution Example',
    image: null,
    content: [
      "To illustrate how SwanChain's Universal Basic Income (UBI) system works with a 5% annual inflation rate and a governance-determined allocation, we will provide examples using the given parameters:"
    ],
    contentUl: [
      {
        t: '<b class="font-bold">Parameters:</b>',
        ul: [
          {
            title: 'Annual Inflation Rate:',
            content: '5%'
          },
          {
            title: 'Circulating Supply for the First Year:',
            content: '50,000,000 Swan Tokens'
          },
          {
            title: 'UBI Allocation:',
            content: '<ol><li>40% to Edge Computing Providers (ECP)</li><li>40% to Fog Computing Providers (FCP)</li><li>20% to Market Providers (MP)</li></ol>'
          },
        ]
      },
      {
        t: '<b class="font-bold">Providers:</b>',
        ul: [
          {
            title: 'Number of ECPs:',
            content: '400'
          },
          {
            title: 'Number of FCPs:',
            content: '100'
          },
          {
            title: 'Number of MPs:',
            content: '3'
          },
        ]
      },
      {
        t: '<b class="font-bold">Step-by-Step Calculation:</b>',
        ul: [
          {
            title: 'Calculate the total annual UBI allocation:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">UBI <small class="font-12 mr-4">totalAnnual</small>  = CS <small class="font-12" style="font-family: fangsong;">SWAN</small>​ × RF <small class="font-12" style="font-family: fangsong;">annual</small></i>',
        ]
      },
      {
        t: 'Where:',
        ul: [
          {
            title: '',
            content: '<i class="font-18">UBI</i> <small class="font-12">totalAnnual</small> represents the Total Annual Universal Basic Income (UBI).'
          },
          {
            title: '',
            content: '<i class="font-18">CS</i> <small class="font-12">SWAN</small> represents the Circulating Supply of Swan tokens.'
          },
          {
            title: '',
            content: '<i class="font-18">RF</i> <small class="font-12">annual</small> represents the Annual Inflation Rate.'
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">UBI <small class="font-12 mr-4">totalAnnual</small>  = 50,000,000 × 0.05 = 2,500,000 SWAN</i>',
        ]
      },
      {
        t: '<b class="font-bold">Determine the allocation for each provider category:</b>',
        ul: [
          {
            title: 'ECP Allocation:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">ECP <small class="font-12 mr-4">Allocation</small> = UBI <small class="font-12 mr-4">totalAnnual</small> × 0.40 = 2,500,000 × 0.40 = 1,000,000 SWAN</i>',
        ]
      },
      {
        t: '',
        ul: [
          {
            title: 'FCP Allocation:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">FCP <small class="font-12 mr-4">Allocation</small> = UBI <small class="font-12 mr-4">totalAnnual</small> × 0.40 = 2,500,000 × 0.40 = 1,000,000 SWAN</i>',
        ]
      },
      {
        t: '',
        ul: [
          {
            title: 'MP Allocation:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-end text-center mt-10">MP <small class="font-12 mr-4">Allocation</small> = UBI <small class="font-12 mr-4">totalAnnual</small> × 0.20 = 2,500,000 × 0.20 = 500,000 Swan Tokens</i>',
        ]
      },
      {
        t: '<b class="font-bold">Calculate the UBI per provider in each category:</b>',
        ul: [
          {
            title: 'UBI per ECP:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10">UBI per ECP = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:135px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">ECP <small class="font-12 mr-4">Allocation</small></div><div>Number of ECPs</div></div> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">1,000,000</div><div>400</div></div> = 2,500 SWAN per ECP</i>',
        ]
      },
      {
        t: '',
        ul: [
          {
            title: 'UBI per FCP:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10">UBI per FCP = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:135px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">FCP <small class="font-12 mr-4">Allocation</small></div><div>Number of FCPs</div></div> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">1,000,000</div><div>100</div></div> = 10,000 Swan Tokens per FCP</i>',
        ]
      },
      {
        t: '',
        ul: [
          {
            title: 'UBI per MP:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10">UBI per MP = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:135px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">MP <small class="font-12 mr-4">Allocation</small></div><div>Number of MPs</div></div> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">500,000</div><div>3</div></div> ≈ 166,666.67 Swan Tokens per MP</i>',
        ]
      },
      {
        t: '<b class="font-bold">Calculate the monthly UBI per provider:</b>',
        ul: [
          {
            title: 'Monthly UBI per ECP:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10">UBI <small class="font-12">monthly</small> per ECP = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:135px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">UBI per ECP</div><div>12</div></div> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">2,500</div><div>12</div></div> ≈ 208.33 SWAN</i>',
        ]
      },
      {
        t: '',
        ul: [
          {
            title: 'Monthly UBI per FCP:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10">UBI <small class="font-12">monthly</small> per FCP = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:135px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">UBI per FCP</div><div>12</div></div> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">10,000</div><div>12</div></div> ≈ 833.33 SWAN</i>',
        ]
      },
      {
        t: '',
        ul: [
          {
            title: 'Monthly UBI per MP:',
            content: ' '
          }
        ]
      },
      {
        t: '',
        text: [
          '<i class="font-18 flex flex-jc-center flex-ai-center text-center mt-10">UBI <small class="font-12">monthly</small> per MP = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:135px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">UBI per MP</div><div>12</div></div> = <div class="flex flex-jc-center flex-ai-center flex-wrap text-center ml-8 mr-8" style="width:85px;white-space: nowrap;"><div class="flex flex-jc-center flex-ai-end text-center w-100" style="border-bottom:1px solid;">166,666.67</div><div>12</div></div> ≈ 13,888.89 SWAN</i>',
        ]
      },
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
