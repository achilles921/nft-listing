import React, { useState } from "react";
import NFTCard from "./NFTCard";
import NFTModal from "./NFTModal";

const NFTGrid = ({ nfts, totalCount, pageKey, readMore }) => {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleCardClick = (nft) => {
    setSelectedNFT(nft);
    setIsOpen(true);
  };

  return (
    <div className="row nft-grid my-4">
      {nfts.map((nft, index) => (
        <NFTCard key={index} nft={nft} onClick={handleCardClick} />
      ))}
      {pageKey && (
        <button type="button" className="btn btn-primary" onClick={readMore}>Read More</button>
      )}
      {selectedNFT && (
        <NFTModal nft={selectedNFT} isOpen={modalIsOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default NFTGrid;
