const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const tomochain_mainnet = require('./tokens/tomochain_mainnet.json');
// const ropsten = require('./tokens/ropsten.json');
// const rinkeby = require('./tokens/rinkeby.json');
// const goerli = require('./tokens/goerli.json');
// const kovan = require('./tokens/kovan.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'auriswap Default List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://raw.githubusercontent.com/trustwallet/assets/cd2ea83bce7ac2b1f7a499db1a1c7f0ed8843924/blockchains/ethereum/assets/0xC942c311F4DeEB3001Cf910E08DbFEA046981d2b/logo.png',
    'keywords': [
      'auriswap',
      'default'
    ],
    tokens: [
      ...mainnet,
      ...tomochain_mainnet
      // ...ropsten,
      // ...goerli,
      // ...kovan,
      // ...rinkeby
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};