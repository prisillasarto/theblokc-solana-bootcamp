const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('3ZSqQuwbWdm6yjuaKXRXr5rrN14TeZX5TLYdsnM8vQbDT9mk3arLBcBFWDnjq4wRjSDW9yXiBUzUm48b5YRKVBvZ');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);