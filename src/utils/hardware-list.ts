const hardwareAll = [
  {
    instance_type: 'M1ae.small',
    gpu: 'Nvidia 2060',
    vcpu: '4',
    memory: '8',
    price_hour: '2'
  },
  {
    instance_type: 'M1ae.medium',
    gpu: 'Nvidia 2060',
    vcpu: '4',
    memory: '16',
    price_hour: '3'
  },
  {
    instance_type: 'M1ae.large',
    gpu: 'Nvidia 3060',
    vcpu: '8',
    memory: '8',
    price_hour: '4'
  },
  {
    instance_type: 'M1ae.xlarge',
    gpu: 'Nvidia 3070',
    vcpu: '8',
    memory: '8',
    price_hour: '5'
  },
  {
    instance_type: 'M1ae.2xlarge',
    gpu: 'Nvidia 2080 Ti',
    vcpu: '4',
    memory: '8',
    price_hour: '6'
  },
  {
    instance_type: 'M1ae.3xlarge',
    gpu: 'Nvidia 2080 Ti',
    vcpu: '8',
    memory: '16',
    price_hour: '6.5'
  },
  {
    instance_type: 'R1ae.small',
    gpu: 'Nvidia 2080 TI',
    vcpu: '8',
    memory: '32',
    price_hour: '12'
  },
  {
    instance_type: 'M2ae.small',
    gpu: 'Nvidia 3060 Ti',
    vcpu: '4',
    memory: '8',
    price_hour: '7'
  },
  {
    instance_type: 'M2ae.medium',
    gpu: 'Nvidia 3060 Ti',
    vcpu: '8',
    memory: '16',
    price_hour: '8'
  },
  {
    instance_type: 'M2ae.large',
    gpu: 'Nvidia 3070',
    vcpu: '4',
    memory: '8',
    price_hour: '8.5'
  },
  {
    instance_type: 'M2ae.xlarge',
    gpu: 'Nvidia 3070 Ti',
    vcpu: '8',
    memory: '16',
    price_hour: '9'
  },
  {
    instance_type: 'G1ae.small',
    gpu: 'Nvidia 3080',
    vcpu: '4',
    memory: '8',
    price_hour: '10'
  },
  {
    instance_type: 'G1ae.medium',
    gpu: 'Nvidia 3080',
    vcpu: '8',
    memory: '16',
    price_hour: '11'
  },
  {
    instance_type: 'G1ae.large',
    gpu: 'Nvidia 3080 Ti',
    vcpu: '4',
    memory: '8',
    price_hour: '12'
  },
  {
    instance_type: 'R1ae.medium',
    gpu: 'Nvidia 3080',
    vcpu: '8',
    memory: '32',
    price_hour: '22'
  },
  {
    instance_type: 'R1ae. large',
    gpu: 'Nvidia 3090',
    vcpu: '8',
    memory: '32',
    price_hour: '30'
  },
  {
    instance_type: 'G1ae.xlarge',
    gpu: 'Nvidia 3080 Ti',
    vcpu: '8',
    memory: '16',
    price_hour: '13'
  },
  {
    instance_type: 'G2ae.small',
    gpu: 'Nvidia T4',
    vcpu: '4',
    memory: '8',
    price_hour: '9'
  },
  {
    instance_type: 'G2ae.medium',
    gpu: 'Nvidia T4',
    vcpu: '8',
    memory: '16',
    price_hour: '10'
  },
  {
    instance_type: 'G2ae.large',
    gpu: 'Nvidia A10G',
    vcpu: '4',
    memory: '8',
    price_hour: '11'
  },
  {
    instance_type: 'G2ae.xlarge',
    gpu: 'Nvidia A10G',
    vcpu: '12',
    memory: '16',
    price_hour: '12'
  },
  {
    instance_type: 'Hpc1ae.small',
    gpu: 'Nvidia 3090',
    vcpu: '4',
    memory: '8',
    price_hour: '14'
  },
  {
    instance_type: 'Hpc1ae.medium',
    gpu: 'Nvidia 3090',
    vcpu: '8',
    memory: '16',
    price_hour: '16'
  },
  {
    instance_type: 'Hpc1ae.large',
    gpu: 'Nvidia 3090 Ti',
    vcpu: '4',
    memory: '8',
    price_hour: '18'
  },
  {
    instance_type: 'Hpc1ae.xlarge',
    gpu: 'Nvidia 3090 Ti',
    vcpu: '8',
    memory: '16',
    price_hour: '20'
  },
  {
    instance_type: 'Hpc1ae.2xlarge',
    gpu: 'NVIDIA A4000',
    vcpu: '4',
    memory: '8',
    price_hour: '21'
  },
  {
    instance_type: 'Hpc1ae.3xlarge',
    gpu: 'NVIDIA A4000',
    vcpu: '8',
    memory: '16',
    price_hour: '21'
  },
  {
    instance_type: 'T1ae.small',
    gpu: 'Nvidia 2060',
    vcpu: '12',
    memory: '64',
    price_hour: '32'
  },
  {
    instance_type: 'T1ae.medium',
    gpu: 'Nvidia 2080 Ti',
    vcpu: '12',
    memory: '64',
    price_hour: '36'
  },
  {
    instance_type: 'T1ae.large',
    gpu: 'Nvidia 3060 Ti',
    vcpu: '12',
    memory: '64',
    price_hour: '40'
  },
  {
    instance_type: 'T1ae.xlarge',
    gpu: 'Nvidia 3070',
    vcpu: '12',
    memory: '64',
    price_hour: '42'
  },
  {
    instance_type: 'T1ae.2xlarge',
    gpu: 'Nvidia 3070 Ti',
    vcpu: '12',
    memory: '64',
    price_hour: '48'
  },
  {
    instance_type: 'T1ae.3xlarge',
    gpu: 'Nvidia 3080 Ti',
    vcpu: '12',
    memory: '64',
    price_hour: '50'
  },
  {
    instance_type: 'Hpc2ae.small',
    gpu: 'Nvidia 4090',
    vcpu: '4',
    memory: '8',
    price_hour: '22'
  },
  {
    instance_type: 'Hpc2ae.medium',
    gpu: 'Nvidia 4090',
    vcpu: '8',
    memory: '16',
    price_hour: '24'
  },
  {
    instance_type: 'Hpc2ae.large',
    gpu: 'Nvidia 4090 Ti',
    vcpu: '4',
    memory: '8',
    price_hour: '26'
  },
  {
    instance_type: 'Hpc2ae.xlarge',
    gpu: 'Nvidia 4090 Ti',
    vcpu: '8',
    memory: '16',
    price_hour: '28'
  },
  {
    instance_type: 'P1ae.small',
    gpu: 'Nvidia A100',
    vcpu: '8',
    memory: '32',
    price_hour: '30'
  },
  {
    instance_type: 'P1ae.medium',
    gpu: 'Nvidia A100',
    vcpu: '12',
    memory: '64',
    price_hour: '32'
  },
  {
    instance_type: 'P1ae.large',
    gpu: 'Nvidia H100',
    vcpu: '8',
    memory: '32',
    price_hour: '40'
  },
  {
    instance_type: 'P1ae.xlarge',
    gpu: 'Nvidia H100',
    vcpu: '12',
    memory: '64',
    price_hour: '45'
  },
  {
    instance_type: 'T1az.large',
    gpu: 'Nvidia T4',
    vcpu: '8',
    memory: '64',
    price_hour: '52'
  },
  {
    instance_type: 'T1az.xlarge',
    gpu: 'Nvidia A10G',
    vcpu: '8',
    memory: '64',
    price_hour: '55'
  },
  {
    instance_type: 'T1az.2xlarge',
    gpu: 'Nvidia 4090',
    vcpu: '8',
    memory: '64',
    price_hour: '60'
  },
  {
    instance_type: 'T1az.3xlarge',
    gpu: 'Nvidia 4090 Ti',
    vcpu: '8',
    memory: '64',
    price_hour: '62'
  },
  {
    instance_type: 'T1az.4xlarge',
    gpu: 'Nvidia A4000',
    vcpu: '8',
    memory: '64',
    price_hour: '65'
  },
  {
    instance_type: 'T1az.5xlarge',
    gpu: 'Nvidia A6000',
    vcpu: '8',
    memory: '64',
    price_hour: '68'
  },
  {
    instance_type: 'T1az.6xlarge',
    gpu: 'Nvidia L40',
    vcpu: '8',
    memory: '64',
    price_hour: '70'
  },
  {
    instance_type: 'T1az.7xlarge',
    gpu: 'Nvidia L40s',
    vcpu: '8',
    memory: '64',
    price_hour: '72'
  },
  {
    instance_type: 'T1az.8xlarge',
    gpu: 'Nvidia H100',
    vcpu: '8',
    memory: '64',
    price_hour: '75'
  },
  {
    instance_type: 'T1az.9xlarge',
    gpu: 'Nvidia H200',
    vcpu: '8',
    memory: '64',
    price_hour: '90'
  },
  {
    instance_type: 'T1az.10xlarge',
    gpu: 'Nvidia H800',
    vcpu: '8',
    memory: '64',
    price_hour: '80'
  },
  {
    instance_type: 'T2az.large',
    gpu: 'Nvidia T4',
    vcpu: '12',
    memory: '128',
    price_hour: '62'
  },
  {
    instance_type: 'T2az.xlarge',
    gpu: 'Nvidia A10G',
    vcpu: '12',
    memory: '128',
    price_hour: '65'
  },
  {
    instance_type: 'T2az.2xlarge',
    gpu: 'Nvidia 4090',
    vcpu: '12',
    memory: '128',
    price_hour: '70'
  },
  {
    instance_type: 'T2az.3xlarge',
    gpu: 'Nvidia 4090 Ti',
    vcpu: '12',
    memory: '128',
    price_hour: '72'
  },
  {
    instance_type: 'T2az.4xlarge',
    gpu: 'Nvidia A4000',
    vcpu: '12',
    memory: '128',
    price_hour: '75'
  },
  {
    instance_type: 'T2az.5xlarge',
    gpu: 'Nvidia A6000',
    vcpu: '12',
    memory: '128',
    price_hour: '78'
  },
  {
    instance_type: 'T2az.6xlarge',
    gpu: 'Nvidia L40',
    vcpu: '12',
    memory: '128',
    price_hour: '80'
  },
  {
    instance_type: 'T2az.7xlarge',
    gpu: 'Nvidia L40s',
    vcpu: '12',
    memory: '128',
    price_hour: '82'
  },
  {
    instance_type: 'T2az.8xlarge',
    gpu: 'Nvidia H100',
    vcpu: '12',
    memory: '128',
    price_hour: '85'
  },
  {
    instance_type: 'T2az.9xlarge',
    gpu: 'Nvidia H200',
    vcpu: '12',
    memory: '128',
    price_hour: '100'
  },
  {
    instance_type: 'T2az.10xlarge',
    gpu: 'Nvidia H800',
    vcpu: '12',
    memory: '128',
    price_hour: '90'
  },
  {
    instance_type: 'Hpc2ad.small',
    gpu: 'Nvidia 4060 TI',
    vcpu: '4',
    memory: '8',
    price_hour: '16'
  },
  {
    instance_type: 'Hpc2ad.medium',
    gpu: 'Nvidia 4070',
    vcpu: '4',
    memory: '8',
    price_hour: '18'
  },
  {
    instance_type: 'Hpc2ad.large',
    gpu: 'Nvidia 4080',
    vcpu: '4',
    memory: '8',
    price_hour: '20'
  },
  {
    instance_type: 'Hpc2ad.xlarge',
    gpu: 'Nvidia A2000',
    vcpu: '4',
    memory: '8',
    price_hour: '21'
  },
  {
    instance_type: 'Hpc2ad.1xlarge',
    gpu: 'Nvidia A5000',
    vcpu: '4',
    memory: '8',
    price_hour: '22'
  },
  {
    instance_type: 'Hpc2az.small',
    gpu: 'Nvidia 4060 TI',
    vcpu: '8',
    memory: '16',
    price_hour: '21'
  },
  {
    instance_type: 'Hpc2az.medium',
    gpu: 'Nvidia 4070',
    vcpu: '8',
    memory: '16',
    price_hour: '23'
  },
  {
    instance_type: 'Hpc2az.large',
    gpu: 'Nvidia 4080',
    vcpu: '8',
    memory: '16',
    price_hour: '25'
  },
  {
    instance_type: 'Hpc2az.xlarge',
    gpu: 'Nvidia A2000',
    vcpu: '8',
    memory: '16',
    price_hour: '26'
  },
  {
    instance_type: 'Hpc2az.1xlarge',
    gpu: 'Nvidia A5000',
    vcpu: '8',
    memory: '16',
    price_hour: '27'
  },
  {
    instance_type: 'R2ae.small',
    gpu: 'Nvidia 4070',
    vcpu: '8',
    memory: '32',
    price_hour: '35'
  },
  {
    instance_type: 'R2ae.medium',
    gpu: 'Nvidia 4080',
    vcpu: '8',
    memory: '32',
    price_hour: '38'
  },
  {
    instance_type: 'R2ae.large',
    gpu: 'Nvidia 4090',
    vcpu: '8',
    memory: '32',
    price_hour: '50'
  },
  {
    instance_type: 'R2ae.xlarge',
    gpu: 'Nvidia A4000',
    vcpu: '8',
    memory: '32',
    price_hour: '52'
  },
  {
    instance_type: 'R2ae.1xlarge',
    gpu: 'Nvidia A5000',
    vcpu: '8',
    memory: '32',
    price_hour: '54'
  },
  {
    instance_type: 'R2ae.2xlarge',
    gpu: 'Nvidia T4',
    vcpu: '8',
    memory: '32',
    price_hour: '56'
  },
  {
    instance_type: 'R2ae.3xlarge',
    gpu: 'Nvidia A10G',
    vcpu: '8',
    memory: '32',
    price_hour: '58'
  },
]

export default hardwareAll