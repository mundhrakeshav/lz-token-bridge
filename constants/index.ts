export enum ChainIDs{
    GOERLI = 5,
    ARBITRUM_GOERLI = 421613,
    MAINNET = 1,
    ARBITRUM = 42161,
}

export const ChainIDToName: Record<ChainIDs, string> = {
    [ChainIDs.GOERLI]: "goerli",
    [ChainIDs.ARBITRUM_GOERLI]: "arbitrumGoerli",
    [ChainIDs.MAINNET]: "mainnet",
    [ChainIDs.ARBITRUM]: "arbitrum",
}

export const LzChainIDs: Record<ChainIDs, number> = {
    [ChainIDs.GOERLI]: 10121,
    [ChainIDs.ARBITRUM_GOERLI]: 10143,
    [ChainIDs.MAINNET]: 101,
    [ChainIDs.ARBITRUM]: 110,
}

export const LzEndpoints: Record<ChainIDs, string> = {
    [ChainIDs.ARBITRUM_GOERLI]: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
    [ChainIDs.GOERLI]: "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23",
    [ChainIDs.MAINNET]: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675",
    [ChainIDs.ARBITRUM]: "0x3c2269811836af69497E5F486A85D7316753cf62",
}