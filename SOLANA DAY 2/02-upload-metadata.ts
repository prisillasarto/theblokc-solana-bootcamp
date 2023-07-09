import { createMetaplexInstance } from "./metaplex";

const metaplex = createMetaplexInstance()

const metadata = {
    name: "Matchalicious",
    description: "My first ever Solana NFT featuring my favorite drink!",
    image: "https://arweave.net/_EKIGUJYb3t2DvIS7hsw_uEu6atxH1EN5JtuyB-i-Vw",
    attributes: [
        {
            trait_type: 'Event',
            value: 'Solana Developers Bootcamp in Mapua Makati'
        }
    ]

}

async function main() {
    const {uri} = await metaplex.nfts().uploadMetadata(metadata)
    console.log('metadata uri', uri);
    
}

//metadata uri https://arweave.net/W6LkHi-KoUtS3HuvEkUxzxhwlbB8-AGwb_Kb71ocz2g

//{"name":"Matchalicious","description":"My first ever Solana NFT featuring my favorite drink!","image":"https://arweave.net/_EKIGUJYb3t2DvIS7hsw_uEu6atxH1EN5JtuyB-i-Vw","attributes":[{"trait_type":"Event","value":"Solana Developers Bootcamp in Mapua Makati"}]}

main()