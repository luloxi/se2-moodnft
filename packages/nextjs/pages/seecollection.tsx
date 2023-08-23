import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import NFTContainer from "~~/components/MoodNft/NFTContainer";

const SeeCollection: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <MetaHeader />
      <NFTContainer connectedAddress={connectedAddress} />
    </>
  );
};

export default SeeCollection;
