const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(callback) {
	let tokenFarm = await TokenFarm.deployed()
	await tokenFarm.issueTokens()
	console.log("Tokens issued!") //1:45:20 for how to start a server 







	callback()
}