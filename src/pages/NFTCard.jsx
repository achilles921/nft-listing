import React from "react";

const NFTCard = ({ nft, onClick }) => {
  return (
    <div className="col-12 col-lg-3 col-md-4 col-sm-6 nft-card" data-bs-target="#detail-modal" onClick={() => onClick(nft)}>
      <img className="mb-2" src={nft.media[0]?.thumbnail} alt={nft.title} />
      <div className="nft-details">
        <h4>{nft?.title}</h4>
        <p>{nft?.description}</p>
      </div>
    </div>
  );
};

export default NFTCard;
