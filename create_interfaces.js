const scanf = require('scanf');
const x = function create_interfaces(n) 
{
    let x=[];
    let sum =0;
    for(let i=0;i<n;i++)
    {
        x[i]= (Math.floor(Math.random() * 10)); //x[0-100]
         sum += x[i]   // F(x) = EXn 
    }
    return sum;
};

let n=0;
console.log("enter size number?");
n = scanf('%d');
console.log("x= ",x(n));
//send_to_sys(X);