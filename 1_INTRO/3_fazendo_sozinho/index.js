 const fs = require('fs')
 
//  fs.open ('arquivo.txt', 'w', function(err){
//    if(err) throw (err)  
//     console.log('saved')
// } )

  // fs.appendFile('arquivo.txt', 'Step 2 OK', function(err){
  //   if (err) throw err;
  //   console.log('saved')
  // });

  // fs.readFile('arquivo.txt', 'utf8', (err, data)=>{
  //   console.log(err)
  //   console.log(data)
  // })

  // fs.writeFile('arquivo.txt', 'Step 3 OK', function (err){
  //   if (err) throw (err)
  //   console.log('saved')
  // })

  fs.readFile('arquivo.txt', 'utf8', (err, data)=>{
   console.log(err)
   console.log(data)
 })