/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"FANTOM Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Sakeswap",   `<a href='sakeswap'>Various</a>`,  "SAKE",    "https://okapp.sakeswap.fi"],
      ["WePiggy",    `<a href='wepiggy' >Various</a>`,  "WPC ",    "https://okexchain.wepiggy.com/markets"],
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
