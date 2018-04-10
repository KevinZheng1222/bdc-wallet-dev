module.exports = (function () {
  console.log('isProd',!!process.env.prod);
  if(!!process.env.prod){
    return {
      NODE_ENV: '"production"',
      __HOST__:'"https://mwallet.bdc.io/#"',
      __SERVICE__:'"https://walletgateway.bdc.io"',
      witnesses:JSON.stringify(["wss://node1.bdc.io","wss://node5.bdc.io","wss://node8.bdc.io","wss://node11.bdc.io","wss://node15.bdc.io","wss://node16.bdc.io","wss://node17.bdc.io"]),
      faucet_addr:'"https://opengateway.bdc.io"'
    }
  }
  else{
    return {
      NODE_ENV: '"production"',
      __HOST__:'"http://47.96.164.78/#"',
      __SERVICE__:'"http://47.96.164.78:9218"',
      witnesses:JSON.stringify(['ws://47.96.164.78:28090']),
      faucet_addr:'"http://47.96.164.78:8888"'
    }
  }
})()
