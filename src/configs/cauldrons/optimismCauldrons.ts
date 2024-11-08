import poolsAbi from "@/abis/borrowPoolsAbi/index";
import tokensAbi from "@/abis/tokensAbi/index";
import zeroXLevSwapper from "@/abis/zeroXLevSwapper.js";
import zeroXLiqSwapper from "@/abis/zeroXLiqSwapper";
import lptokenWrapperAbi from "@/abis/lp/tokenWrapeerAbi";
import lpAbi from "@/abis/lp/lpAbi";
import { useImage } from "@/helpers/useImage";

import type { CauldronConfig } from "@/configs/cauldrons/configTypes";

const mimInfo = {
  name: "MIM",
  icon: useImage(`assets/images/tokens/MIM.png`),
  decimals: 18,
  address: "0x73c3265E1E9775367Bb8F4bf4E5636b8578b10f9",
  abi: tokensAbi.MIM,
};

const config: Array<CauldronConfig> = [
  {
    icon: useImage(`assets/images/tokens/WETH.png`),
    name: "WETH",
    chainId: 10,
    id: 1,
    liquidationFee: 6.5,
    mcr: 80,
    borrowFee: 0.25,
    version: 3,
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
      address: "0xf09f48D03B834B6818cAaEe0acd60b45515D863D",
      abi: poolsAbi.CauldronV4,
    },
    collateralInfo: {
      name: "WETH",
      decimals: 18,
      address: "0x4200000000000000000000000000000000000006",
      abi: tokensAbi.wETH,
    },
    mimInfo,
  },
];

export default config;
