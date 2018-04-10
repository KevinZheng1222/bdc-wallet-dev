var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    __HOST__: '"http://localhost:8082/#"',
    __SERVICE__: '"http://47.96.164.78:9218"',
    witnesses: JSON.stringify(['ws://47.96.164.78:28090']),
    faucet_addr: '"http://47.96.164.78:8888"'
    // __SERVICE__:'"https://walletgateway.bdc.io"',
    // witnesses:JSON.stringify(["wss://node1.bdc.io","wss://node5.bdc.io","wss://node8.bdc.io","wss://node11.bdc.io","wss://node15.bdc.io","wss://node16.bdc.io","wss://node17.bdc.io"]),
    // faucet_addr:'"https://opengateway.bdc.io"'
});
