class Users{
    name='';
    email ='';

    addUser(user){
        return `${user} is added`
    }
}

let user1 = new Users;
let result = user1.addUser("Jay");
console.log(result);
