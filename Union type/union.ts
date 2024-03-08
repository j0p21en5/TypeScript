function combine(a:number | string ,b : number | string)
{
    if(typeof a === 'number' && typeof b === 'number')
    {
        return a+b;
    }

    else
    {
        return a.toString() + b.toString();
    }

}

console.log(combine(2,3));

console.log(combine('m','j'));


function uni(c:any,d:any)
{
    if (typeof c === 'number' && typeof d === 'number' )
    {
        return c+d;

    }
    else 
    {
        return c.toString() + d.toString();

    }

}

console.log(uni(1,2));
