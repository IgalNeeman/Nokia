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
module.exports = x;
