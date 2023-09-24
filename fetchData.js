const cheerio = require('cheerio');
const url = 'https://siet.in/Placement/Placements';

let objectData = [];
const selctor = '#COl_AY09 > div > div > div';

async function scrapdata() {
    let res = await fetch(url);
    let data = await res.text();
    console.log('fetch working...');
    return getHtml(data);
}


function getHtml (html) {
   let $ = cheerio.load(html);
   console.log('cheerio running...');

   $(selctor,html).each((index,element)=>{
      let card = $(element);

       const title = card.find('h5').text();   
       const company = card.find('strong').text(); 
       const profileImg = card.find('img').attr('src');
       const package = card.find('p').text();


       objectData.push({
        studentName : title,
        profilePic:`https://siet.in${profileImg}`,
        companyName: company,
        packageDetails:package
       }
      )

   })
  
   return objectData;
}


module.exports = scrapdata;