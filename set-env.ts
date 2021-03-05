//import { writeFile } from 'fs';
const fs = require('fs');
const writeFile = fs.writeFile;
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
const targetPathProd = './src/environments/environment.prod.ts';
// Load node modules
const colors = require('colors');
require('dotenv').config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
    production: false,
    gmapsKey: '${process.env.gmapsKey}',
};
`;
// `environment.prod.ts` file structure
const envConfigFileProd = `export const environment = {
    production: true,
    gmapsKey: '${process.env.gmapsKey}',
};
`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});
writeFile(targetPathProd, envConfigFileProd, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular environment.prod.ts file generated correctly at ${targetPathProd} \n`));
    }
 });