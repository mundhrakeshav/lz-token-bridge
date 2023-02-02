export enum ChainIDs{
    GOERLI = 5,
    ARBITRUM_GOERLI = 421613,
}

export const LzChainIDs: Record<ChainIDs, number> = {
    [ChainIDs.GOERLI]: 10121,
    [ChainIDs.ARBITRUM_GOERLI]: 10143,
}

export const LzEndpoints: Record<ChainIDs, string> = {
    [ChainIDs.ARBITRUM_GOERLI]: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
    [ChainIDs.GOERLI]: "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23"
}

// ONFT Arb: 0x702AC9C50Abd09368A1b4A58857502Cd3040ce31
// ONFTProxy Goerli: 0xE466a1D717BD43646E4b9B51909f77fFa17E2A28
// ERC721 Goerli: 0xC52639d3Ce0e381c11951543650b222C8ee2a6DD