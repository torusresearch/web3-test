const web3 = new Web3(window.ethereum)
const UNLOCK_FIRST = 'please unlock first'
const okay = function() {
  alert('OK. Result: ' + JSON.stringify(arguments))
}
const fail = function() {
  alert('Fail. Error: ' + JSON.stringify(arguments))
}
document.getElementById('ethereum-enable')
.addEventListener('click', () => {
  window.ethereum.enable()
})
try {
  document.getElementById('web3-personalSign')
  .addEventListener('click', () => {
    web3.eth.getAccounts((err, accounts) => {
      if (err) throw err
      if (accounts.length === 0) throw new Error(UNLOCK_FIRST)
      web3.personal.sign('0x123456789', accounts[0], (err, res) => {
        if (err) throw err
        web3.personal.ecRecover('0x123456789', res, (err, res) => {
          if (err) throw err
          if (res !== accounts[0]) {
            throw new Error('could not retrieve same address from signature')
          } else {
            okay(`Retrieved address from signature - ${res}`)
          }
        })
      })
    })
  })
} catch (e) {
  fail(e)
}

