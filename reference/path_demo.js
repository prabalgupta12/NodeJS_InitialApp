const path = require('path');
//BAse name
console.log(path.basename(__filename));

console.log(path.dirname(__filename));


 //file extension 
 console.log(path.extname(__filename));

 // Create path object
  console.log(path.parse(__filename).base);

  // concatenate paths


  console.log(path.parse(__filename).base);
  

  // Concatenate paths 


  console.log(path.join(__dirname,'test','hello.html'));

