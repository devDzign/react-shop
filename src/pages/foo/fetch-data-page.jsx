import React, { useEffect } from 'react';
import axios from "axios";
import './fetch-data.styles.scss'


const url = 'https://api.github.com/users'

const FetchDataPage = () => {

    const [users, setUser] = React.useState([]);

    const getUsers = async () => {
        // const res = await fetch(url);
        // const usersData = await res.json();

        const res = await axios.get(url)
        const usersData = await res.data

        setUser(usersData)
    }

    useEffect(() => {
        getUsers()
    }, []);


    return (
        <div className={"container m-5"}>
            <div className={"row  d-flex flex-row align-items-center justify-content-center"}>
                <h1 className={"text-center"}>fetch Data Github users</h1>

                {users.map((user) => {

                    return <div className={"col-4 mb-5"} key={user.id}>
                        <div className="card">
                            <img src={user.avatar_url} alt={user.login}/>
                            <div className="card-body">
                                <h5 className="card-title">{user.login}</h5>

                                <a href={user.html_url} className="btn btn-primary">Profile</a>
                            </div>
                        </div>
                    </div>

                })}
            </div>

        </div>
    );
};

export default FetchDataPage;
