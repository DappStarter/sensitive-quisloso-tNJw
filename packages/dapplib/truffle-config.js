require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purchase install entire swallow task'; 
let testAccounts = [
"0x55936320abdef486553eb74db45f0f7c14e0ffe80a3d2993da70a9ecc7689644",
"0xa74769412c9a16d365b16a5fa20f92619177810971228d237df503aaf30944b7",
"0x6f28e6afc142433e0edb2c6cb2cd5b68c824318119e84be1a4652fd822d657ca",
"0x7228f97a6f408da94826acea7e3b3222164a6fca120d896eac582ebc88a4ed55",
"0x504f7a5c5bbe1489828137a146b598cbb7b6e6b0d79b39dee6a9b004185836cd",
"0x44d89b0afa4095768dab4b47013641187903506a36dd6e020aa1e0c70f77718b",
"0xdef3100d864c7632964c384540a2e3b1cf35127191ecf06eafcba1069f5de3a8",
"0x9b508a2575abd6bfc1f3da0d5bc1938f329a56715c9f5607c9e9f350c17d7248",
"0xd1e13749db7f953cc5e748f999a8c8b8d9edc6df0f13fed06b625645722798ea",
"0xfbeda2388accc5e08690d1442730d4bf6f2216f38676b4f9adf4c9f357c7c677"
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
            version: '^0.8.0'
        }
    }
};

