
 function getFlag(String){
    const index = process.argv.indexOf(String) + 1
   return process.argv[index]

   // console.log(process.argv[index])
 }

 module.exports = getFlag;

