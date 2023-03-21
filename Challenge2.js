


let arr=[9,6,4,2,3,5,7,0,1]
let arr1=[0,1]
let arr2=[3,0,1]

let unique;
function ruby(...nums){
    const range2arr=[];
    const missing=[];
         unique = [];
    nums.forEach((element) => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    

    for( let i=0;i<=unique.length;i++){
        range2arr.push(i);
    }



    
   
    range2arr.forEach((element) => {
        if (!unique.includes(element)) {
           missing.push(element);
        }
    });
    
return  missing;
}

console.log( 'nums ='+ arr)
console.log( ruby(...arr) + '  is it is the number missing from the range'+'[0,'+unique.length+']')

console.log( 'nums ='+ arr1)
console.log( ruby(...arr1) + '  is it is the number missing from the range'+'[0,'+unique.length+']')
console.log( 'nums ='+ arr2)
console.log( ruby(...arr2) + '  is it is the number missing from the range'+'[0,'+unique.length+']')