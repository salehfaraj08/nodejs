import React from "react";
import axios from "axios";

const UsersList = () => {
    const [users, setUsers] = React.useState([]);
    const [user, setUser] = React.useState({
        name: '',
        age: '',
        email: ''
    })
    React.useEffect(() => {
        getUsersData()
    }, [])
    //
    const getUsersData = () => {
        axios.get('http://localhost:3000/').then((res) => {
            setUsers(res.data.persons);
        })
    }

    const addUser = () => {
        if(user.name && user.age && user.email) {
            axios.post('http://localhost:3000/', user)
                .then((res) => {
                    if (res.status === 209) {
                        console.log(res.data.user)
                        let list = [...users, res.data.user];
                        setUsers(list);
                    }
                }).catch((err) => {
                console.log("error")
            })
        }
        else{
            //show msg
        }
    }

    const textHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log("state :", user)
    }

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {
                    users.map((u) => {
                        return <li key={u.id}>{u.name} , {u.age}</li>
                    })
                }
            </ul>

            <div>
                add user : <br/>
                name : <input value={user.name} type="text" name={'name'} onChange={textHandler}/>
                age : <input value={user.age} type="text" name={'age'} onChange={textHandler}/>
                email : <input value={user.email} type="text" name={'email'} onChange={textHandler}/>
                <input type={'button'} value={'add'} onClick={addUser}/>
            </div>
        </div>
    )
}

export default UsersList;