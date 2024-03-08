const person :{ name:string;age:number;email:string}  ={
    name :'jay',
    age : 18,
    email : 'person@.com'

}

console.warn(person.name,person.age);



type objType = {name:string;age:number;email:string}

const detail1 : objType={
    name:'monu',
    age: 19 ,
    email:'jay@mail.com'
}

console.log(detail1.email);

const detail2 : objType = {
    name : 'chukku',
    age : 18,
    email : 'chukku@.com'
}

console.log(detail2.name);




