import { createMetaplexInstance } from "./metaplex";
import {toMetaplexFile} from '@metaplex-foundation/js'
import fs from 'fs'

const buffer = fs.readFileSync(__dirname + "/assets/pic.jpg");
const file = toMetaplexFile(buffer, "pic.jpg");

const metaplex = createMetaplexInstance()

async function main(){
    const imageUrl = await metaplex.storage().upload(file)
    console.log('image Url', imageUrl);
}

//image Url https://arweave.net/_EKIGUJYb3t2DvIS7hsw_uEu6atxH1EN5JtuyB-i-Vw

main()