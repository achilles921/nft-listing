import React from "react"
import { useState } from 'react'
import web3 from 'web3'
import axios from 'axios'
import { Alchemy, Network } from 'alchemy-sdk'

import NFTGrid from './NFTGrid'

const settings = {
  apiKey: "YQTvWdthdfp2-uksqG9eEHGcpUZbP6oT",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Home = () => {
  const [address, setAddress] = useState("0x78e6beEAF1E3ea7Ecb788dC150d633E8c68F1289")
  const [nfts, setNfts] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [pageKey, setPageKey] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const readMore = async () => {
    const nftList = await alchemy.nft.getNftsForOwner(address, {
      pageKey: pageKey,
      excludeFilters: ["SPAM"]
    })
    const merged = [...nfts, ...nftList.ownedNfts.filter(nft => nft.media.length > 0)]
    console.log(merged)
    setNfts(merged)
    setPageKey(nftList.pageKey)
    setIsLoading(false)
  }

  const onReadMore = () => {
    setIsLoading(true)
    readMore()
  }

  const onChangeAddress = (e) => {
    setAddress(e.target.value)
  }

  const isValidAddress = (address) => {
    return web3.utils.isAddress(address);
  }

  const getOwnedTokens = async (wallet) => {
    // Get all the NFTs owned by an address
    const nftList = await alchemy.nft.getNftsForOwner(wallet, {excludeFilters: ["SPAM"]})
    setNfts(nftList.ownedNfts.filter(nft => nft.media.length > 0))
    setTotalCount(nftList.totalCount)
    setPageKey(nftList.pageKey)
    setIsLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isValidAddress(address) === true) {
      setIsLoading(true)
      getOwnedTokens(address)
    }
  }

  return (
    <div className="App">
      {isLoading && (
        <div className="spinner-border" role="status">
        </div>
      )}
      {!isLoading && (
        <>
          <h5>Wallet Address:</h5>
          <div className="bar">
            <input 
              className="searchbar"
              type="text"
              title="Search"
              value={address}
              onChange={onChangeAddress}
              onKeyDown={handleKeyDown}
            />
          </div>
          <NFTGrid nfts={nfts} totalCount={totalCount} pageKey={pageKey} readMore={onReadMore} />
        </>
      )}
    </div>
  )
}

export default Home