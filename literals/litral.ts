let data : "abc" | 123 ;

data = 123;

data = "abc";

// data = 23;

function combine (a : string| number ,b:string | number , type : "as-number"| "as-string" )
{
    if ( type === "as-number")

    {
        return (+a)+(+b);
 
    }

    else{
        return a.toString() + b.toString();

    }
}

console.log(combine(4,5,"as-number"));



console.log(combine("u","jay","as-string"));



