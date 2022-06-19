exports.sums = (...params)=>{
    let result = 0;
    for(let num in params){
        result += parseFloat(num)
    }
    return result
}
// console.log(sums(1,2,3,4,5,6,7,8));