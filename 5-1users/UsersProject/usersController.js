const fs = require('fs');

const showAllUser = () => {
    return new Promise(((resolve, reject) => {
        fs.readFile('./Users.json', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data.toString()))
            }
        });
    }))
}

const addNewUser =async (name,email)=>{
    const file = await showAllUser()
    const user = file.users.find(user => user.email === email);
    if(user){
        return false;
    }
    else{
        let AllUsers = file.users;
        AllUsers.push({
            id  : AllUsers[AllUsers.length-1].id+1,
            name: name,
            email: email
        });

        fs.writeFile('./Users.json', JSON.stringify(file), (err) => {
            if (err) {
                console.log(err);
            }
        });
        return true
    }
}


const deleteUserById =async (id)=>{
    const file = await showAllUser()
    const user = file.users.filter(user => user.id !== id);
    file.users = user
    fs.writeFile('./Users.json', JSON.stringify(file), (err) => {
        if (err) {
            console.log(err);
        }
    });

}

module.exports = {
    showAllUser,
    addNewUser,
    deleteUserById

}