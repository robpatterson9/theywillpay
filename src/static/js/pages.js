$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Front Page",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["?????               ",`<a href="questionmark/"             >Various</a>`,"?????     ","https://questionark.farm"],

    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML = '<h1><a href="/polygon/questionmark">Enter Shell</a></h1>  <br />';

  hideLoading();
}
