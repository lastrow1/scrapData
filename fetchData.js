const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://siet.in/Placement/Placements';

let objectData = [];
const selctor = '#COl_AY09 > div > div > div';
console.log('all require files imported succesfully in fetch dat');

async function scrapdata() {

  try {
    const response = await axios.get(url);
    const data = response.data;
    let res = await fetch(url);
    let data = await res.text();
    console.log('fetch working...');

    return getHtml(data);
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

function getHtml(html) {
  let $ = cheerio.load(html);

<<<<<<< HEAD
  $(selctor).each((index, element) => {
    let card = $(element);
=======
function getHtml (html) {
   let $ = cheerio.load(html);
   console.log('cheerio running...');
>>>>>>> 3b6d9379fb8c0d38d9e7d2e6a8baadb5db8af7d2

    const title = card.find('h5').text();
    const company = card.find('strong').text();
    const profileImg = card.find('img').attr('src');
    const package = card.find('p').text();

    objectData.push({
      studentName: title,
      profilePic: `https://siet.in${profileImg}`,
      companyName: company,
      packageDetails: package,
    });
  });

  return objectData;
}

module.exports = scrapdata;
