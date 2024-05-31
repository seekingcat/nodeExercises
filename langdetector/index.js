const franc = require('franc');
const langs = require('langs');
const colors = require('colors')
const userLang = process.argv[2];
const countryCode = franc(userLang);

if (franc(userLang) === 'und') {
    console.log('Language not found'.red);
} else {
    const countryName = langs.where("3", countryCode);
    console.log(`Our best guess is ${countryName.name}`.green)
}

