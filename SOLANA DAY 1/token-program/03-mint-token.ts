import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';

async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodePk = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodePk)
    
    const mintTokenTo = token.mintTo(
        connection,
        signer,
        // Token Mint Account
        new Web3.PublicKey('UrBjRatWyU6bDH3gd7zAMDTgvDoLpmhvJe5Sc1HDmrZ'),
        // Token Account
        new Web3.PublicKey('AjDsDF5tAHSdxb6j7yovB4kqgQNTTBiHKMH4FYR9oQFY'),
        signer,
        500000000000
    );

    console.log('Mint :', mintTokenTo)
}

main()