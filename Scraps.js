var cloudscraper = require('cloudscraper');
const $ = require('cheerio');
cloudscraper.get('https://www.japscan.co/mangas/')
.then(function(html){
    //gg
    var gabriel = $('.p-1 > a', html).length;
    var mohamed = [];
    for (let i = 0; i < gabriel; i++) {
        mohamed.push($('.p-1 > a', html)[i].attribs.href);
    }
    console.log($('.p-1 > a', html).length);
    console.log(mohamed);
})
.catch(function (err) {
    //cheh
});