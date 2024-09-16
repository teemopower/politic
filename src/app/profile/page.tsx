'use client'

import { useEffect, useState } from 'react';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    state: string;
}

export default function Profile() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await fetch('https://vote-8v3w.onrender.com/users');

                if(!response.ok){
                    throw new Error("Failed to get user data");
                }

                const json = await response.json()
                setUsers(json)
            } catch(error) {
                console.log(error)
            }
        }
        
        getUsers();

    }, [])

    return (
        <>
            <div>
                {
                    users.map(user => (
                        <>
                            <p>First Name: {user.firstName}</p>
                            <p>Last Name: {user.lastName}</p>
                            <p>Email: {user.email}</p>
                            <p>State {user.state}</p>
                        </>
                    ))
                
                }
                
            </div>
        </>
    )
}