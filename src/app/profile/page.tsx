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
                const response = await fetch('');

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

    })

    console.log(users)
    return (
        <>
            <div>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>State</p>
            </div>
        </>
    )
}