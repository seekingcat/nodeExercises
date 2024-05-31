const fs = require('fs');
const foldername = process.argv[2] || 'Project'
// console.log(fs);

try {
fs.mkdirSync(foldername);
fs.writeFileSync(`${foldername}/index.html`, '');
fs.writeFileSync(`${foldername}/styles.css`, '');
fs.writeFileSync(`${foldername}/app.js`, '');
} catch (e) {
    console.log('SOMETHING WENT WRONG', e);
}