import { createMetaplexInstance } from "./metaplex"

async function main(){
    const metaplex = createMetaplexInstance()
    const metadataUri = 'https://arweave.net/W6LkHi-KoUtS3HuvEkUxzxhwlbB8-AGwb_Kb71ocz2g'
    const {nft} = await metaplex.nfts().create({
        uri: metadataUri,
        name: 'Matchalicious',
        sellerFeeBasisPoints: 0,
    })
    console.log('nft', nft)
}

//nft {
//    model: 'nft',
//     updateAuthorityAddress: PublicKey [PublicKey(ybpKGJtZ21mTkphxsC3GTM7mFiwCnbpW9pr7EwWxsLD)] {
//       _bn: <BN: e7fe441d39b3f1f23df4b35557d5d882e373dda46d95c6ef68afe3a46befdca>
//     },
//     json: {
//       name: 'Matchalicious',
//       description: 'My first ever Solana NFT featuring my favorite drink!',
//       image: 'https://arweave.net/_EKIGUJYb3t2DvIS7hsw_uEu6atxH1EN5JtuyB-i-Vw',
//       attributes: [ [Object] ]
//     },
//     jsonLoaded: true,
//     name: 'Matchalicious',
//     symbol: '',
//     uri: 'https://arweave.net/W6LkHi-KoUtS3HuvEkUxzxhwlbB8-AGwb_Kb71ocz2g',
//     isMutable: true,
//     primarySaleHappened: false,
//     sellerFeeBasisPoints: 0,
//     editionNonce: 254,
//     creators: [
//       {
//         address: [PublicKey [PublicKey(ybpKGJtZ21mTkphxsC3GTM7mFiwCnbpW9pr7EwWxsLD)]],
//         verified: true,
//         share: 100
//       }
//     ],
//     tokenStandard: 0,
//     collection: null,
//     collectionDetails: null,
//     uses: null,
//     programmableConfig: null,
//     address: PublicKey [PublicKey(Eor8wryxQsDSHAnrUi7NHErWACW698ti3qnNdH1SWM96)] {
//       _bn: <BN: cd2834e66c09d575c3444e016a865fc63f0aa43b1aafd3672aeed331cb3b8abd>
//     },
//     metadataAddress: Pda [PublicKey(ETKB3scALs8WLdPC23tFCpcNo1mCPnWpK4gP9mGLuFg6)] {
//       _bn: <BN: c7e594647480a8ffb63981c9a0aeb3156fc38f8b732dfb24aa4a48d49302ec83>,
//       bump: 255
//     },
//     mint: {
//       model: 'mint',
//       address: PublicKey [PublicKey(Eor8wryxQsDSHAnrUi7NHErWACW698ti3qnNdH1SWM96)] {
//         _bn: <BN: cd2834e66c09d575c3444e016a865fc63f0aa43b1aafd3672aeed331cb3b8abd>
//       },
//       mintAuthorityAddress: PublicKey [PublicKey(CnzUDX8yHbCXRSmVyss1PsK3AqEXJ1CWgQiHvrZGaLhp)] {
//         _bn: <BN: af38ac5bac592815215f80a5eb654a178cb0795430d2a6bf4867798e1b0656c3>
//       },
//       freezeAuthorityAddress: PublicKey [PublicKey(CnzUDX8yHbCXRSmVyss1PsK3AqEXJ1CWgQiHvrZGaLhp)] {
//         _bn: <BN: af38ac5bac592815215f80a5eb654a178cb0795430d2a6bf4867798e1b0656c3>
//       },
//       decimals: 0,
//       supply: { basisPoints: <BN: 1>, currency: [Object] },
//       isWrappedSol: false,
//       currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
//     },
//     token: {
//       model: 'token',
//       address: Pda [PublicKey(5WKhgy9XEMhiV7TLXMYJ7cio1icc1SFESDf2FGf8KaqE)] {
//         _bn: <BN: 42f1bcb02a6260503c7bcb39ae8a7981e177a523cffadbb2142bb35cc52aba51>,
//         bump: 255
//       },
//       isAssociatedToken: true,
//       mintAddress: PublicKey [PublicKey(Eor8wryxQsDSHAnrUi7NHErWACW698ti3qnNdH1SWM96)] {
//         _bn: <BN: cd2834e66c09d575c3444e016a865fc63f0aa43b1aafd3672aeed331cb3b8abd>
//       },
//       ownerAddress: PublicKey [PublicKey(ybpKGJtZ21mTkphxsC3GTM7mFiwCnbpW9pr7EwWxsLD)] {
//         _bn: <BN: e7fe441d39b3f1f23df4b35557d5d882e373dda46d95c6ef68afe3a46befdca>
//       },
//       amount: { basisPoints: <BN: 1>, currency: [Object] },
//       closeAuthorityAddress: null,
//       delegateAddress: null,
//       delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
//       state: 1
//     },
//     edition: {
//       model: 'nftEdition',
//       isOriginal: true,
//       address: Pda [PublicKey(CnzUDX8yHbCXRSmVyss1PsK3AqEXJ1CWgQiHvrZGaLhp)] {
//         _bn: <BN: af38ac5bac592815215f80a5eb654a178cb0795430d2a6bf4867798e1b0656c3>,
//         bump: 254
//       },
//       supply: <BN: 0>,
//       maxSupply: <BN: 0>
//     }
//   }

main()