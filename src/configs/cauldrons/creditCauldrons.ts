import poolsAbi from "@/abis/borrowPoolsAbi/index";
import tokensAbi from "@/abis/tokensAbi/index";
import { useImage } from "@/helpers/useImage";

import type { CauldronConfig } from "@/configs/cauldrons/configTypes";

const mimInfo = {
  name: "MIM",
  icon: useImage(`assets/images/tokens/MIM.png`),
  decimals: 18,
  address: "0x767ae7fC9aa3Df829cf0056B9A74d37B993B22E4",
  abi: tokensAbi.MIM,
};

const config: Array<CauldronConfig> = [
  {
    icon: useImage(`assets/images/tokens/AVAX.png`),
    name: "WAVAX",
    chainId: 43113,
    id: 1,
    liquidationFee: 6,
    mcr: 80,
    borrowFee: 0.5,
    version: 4,
    cauldronSettings: {
      is0xSwap: false,
      isSwappersActive: false,
      isDegenBox: true,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: true,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      localBorrowAmountLimit: false,
      hasCrvClaimLogic: false,
      isTesting: false,
    },
    contract: {
      name: "CauldronV4",
      address: "0x870A74C60D7d7f290843D75526B62853B3685e6A",
      abi: poolsAbi.CauldronV4,
    },
    collateralInfo: {
      name: "WAVAX",
      decimals: 18,
      address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
      abi: tokensAbi.wETH,
    },
    mimInfo,
  },
];

export default config;
