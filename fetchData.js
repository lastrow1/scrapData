const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://siet.in/Placement/Placements';

const selctor = '#COl_AY09 > div > div > div';

async function scrapdata() {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return getHtml(data);
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

function getHtml(html) { 
let objectData = [];

  let userId =0;
  let $ = cheerio.load(html);
  
  $(selctor).each((index, element) => {
    let card = $(element);

    const title = card.find('h5').text();
    const company = card.find('strong').text();
    const profileImg = card.find('img').attr('src');
    const package = card.find('p').text();

   let colonIndx = package.indexOf(':')+1;
   let pckgIndx = package.indexOf('Package')

    objectData.push({
      id:userId++,
      studentName: title,
      profilePic: `https://siet.in${profileImg}`,
      companyName: company,
      jobProfile: package.slice(1,pckgIndx),
      salaryPackage: package.slice(colonIndx,package.length-1).trim(),
    });
  });

  return objectData;
}

module.exports = scrapdata;
