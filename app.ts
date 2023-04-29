const n1=document.getElementById('num1') as HTMLInputElement;
const n2=document.getElementById('num2')as HTMLInputElement;
const button=document.querySelector('button')!;

const numarray :number[]=[];
const strungarray :string[]=[];

type Result=number | string;
type Obj={val:number,timestap:Date};


// function addnumber(num1 :number,num2 :number){
// return num1 +num2
// }
function add(num1 :Result,num2 :Result){
if(typeof num1==='number' && typeof num2==='number')
{
    return num1 + num2;
}else if(typeof num1==='string' && typeof num2==='string'){
    return num1 + " " + num2;
}else{
    return +num1 + +num2
}
}

// console.log(addnumber(1,2));
// console.log(addnumber('1','2'));

function printarray(resultObj:Obj){
console.log(resultObj.val);
}



button?.addEventListener('click',()=>{
const num1=n1.value;
const num2=n2.value;
const result=add(+num1,+num2);
numarray.push(result as number)
const stringresult=add(num1,num2);
strungarray.push(stringresult as string)
printarray({val:result as number,timestap:new Date()})
console.log(numarray);
console.log(strungarray);
})


const promise=new Promise<string>((resolve,reject)=>{
setTimeout(()=>{
    resolve('it worked');
},1000)
})

promise.then((res)=>{
console.log(res);
})