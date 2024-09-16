'use client';

import { useState, useEffect } from 'react';
import styles from "./Form.module.css";
import statesData from '../data/states.json';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    state: string;
}

export function Form() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [prismaData, setPrismaData] = useState<User[]>([]);

    // const fetchUsers = async () => {
    //     const res = await fetch('/api/users');
    //     const data = await res.json();
    //     console.log(data);
    // };
      
    // useEffect(() => {
    //     fetchUsers();
    // }, []);
      

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            state
        };

        try {
            const res = await fetch('https://vote-8v3w.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!res.ok) {
                throw new Error('Failed to submit user data');
            }

            const data = await res.json();
            setResponseMessage('Thanks for signing the Petition!'); // Display success message
            console.log('Submitted user data:', data);

            // Clear form inputs after successful submission
            setFirstName('');
            setLastName('');
            setEmail('');
            setState('');

        } catch (error) {
            console.error('Error submitting data:', error);
            setResponseMessage('Error submitting data');
        }


        // PRISMA
        // try {
        //     const res = await fetch('/api/users', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(newUser),
        //     });
    
        //     if (!res.ok) {
        //         throw new Error('Failed to submit user data');
        //     }
    
        //     const data = await res.json();
        //     setResponseMessage('Thanks for signing the Petition!');
        //     console.log('Submitted user data:', data);
    
        //     setFirstName('');
        //     setLastName('');
        //     setEmail('');
        //     setState('');
    
        // } catch (error) {
        //     console.error('Error submitting data:', error);
        //     setResponseMessage('Error submitting data');
        // }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className={styles["user-form"]}>
            <label className={styles["label"]}>First Name</label>
            <input 
                type="text" 
                className={styles["input"]} 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
            />

            <label className={styles["label"]}>Last Name</label>
            <input 
                type="text" 
                className={styles["input"]} 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
            />

            <label className={styles["label"]}>Email</label>
            <input 
                type="email" 
                className={styles["input"]} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />

            <label className={styles["label"]}>State</label>
            <select 
                className={styles["input"]} 
                value={state} 
                onChange={(e) => setState(e.target.value)}
            >
                <option value="">Select a State</option>
                {statesData.states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>

            <button className={styles["submit-btn"]} type="submit">Submit</button>

            
        </form>
            <div> {responseMessage && <p className={styles['success']}>{responseMessage}</p>}</div>
        </>
    );
}
