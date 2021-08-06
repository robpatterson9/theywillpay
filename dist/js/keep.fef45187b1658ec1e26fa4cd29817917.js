/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

$(function() {
consoleInit(main)
});

const KEEP_CONTRACT_ABI = [{"inputs":[{"internalType":"contract KeepToken","name":"keepToken","type":"address"},{"internalType":"contract IERC20","name":"tbtcSaddleLPToken","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"keepToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_gated","type":"bool"}],"name":"setGated","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"wrappedToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]
const KEEP_STAKING_ABI = [{"inputs":[{"internalType":"contract KeepToken","name":"_keepToken","type":"address"},{"internalType":"uint256","name":"_maxUnlockSchedules","type":"uint256"},{"internalType":"uint256","name":"_startBonus","type":"uint256"},{"internalType":"uint256","name":"_bonusPeriodSec","type":"uint256"},{"internalType":"uint256","name":"_initialSharesPerToken","type":"uint256"},{"internalType":"uint256","name":"_durationSec","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldDurationSec","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newDurationSec","type":"uint256"}],"name":"DurationSecUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldRewardDistribution","type":"address"},{"indexed":false,"internalType":"address","name":"newRewardDistribution","type":"address"}],"name":"RewardDistributionRoleTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"durationSec","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"TokensLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"TokensUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Unstaked","type":"event"},{"constant":true,"inputs":[],"name":"BONUS_DECIMALS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bonusPeriodSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"durationSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDistributionToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"durationSec","type":"uint256"}],"name":"lockTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenToRescue","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueFundsFromStakingPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_newDurationSec","type":"uint256"}],"name":"setDurationSec","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newRewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"stakeFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supportsHistory","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalLocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalLockedShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"totalStakedFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStakingShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalUnlocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"unlockScheduleCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"unlockSchedules","outputs":[{"internalType":"uint256","name":"initialLockedShares","type":"uint256"},{"internalType":"uint256","name":"unlockedShares","type":"uint256"},{"internalType":"uint256","name":"lastUnlockTimestampSec","type":"uint256"},{"internalType":"uint256","name":"endAtSec","type":"uint256"},{"internalType":"uint256","name":"durationSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unlockTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"unstake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstakeQuery","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"updateAccounting","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

const Pools = [
  "0x47A5f2ffdf66D13ED7e317581F458d09b49d6F44",
  "0x81C51dD453DBFf8f16036B3f0fB54d7bd03F036F",
  "0x78aa83BD6c9DE5De0A2231366900AB060A482edd"
].map(a => {
  return {
    address: a,
    abi: KEEP_CONTRACT_ABI,
    stakeTokenFunction: "wrappedToken",
    rewardTokenFunction: "keepToken"
  }; }
)

async function main() {

  const App = await init_ethers();

  const KEEP_TOKEN_ADDR = '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec';
  const KEEP_STAKING_ADDR = '0xdF00daC2Be1250cF62cBFc617EE7bC45C0016c87';
  const STAKING_POOL = new ethers.Contract(KEEP_STAKING_ADDR, KEEP_STAKING_ABI, App.provider);

  _print(`Initialized ${App.YOUR_ADDRESS}`);
  _print("Reading smart contracts...\n");

  var tokens = {};
  var prices = {};

  let p = await loadMultipleSynthetixPools(App, tokens, prices, Pools)
  _print_bold(`Total staked: $${formatMoney(p.staked_tvl)}`);
  if (p.totalUserStaked > 0) {
    _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalAPR * 100).toFixed(2)}%\n`);
  }

  await loadKeepVault(App, tokens, prices, STAKING_POOL, KEEP_TOKEN_ADDR, KEEP_STAKING_ADDR, KEEP_STAKING_ABI);

  hideLoading();
}

async function loadKeepVault(App, tokens, prices, STAKING_POOL, KEEP_TOKEN_ADDR, KEEP_STAKING_ADDR, KEEP_STAKING_ABI){
  const keepPrice = getParameterCaseInsensitive(prices, KEEP_TOKEN_ADDR);
  const totalStaked = (await STAKING_POOL.totalStaked()) / 1e18;
  const staked_tvl = totalStaked * keepPrice.usd;
  const yourStakedLP =
    (await STAKING_POOL.totalStakedFor(App.YOUR_ADDRESS)) / 1e18;

  const totalUnlocked = (await STAKING_POOL.totalUnlocked()) / 1e18;
  console.log('totalUnlocked:', totalUnlocked);
  const unlockSchedules_data = await STAKING_POOL.unlockSchedules(0);
  const unlocked_share = unlockSchedules_data[1];
  const rewardsPerWeek = (await unlocked_share) / 30 * 7 / 1e18;

  const keepToken = await getToken(App, KEEP_TOKEN_ADDR, KEEP_STAKING_ADDR);

  _print(`\n${keepToken.symbol} Price: $${keepPrice.usd} TVL: ${toDollar(staked_tvl)}`);
  _print(`Staked: ${toFixed(totalStaked, 2)}`)
  const apr = printAPR(keepToken.symbol, keepPrice.usd, rewardsPerWeek, keepToken.symbol,
    staked_tvl, yourStakedLP, keepPrice.usd, 2);

  printKeepContractLinks(App, yourStakedLP, KEEP_STAKING_ABI, KEEP_STAKING_ADDR, KEEP_TOKEN_ADDR,
    keepToken.symbol, keepToken.unstaked, keepToken.staked, 2, "eth");
}

function printKeepContractLinks(App, amount, chefAbi, chefAddr, poolAddress,
  stakeTokenTicker, unstaked, yourStakedLP, fixedDecimals) {
fixedDecimals = fixedDecimals ?? 2;
const unstake = async function() {
  return chefKeepContract_unstake(amount, chefAbi, chefAddr, App)
}
_print_link(`Unstake ${yourStakedLP.toFixed(fixedDecimals)} ${stakeTokenTicker}`, unstake)
_print("");
}

const chefKeepContract_unstake = async function(amount, chefAbi, chefAddress, App) {
  const signer = App.provider.getSigner()
  const CHEF_CONTRACT = new ethers.Contract(chefAddress, chefAbi, signer)

    showLoading()
    CHEF_CONTRACT.unstake(amount, {gasLimit: 500000})
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
      })
}