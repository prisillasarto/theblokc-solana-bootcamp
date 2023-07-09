import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'

//import{SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction} from '@solana/web3.js'

async function main(){
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodePk = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodePk)

    const tokenMint = await token.createMint(
        connection,
        signer,
        new Web3.PublicKey('ybpKGJtZ21mTkphxsC3GTM7mFiwCnbpW9pr7EwWxsLD'),
        new Web3.PublicKey('ybpKGJtZ21mTkphxsC3GTM7mFiwCnbpW9pr7EwWxsLD'),
        9,
    );

    console.log('tokenMint', tokenMint.toBase58());
    //tokenMint UrBjRatWyU6bDH3gd7zAMDTgvDoLpmhvJe5Sc1HDmrZ

}

main()