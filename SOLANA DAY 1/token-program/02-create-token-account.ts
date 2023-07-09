import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'

import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';


async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodePK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
    const signer = Web3.Keypair.fromSecretKey(base58DecodePK)

    const tokenAccount = await token.createAccount(
        connection,
        signer,
        new Web3.PublicKey('UrBjRatWyU6bDH3gd7zAMDTgvDoLpmhvJe5Sc1HDmrZ'),
        new Web3.PublicKey('ybpKGJtZ21mTkphxsC3GTM7mFiwCnbpW9pr7EwWxsLD'),
    )

    console.log('token Account', tokenAccount.toBase58())

    //token Account AjDsDF5tAHSdxb6j7yovB4kqgQNTTBiHKMH4FYR9oQFY

}

main()