import { avalancheFuji } from "@wagmi/core/chains";
import { useImage } from "@/helpers/useImage";
import { filterRpcUrls } from "@/helpers/chains/utils";
import { initPublicClient } from "@/helpers/chains/initPublicClient";
import { initStaticJsonRpcProvider } from "@/helpers/chains/initStaticJsonRpcProvider";

const fuji = {
  id: 43113,
  name: "Avalanche Fuji Testnet",
  nativeCurrency: { name: "Fuji", symbol: "Avax", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/avalanche_fuji"],
    },
  },
  blockExplorers: {
    default: {
      name: "Snowscan",
      url: "https://testnet.snowscan.xyz",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 
      7096959,
    },
  },
};

const rpcList = [
  "https://rpc.ankr.com/avalanche_fuji",
  "https://avalanche-fuji-c-chain-rpc.publicnode.com",
  "https://api.avax-test.network/ext/bc/C/rpc",
];

const viemConfig = {
  ...fuji,
  rpcUrls: {
    public: {
      http: rpcList,
    },
    default: {
      http: rpcList,
    },
  },
};

const publicClient = initPublicClient(viemConfig);
const ethersProvider = await initStaticJsonRpcProvider(fuji.id);

export const testnetAvalanceConfig = {
  publicClient,
  ethersProvider,
  viemConfig: viemConfig,
  chainId: fuji.id,
  chainName: "Avalanche Fuji Testnet",
  symbol: "AVAX",
  icon: useImage("assets/images/networks/avalanche-icon.svg"),
  baseTokenIcon: useImage("assets/images/tokens/AVAX.png"),
  baseTokenSymbol: "AVAX",
  networkIcon: useImage(`assets/images/networks/avalanche.svg`),
  lzChainId: 109,
};
