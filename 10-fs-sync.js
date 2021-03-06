// Synchronous FS
const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second);

writeFileSync('./content/third.txt',
`Here is the result : ${first}, ${second}`,
{flag:'a'} // to append data to the existing data, otherwise data will be overwritten.
)
writeFileSync('./content/fourth.txt',`Hey this is ${4}th file.`)