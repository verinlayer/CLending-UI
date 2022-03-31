/* eslint-disable */

import poolsAbi from "@/utils/abi/borrowPoolsAbi/index";
import tokensAbi from "@/utils/abi/tokensAbi/index";
import swapAbi from "@/utils/abi/swap";
import reverseSwapAbi from "@/utils/abi/reverseSwap";

export default [
  {
    name: "yvUSDT v2",
    contractChain: "0x01",
    id: 1,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronLowRiskV1",
      address: "0x551a7CfF4de931F32893c928bBc3D25bF1Fc5147",
      abi: poolsAbi.CauldronLowRiskV1,
    },
    token: {
      name: "yvUSDT",
      decimals: 6,
      address: "0x7Da96a3891Add058AdA2E826306D812C638D87a7",
      abi: tokensAbi.yvUSDT,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 3,
    interest: 0.8,
    ltv: 90,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x1D7C1C99045C1c776607F8C1eC9DDd27a2d319D3",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "yvWETH v2",
    contractChain: "0x01",
    id: 2,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronMediumRiskV1",
      address: "0x6Ff9061bB8f97d948942cEF376d98b51fA38B91f",
      abi: poolsAbi.CauldronMediumRiskV1,
    },
    token: {
      name: "yvWETH",
      decimals: 18,
      address: "0xa9fE4601811213c340e850ea305481afF02f5b28",
      abi: tokensAbi.yvWETH,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 1.5,
    ltv: 75,
    initialMax: 300,
    swapContractInfo: {
      address: "0x726EE39e9c7d00498109Ebf4d05C28a47Bf04655",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xEc919debe0255b9A4fC60886729fa8874AA63FCe",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "yvYFI v2",
    contractChain: "0x01",
    id: 3,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronMediumRiskV1",
      address: "0xFFbF4892822e0d552CFF317F65e1eE7b5D3d9aE6",
      abi: poolsAbi.CauldronMediumRiskV1,
    },
    token: {
      name: "yvYFI",
      decimals: 18,
      address: "0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1",
      abi: tokensAbi.yvYFI,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 1.5,
    ltv: 75,
    initialMax: 15,
    swapContractInfo: {
      address: "0x69704cb6c34586F648bEB1634e692b8a09bf0D01",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x27F2bEc8890Fbc7920b88dDbA0Bf0e7faC3c7Bc2",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "yvUSDC v2",
    contractChain: "0x01",
    id: 4,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronLowRiskV1",
      address: "0x6cbAFEE1FaB76cA5B5e144c43B3B50d42b7C8c8f",
      abi: poolsAbi.CauldronLowRiskV1,
    },
    token: {
      name: "yvUSDC",
      decimals: 6,
      address: "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9",
      abi: tokensAbi.yvUSDC,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 3,
    interest: 0.8,
    ltv: 90,
    initialMax: 300,
    swapContractInfo: {
      address: "0x40f64fF796ea941F2383ce579EEe147a8732f01B",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xCA78478456b044AC13954a9172583Dd1737E52d2",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "xSUSHI",
    contractChain: "0x01",
    id: 5,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronMediumRiskV1",
      address: "0xbb02A884621FB8F5BFd263A67F58B65df5b090f3",
      abi: poolsAbi.CauldronMediumRiskV1,
    },
    token: {
      name: "xSUSHI",
      decimals: 18,
      address: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
      abi: tokensAbi.xSUSHI,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 1.5,
    ltv: 75,
    initialMax: 15,
    swapContractInfo: {
      address: "0xbF6F6654dB1c1742377ddF89cb42b3440B6E6699",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x1b34Da94F48110b64B7a437E057AE3e794C625a2",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "yvWETH v2",
    contractChain: "0x01",
    id: 6,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronMediumRiskV1",
      address: "0x920D9BD936Da4eAFb5E25c6bDC9f6CB528953F9f",
      abi: poolsAbi.CauldronMediumRiskV1,
    },
    token: {
      name: "yvWETH",
      decimals: 18,
      address: "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
      abi: tokensAbi.yvWETH,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 7.5,
    interest: 0,
    ltv: 80,
    initialMax: 300,
    swapContractInfo: {
      address: "0x96ffaA1B3D647A2Ab4CFda942F411f4abf749cdb",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x4e5659446A8C42E36bEA73261285e569D1498A5e",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "yvcrvIB",
    contractChain: "0x01",
    id: 7,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0xEBfDe87310dc22404d918058FAa4D56DC4E93f0A",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "yvcrvIB",
      decimals: 18,
      address: "0x27b7b1ad7288079A66d12350c828D3C00A6F07d7",
      abi: tokensAbi.yvcrvIB,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 7,
    interest: 1.5,
    ltv: 90,
    initialMax: 300,
    swapContractInfo: {
      address: "0xC09FAaAac10b59ce3Fc6a56539d43786049f4436",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x1945dC833570A040e28B6E02aAC913726e363180",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "xSUSHI",
    contractChain: "0x01",
    id: 8,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronMediumRiskV1",
      address: "0x98a84EfF6e008c5ed0289655CcdCa899bcb6B99F",
      abi: poolsAbi.CauldronMediumRiskV1,
    },
    token: {
      name: "xSUSHI",
      decimals: 18,
      address: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
      abi: tokensAbi.xSUSHI,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 5,
    interest: 0.5,
    ltv: 85,
    borrowFee: 0.5,
    initialMax: 15,
    swapContractInfo: {
      address: "0xbF6F6654dB1c1742377ddF89cb42b3440B6E6699",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x1b34Da94F48110b64B7a437E057AE3e794C625a2",
      abi: reverseSwapAbi,
    },
  },
  // {
  //   name: "ALCX",
  //   contractChain: "0x01",
  //   id: 9,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   contract: {
  //     name: "CauldronMediumRiskV1",
  //     address: "0xBf5526fcCE86B925891047efD3a7021e14D4A539",
  //     abi: poolsAbi.CauldronMediumRiskV1,
  //   },
  //   token: {
  //     name: "ALCX",
  //     decimals: 18,
  //     address: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
  //     abi: tokensAbi.ALCX,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 12.5,
  //   interest: 1.5,
  //   ltv: 75,
  //   initialMax: 15,
  //   swapContractInfo: {
  //     address: "0xf9BAE4c8C6e933d4D9dcAc611715024a1Ecb7527",
  //     abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ALCX","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIM","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIM3POOL","outputs":[{"internalType":"contract CurvePool","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TETHER","outputs":[{"internalType":"contract TetherToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bentoBox","outputs":[{"internalType":"contract IBentoBoxV1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"shareToMin","type":"uint256"},{"internalType":"uint256","name":"shareFrom","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"extraShare","type":"uint256"},{"internalType":"uint256","name":"shareReturned","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xB63Eb840dAEE054d9971DeDFeCBE0667A08C51F8",
  //     abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ALCX","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIM3POOL","outputs":[{"internalType":"contract CurvePool","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TETHER","outputs":[{"internalType":"contract TetherToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bentoBox","outputs":[{"internalType":"contract IBentoBoxV1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"toToken","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"shareToMin","type":"uint256"},{"internalType":"uint256","name":"shareFrom","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"extraShare","type":"uint256"},{"internalType":"uint256","name":"shareReturned","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"toToken","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"refundTo","type":"address"},{"internalType":"uint256","name":"shareFromSupplied","type":"uint256"},{"internalType":"uint256","name":"shareToExact","type":"uint256"}],"name":"swapExact","outputs":[{"internalType":"uint256","name":"shareUsed","type":"uint256"},{"internalType":"uint256","name":"shareReturned","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],
  //   },
  // },
  {
    name: "wsOHM",
    contractChain: "0x01",
    id: 10,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0x003d5a75d284824af736df51933be522de9eed0f",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "wsOHM",
      decimals: 18,
      address: "0xCa76543Cf381ebBB277bE79574059e32108e3E65",
      abi: tokensAbi.wsOHM,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 5.5,
    ltv: 75,
    borrowFee: 1,
    initialMax: 15,
    swapContractInfo: {
      address: "0x985486e621c28452f444bBcc8C84868BdA920922",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xc2BBE07e57508d61989251e399f96d1218B90523",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "sSpell",
    contractChain: "0x01",
    id: 11,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0xC319EEa1e792577C319723b5e60a15dA3857E7da",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "sSPELL",
      decimals: 18,
      address: "0x26FA3fFFB6EfE8c1E69103aCb4044C26B9A106a9",
      abi: tokensAbi.sSPELL,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 5,
    interest: 0.5,
    ltv: 85,
    borrowFee: 0.5,
    initialMax: 15,
    reverseSwapContractInfo: {
      address: "0x125238b61064ab2c00c3b22acb4b3b6e4732ae90",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "yvcrvSTETH",
    contractChain: "0x01",
    id: 12,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0x0BCa8ebcB26502b013493Bf8fE53aA2B1ED401C1",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "yvcrvSTETH",
      decimals: 18,
      address: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
      abi: tokensAbi.yvcrvSTETH,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 0.5,
    ltv: 75,
    borrowFee: 0.5,
    initialMax: 15,
    swapContractInfo: {
      address: "0x2764eae8481b1f463124c817feb310042618ca72",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xf314aD60C32F80671d00E3DE35E44A130829b795",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "ALCX",
    contractChain: "0x01",
    id: 13,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0x7b7473a76D6ae86CE19f7352A1E89F6C9dc39020",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "ALCX",
      decimals: 18,
      address: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
      abi: tokensAbi.ALCX,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 3.5,
    borrowFee: 0.5,
    ltv: 75,
    initialMax: 15,
    swapContractInfo: {
      address: "0xf9BAE4c8C6e933d4D9dcAc611715024a1Ecb7527",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xB63Eb840dAEE054d9971DeDFeCBE0667A08C51F8",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "FTM",
    contractChain: "0x01",
    id: 14,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0x05500e2Ee779329698DF35760bEdcAAC046e7C27",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "FTM",
      decimals: 18,
      address: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
      abi: tokensAbi.FTM,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 7.5,
    interest: 1,
    borrowFee: 0.5,
    ltv: 80,
    initialMax: 15,
    swapContractInfo: {
      address: "0x83A56BA3CfC236f8923bd27258C6ABfC19b375F4",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xe1847Af8F3292aC831066bd288889596a1fD09bB",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "cvx3pool",
    contractChain: "0x01",
    id: 15,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2CheckpointV1",
      address: "0x806e16ec797c69afa8590A55723CE4CC1b54050E",
      abi: poolsAbi.CauldronV2CheckpointV1,
    },
    token: {
      name: "cvx3pool",
      decimals: 18,
      address: "0xd92494CB921E5C0d3A39eA88d0147bbd82E51008",
      abi: tokensAbi.stkcvx3Crv,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 4,
    interest: 0.5,
    borrowFee: 0.5,
    ltv: 90,
    initialMax: 15,
    swapContractInfo: {
      address: "0x1fC83f75499b7620d53757f0b01E2ae626aAE530",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xef9c97E356bc5fF2460E25f40f608101CE15d70b",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "cvxtricrypto2",
    contractChain: "0x01",
    id: 16,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2CheckpointV1",
      address: "0x4EAeD76C3A388f4a841E9c765560BBe7B3E4B3A0",
      abi: poolsAbi.CauldronV2CheckpointV1,
    },
    token: {
      name: "cvxtricrypto2",
      decimals: 18,
      address: "0x5958A8DB7dfE0CC49382209069b00F54e17929C2",
      abi: tokensAbi.stakedThreeCrypto,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 5,
    interest: 3.5,
    borrowFee: 0.5,
    ltv: 90,
    initialMax: 15,
    swapContractInfo: {
      address: "0xe02bf848395A538C7C624C2BFe377B039f067a62",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x0E1eA2269D6e22DfEEbce7b0A4c6c3d415b5bC85",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "AGLD",
    contractChain: "0x01",
    id: 17,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0xc1879bf24917ebE531FbAA20b0D05Da027B592ce",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "AGLD",
      decimals: 18,
      address: "0x32353A6C91143bfd6C7d363B546e62a9A2489A20",
      abi: tokensAbi.AGLD,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 4,
    borrowFee: 0.5,
    ltv: 50,
    initialMax: 15,
    swapContractInfo: {
      address: "0xd404BEF05E9e256765440A1B9a6B56750c4cedEc",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x184a07c9CFD6165D6ACCDc373Eb00Bc5Cd8733cF",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "cvxrenCrv",
    contractChain: "0x01",
    id: 18,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2CheckpointV1",
      address: "0x35a0Dd182E4bCa59d5931eae13D0A2332fA30321",
      abi: poolsAbi.CauldronV2CheckpointV1,
    },
    token: {
      name: "cvxrenCrv",
      decimals: 18,
      address: "0xB65eDE134521F0EFD4E943c835F450137dC6E83e",
      abi: tokensAbi.cvxRen,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 0.5,
    borrowFee: 0.5,
    ltv: 75,
    initialMax: 15,
    swapContractInfo: {
      address: "0x3BAB7207D4E27b5DE4A15D540B7297281B45Ed2a",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x41D65ce96342a3d9c3D878856e283E839d29dF42",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "UST",
    contractChain: "0x01",
    id: 19,
    isDepreciated: true,
    isSwappersActive: true,
    strategyLink:
      "https://abracadabramoney.medium.com/our-ust-strategy-the-first-application-of-the-magic-potentialities-of-degenbox-ea35f13d6b5e",
    isDegenBox: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0xbc36FdE44A7FD8f545d459452EF9539d7A14dd63",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "UST",
      decimals: 18,
      address: "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
      abi: tokensAbi.UST,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 5,
    interest: 2,
    ltv: 90,
    borrowFee: 0.5,
    initialMax: 15,
    swapContractInfo: {
      address: "0x6B44d94ECDFaF0cb00dEF55212e226603BB68793",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xFf498bbCbf40d0f30f178F553e8Fa36153baf30b",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "SHIB",
    contractChain: "0x01",
    id: 20,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0x252dCf1B621Cc53bc22C256255d2bE5C8c32EaE4",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "SHIB",
      decimals: 18,
      address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
      abi: tokensAbi.SHIB,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 12.5,
    interest: 6,
    ltv: 70,
    borrowFee: 0.5,
    initialMax: 15,
    swapContractInfo: {
      address: "0xA3C8931Ec0fef9BF05386D154C4CD1e93AA92A12",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x1085Fa0770a88a132E3b8aae21C84755d70081ce",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "FTT",
    contractChain: "0x01",
    id: 21,
    isDepreciated: false,
    isSwappersActive: false,
    contract: {
      name: "CauldronV2Flat",
      address: "0x9617b633EF905860D919b88E1d9d9a6191795341",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "FTT",
      decimals: 18,
      address: "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9",
      abi: tokensAbi.FTT,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 7.5,
    interest: 2,
    ltv: 75,
    borrowFee: 0.5,
    initialMax: 15,
    swapContractInfo: {
      address: "0xA3C8931Ec0fef9BF05386D154C4CD1e93AA92A12",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x1085Fa0770a88a132E3b8aae21C84755d70081ce",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "sSpell",
    contractChain: "0x01",
    id: 22,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0x3410297D89dCDAf4072B805EFc1ef701Bb3dd9BF",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "sSPELL",
      decimals: 18,
      address: "0x26FA3fFFB6EfE8c1E69103aCb4044C26B9A106a9",
      abi: tokensAbi.sSPELL,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 10,
    interest: 0.5,
    ltv: 80,
    borrowFee: 0.5,
    initialMax: 15,
    reverseSwapContractInfo: {
      address: "0x125238b61064ab2c00c3b22acb4b3b6e4732ae90",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "Spell",
    contractChain: "0x01",
    id: 23,
    isDepreciated: false,
    isSwappersActive: true,
    isDegenBox: true,
    contract: {
      name: "CauldronV2",
      address: "0xCfc571f3203756319c231d3Bc643Cee807E74636",
      abi: poolsAbi.CauldronV2,
    },
    token: {
      name: "SPELL",
      decimals: 18,
      address: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
      abi: tokensAbi.SPELL,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 10,
    interest: 0.5,
    ltv: 80,
    borrowFee: 0.5,
    initialMax: 15,
    swapContractInfo: {
      address: "0x152b59937ecb0f1030D81D2206C4cBb3fd0cE015",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xeF633d1af20Ed99A69b7CF46Da5bE63dA07eD5ee",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "cvx3pool",
    contractChain: "0x01",
    id: 24,
    isDepreciated: true,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2Flat",
      address: "0x6371EfE5CD6e3d2d7C477935b7669401143b7985",
      abi: poolsAbi.CauldronV2Flat,
    },
    token: {
      name: "cvx3pool",
      decimals: 18,
      address: "0xd92494CB921E5C0d3A39eA88d0147bbd82E51008",
      abi: tokensAbi.stkcvx3Crv,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 4,
    interest: 1.5,
    borrowFee: 1,
    ltv: 92,
    initialMax: 15,
    swapContractInfo: {
      address: "0x1fC83f75499b7620d53757f0b01E2ae626aAE530",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xef9c97E356bc5fF2460E25f40f608101CE15d70b",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "cvx3pool",
    contractChain: "0x01",
    id: 25,
    isDepreciated: false,
    isSwappersActive: true,
    contract: {
      name: "CauldronV2CheckpointV1",
      address: "0x257101F20cB7243E2c7129773eD5dBBcef8B34E0",
      abi: poolsAbi.CauldronV2CheckpointV1,
    },
    token: {
      name: "cvx3pool",
      decimals: 18,
      address: "0x3Ba207c25A278524e1cC7FaAea950753049072A4",
      abi: tokensAbi.stkcvx3Crv,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 4,
    interest: 1.5,
    borrowFee: 1,
    ltv: 92,
    initialMax: 15,
    swapContractInfo: {
      address: "0x6e8093ebB80cD9f7395681ad8dE90ca93b08d9aa",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x286ed6C7a0797e370ED47C8f0f57AD68060AF7c5",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "UST",
    contractChain: "0x01",
    id: 26,
    isDepreciated: false,
    isSwappersActive: true,
    strategyLink:
      "https://abracadabramoney.medium.com/our-ust-strategy-the-first-application-of-the-magic-potentialities-of-degenbox-ea35f13d6b5e",
    isDegenBox: true,
    contract: {
      name: "CauldronV2",
      address: "0x59E9082E068Ddb27FC5eF1690F9a9f22B32e573f",
      abi: poolsAbi.CauldronV2,
    },
    token: {
      name: "UST",
      decimals: 18,
      address: "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
      abi: tokensAbi.UST,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 5,
    interest: 2.5,
    ltv: 90,
    borrowFee: 1,
    initialMax: 15,
    swapContractInfo: {
      address: "0x6B44d94ECDFaF0cb00dEF55212e226603BB68793",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xFf498bbCbf40d0f30f178F553e8Fa36153baf30b",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "WETH",
    contractChain: "0x01",
    id: 27,
    isDepreciated: false,
    isSwappersActive: true,
    isDegenBox: true,
    acceptUseDefaultBalance: true,
    contract: {
      name: "CauldronV2",
      address: "0x390Db10e65b5ab920C19149C919D970ad9d18A41",
      abi: poolsAbi.CauldronV2,
    },
    token: {
      name: "WETH",
      decimals: 18,
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      abi: tokensAbi.WETH,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 4,
    interest: 0,
    ltv: 90,
    borrowFee: 0.5,
    swapContractInfo: {
      address: "0x205d52E9eA8E42659AC5C7F83863B18d27d7E0F5",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0xfb81be4BdE317d32eC6934DB87e05CfDc5245437",
      abi: reverseSwapAbi,
    },
  },
  {
    name: "WBTC",
    contractChain: "0x01",
    id: 28,
    isDepreciated: false,
    isSwappersActive: true,
    isDegenBox: true,
    contract: {
      name: "CauldronV2",
      address: "0x5ec47EE69BEde0b6C2A2fC0D9d094dF16C192498",
      abi: poolsAbi.CauldronV2,
    },
    token: {
      name: "WBTC",
      decimals: 8,
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      abi: tokensAbi.WBTC,
    },
    pairToken: {
      name: "MIM",
      decimals: 18,
      address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      abi: tokensAbi.MIM,
    },
    stabilityFee: 7,
    interest: 0,
    ltv: 85,
    borrowFee: 0.5,
    swapContractInfo: {
      address: "0x6a5b5E025F2febf11646050e28240279215c0DA8",
      abi: swapAbi,
    },
    reverseSwapContractInfo: {
      address: "0x6C6A54a124E7B9859014425b8C0142ee0B19FeBf",
      abi: reverseSwapAbi,
    },
  },
  // {
  //   name: "PLP USDC/WETH 0.3%",
  //   contractChain: "0x01",
  //   id: 29,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0xfD5165bD318AB6e18bD0439a736e662986F6C5b2",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP USDC/WETH 0.3%",
  //     decimals: 18,
  //     address: "0xaE7b92C8B14E7bdB523408aE0A6fFbf3f589adD9",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0x04146736FEF83A25e39834a972cf6A5C011ACEad",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xc97C7F6e60Fdd610A0fCA4792BbBD1dbD028d474",
  //     abi: reverseSwapAbi,
  //   },
  // },
  // {
  //   name: "PLP USDC/WETH 0.05%",
  //   contractChain: "0x01",
  //   id: 30,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0xab8F52D568ba9B58c296522232240621Cf3f9dDa",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP USDC/WETH 0.05%",
  //     decimals: 18,
  //     address: "0x9683D433621A83aA7dd290106e1da85251317F55",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0x2cA12e0Ca5c2E1EE8DC18eAA0D24EEd647aE7531",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0x0E0E2c6204976bA791fBA95eFbb54f9f76556a57",
  //     abi: reverseSwapAbi,
  //   },
  // },
  // {
  //   name: "PLP WETH/USDT 0.3%",
  //   contractChain: "0x01",
  //   id: 31,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0x08371AAcA536370ffba76e1502E8a476AC3D9691",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP WETH/USDT 0.3%",
  //     decimals: 18,
  //     address: "0xa1BE64Bb138f2B6BCC2fBeCb14c3901b63943d0E",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0x2906ae98fdAf225a697a09158D10843A89CF0FC5",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xad2f284Db532A57d6940F3A46D875549DCEB030d",
  //     abi: reverseSwapAbi,
  //   },
  // },
  // {
  //   name: "PLP WETH/USDT 0.05%",
  //   contractChain: "0x01",
  //   id: 32,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0x5aC11966ca33128c516116b5a597554e9f25ab6f",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP WETH/USDT 0.05%",
  //     decimals: 18,
  //     address: "0x8d8B490fCe6Ca1A31752E7cFAFa954Bf30eB7EE2",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0x9Ca03FeBDE38c2C8A2E8F3d74E23a58192Ca921d",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xBd73aA17Ce60B0e83d972aB1Fb32f7cE138Ca32A",
  //     abi: reverseSwapAbi,
  //   },
  // },
  // {
  //   name: "PLP UST/USDT 0.05%",
  //   contractChain: "0x01",
  //   id: 33,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0x9ac502D3aD1FfB79F75D486Ae7D01Dd696B7F4B3",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP UST/USDT 0.05%",
  //     decimals: 18,
  //     address: "0xbA38029806AbE4B45D5273098137DDb52dA8e62F",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0x6E93686D34a9EBf7c589998a576AB603719500ef",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xc2141D069c75C76EFf779fc3Ca187233dAfC1e7c",
  //     abi: reverseSwapAbi,
  //   },
  // },
  // {
  //   name: "PLP USDC/UST 0.05%",
  //   contractChain: "0x01",
  //   id: 34,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0x293C100ce61B82B5Efc04F756E32a548158360d4",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP USDC/UST 0.05%",
  //     decimals: 18,
  //     address: "0x71fd405e9C2f55522A73911b4A2F39CD80E06051",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0x8176C5408c5DeC30149232A74Ef8873379b59982",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0x2b95bf93B5873c8cB9aE3374e3054736A5b79676",
  //     abi: reverseSwapAbi,
  //   },
  // },
  // {
  //   name: "PLP USDC/USDT 0.01%",
  //   contractChain: "0x01",
  //   id: 35,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0x02F3025c4808dC35Fee5638aeb98a62A00C2664a",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP USDC/USDT 0.01%",
  //     decimals: 18,
  //     address: "0x989442D5cCB27E7931095B0f3165c75a6def9bc3",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0xBc7Fa554a65A98502457FCFC2f1afa28113D7920",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xFa85b0BB658d519247494b6020Cae6E65f572950",
  //     abi: reverseSwapAbi,
  //   },
  // },
  // {
  //   name: "PLP WBTC/WETH 0.3%",
  //   contractChain: "0x01",
  //   id: 36,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0x7FC3e87AAF5564a725BD4d842A7239b575fEAB4F",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP WBTC/WETH 0.3%",
  //     decimals: 18,
  //     address: "0x212Aa024E25A9C9bAF5b5397B558B7ccea81740B",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0x64C65549C10D86De6F00C3B0D5132d8f742Af8C4",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xa1CdF7d4E983A4dbC3833f6Bbfdb3eB112fEF5C1",
  //     abi: reverseSwapAbi,
  //   },
  // },
  // {
  //   name: "PLP WBTC/WETH 0.05%",
  //   contractChain: "0x01",
  //   id: 37,
  //   isDepreciated: false,
  //   isSwappersActive: true,
  //   isDegenBox: true,
  //   contract: {
  //     name: "CauldronV2",
  //     address: "0x0A7224c7429E06661930c862Cc4b1815544A8701",
  //     abi: poolsAbi.CauldronV2,
  //   },
  //   token: {
  //     name: "PLP WBTC/WETH 0.05%",
  //     decimals: 18,
  //     address: "0xBE5d1d15617879B22C7b6a8e1e16aDD6d0bE3c61",
  //     abi: tokensAbi.WBTC,
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  //     abi: tokensAbi.MIM,
  //   },
  //   stabilityFee: 8,
  //   interest: 3,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   swapContractInfo: {
  //     address: "0x6Eb1709e0b562097BF1cc48Bc6A378446c297c04",
  //     abi: swapAbi,
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xf82397056A454ad3Cbb6be67b07dF7A75458bbfA",
  //     abi: reverseSwapAbi,
  //   },
  // },
];
