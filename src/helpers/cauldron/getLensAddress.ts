export const getLensAddress = (chainId: Number): string => {
  // check type
  switch (Number(chainId)) {
    case 80084:
      return "0x1E217d3cA2a19f2cB0F9f12a65b40f335286758E";
    case 43113:
      return "0xd1b705553dC6364f774F3816D03522C4D4545374";
    default:
      return "0x1d17009Dde57CAea3dC614962a6c01420776523f";
  }
};
