var index=2;
var sum = 0;
while(process.argv[index]){
    sum+= Number(process.argv[index]);
    ++index;
}
console.log(sum)