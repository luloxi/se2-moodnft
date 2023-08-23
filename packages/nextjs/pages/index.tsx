import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { Address } from "~~/components/scaffold-eth";
// import NFTContainer from "~~/components/MoodNft/NFTContainer";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  // Get my total balance

  const { data: myTotalBalance } = useScaffoldContractRead({
    contractName: "MoodNft",
    functionName: "balanceOf",
    args: [connectedAddress],
  });

  const { data: totalSupply } = useScaffoldContractRead({
    contractName: "MoodNft",
    functionName: "totalSupply",
  });

  // Mint NFT

  const { writeAsync: mintNft } = useScaffoldContractWrite({
    contractName: "MoodNft",
    functionName: "mintNft",
  });

  return (
    <>
      <MetaHeader />

      <div className="hero mt-10 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex items-center justify-center ">
              <Image className="px-2" src="./happy.svg" alt="Happy SVG NFT Image" width={120} height={120} />
              <h1 className="text-5xl font-bold">Let&apos;s get moody!</h1>
              <Image className="px-2" src="./sad.svg" alt="Happy SVG NFT Image" width={120} height={120} />
            </div>

            <div className="py-3">
              Inspired by{" "}
              <Link
                className="underline-offset-4 underline"
                href={"https://www.youtube.com/watch?v=sas02qSFZ74&t=27656s"}
              >
                Lesson 11 of Patrick Collins Foundry course
              </Link>
              , this website was made using{" "}
              <Link className=" underline-offset-4 underline" href={"https://scaffoldeth.io/"}>
                Scaffold-ETH 2
              </Link>{" "}
              to display information about the NFT and allow to flip it's mood.
            </div>

            <div className="flex items-center justify-center mb-4">
              MoodNft Contract address: <Address address={"0x6CcCF5C1A350F5844C17706b8aD8AF3F28E1E6Ee"} />
            </div>

            <div className="mb-4">
              There&apos;s a total supply of {totalSupply?.toString()} MoodNFTs
              <br />
              You own <strong>{myTotalBalance?.toString()}</strong> MoodNFTs!
            </div>

            <div className="flex gap-3 justify-center">
              <button className="btn btn-accent" onClick={() => mintNft()}>
                Mint a MoodNFT!
              </button>
              <Link href={"./seecollection"}>
                <button className="btn btn-primary">See collection!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
