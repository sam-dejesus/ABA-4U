const inquirer = require('inquirer');
const cfonts = require('cfonts');
const fs = require('fs');
const template = require("./ultis/template")
const {prompt} = require("./ultis/questions")

const myFont = cfonts.render('Hello Kaemy!', {
  font: 'slick', 
  align: 'left', 
  colors: ['blue', 'cyan'], 
});

console.log(myFont.string); 


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log(`${filename} file generated successfully!`);
    });
}

function init() {
    inquirer.prompt(prompt)
        .then((data) => {
            const notes = template(data);
            writeToFile('rbt.txt', notes);
        })
        .catch((error) => {
            console.log(error);
        });
}

init()
