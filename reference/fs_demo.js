const fs = require('fs');
const path = require('path');
// Create folder
//fs.mkdir(path.join(__dirname,'/test'),{},function(err)=>{
//if(err) throw err;
//console,log('Folder created...');
//});

// create and write two files

/* fs.writeFile(
	path.join(__dirname,'/test','hello.txt'),
	'Hello World!',
	err=>{
if(err) throw err;
console.log('File Written to ');

fs.appendFile(
	path.join(__dirnamse,'/test','hello.txt'),
	'I love Node.js!',
	err=>{
if(err) throw err;s
console.log('File Written to ');

});
}); */

/* fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
if(err) throw err;
console.log(data);
});


 */

fs.rename(
	path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','helloworld.txt'),
	err => {
	if (err) throw err;
	console.log('File renamed..');
	});