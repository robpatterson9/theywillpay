$(function () {
    main()
})

const main = async () => {
    let tableData = {
        title: 'POLYGON Network',
        heading: ['Pool Provider', 'LP', 'Reward Tokens', 'INFO'],
        rows: [
          ['THEY WILL PAY!          ', `<a href="theywillpay"            >Various</a>`, 'CRAPPLE ! !         ', 'https://pornhub.com/anal'],


        ],
    }

    let table = new AsciiTable().fromJSON(tableData)
    document.getElementById('log').innerHTML += table + '<br />'
    hideLoading()
}
