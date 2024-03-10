class Users {
    private name = "";
    setName(name)
    {
        this.name =name;

    }
    displayName(){
        console.log(this.name);
        
    }
}

const u1 = new Users;
u1.setName("Jay");

u1.displayName();
