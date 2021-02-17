require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain essay hockey person flip slight'; 
let testAccounts = [
"0x63257ee18917a984bb4d7751ada476bfa75c49f507f619004f59ac7098b405ff",
"0x7e123145b38f4d92609bdd4dea6083d896c472004d01be91f8014abab5f374fb",
"0xa862720a69516efd47a11e87bf9b135ef9bf37068e4127a02d2e5cc9b883230e",
"0x01b2d5f0b433020d42f5638d46c25d227419ff019517293363538b6a2f8604d6",
"0x6f057f1dada7e9fa36d1de7ab25e8369e5b2b5f02d7db71fadbab0c3fdd9e8f2",
"0xe63a6d1c4f1c4b3d6bc86ad2435c68f5cf2d495761fb4c90b94d5962699f0cd3",
"0x557857f72436b5cc828f2f6af61a0b24847283200780a700388bf49cebbb8db0",
"0x94b1c3b802542dbf360efbd6228c3a4371f4eb37792e6c54b81534fceb30a2ff",
"0x4f22be0c3c8c99c8263bf7c26faea9b0a4c51f50f4efe6e4f91fe0c1fc826b5b",
"0x05765125b481716f984c1f13ebc3fb0fc6f91664206f3862202710b245a248f3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
