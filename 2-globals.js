// GLOBALS - NO WINDOW!!!! Becuase there is no browser

// __dirname  - path to the current directory
// __filename - file name
// require    - function to node modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where program is being executed

console.log(__dirname);
console.log(__filename);
let count=0;
let timer= setInterval(()=>{
    if(count<2){
        console.log(`Hello World!`);
        count+=1
    }else{
        clearInterval(timer);
    }
},1000);