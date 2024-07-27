'use client'
import  db from '../firebase/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "messages"), {
                name: name,
                email: email,
                message: message,
            });
            // Optionally, reset the form fields after successful submission
            setName('');
            setEmail('');
            setMessage('');
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return(
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <label htmlFor="name" className="font-Ubuntu"><strong>Name</strong></label>
      <input type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name" required className="border-b border-gray-300 p-2 bg-transparent" />

      <label htmlFor="email" className="font-Ubuntu"><strong>Email</strong></label>
      <input type="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" required className="border-b border-gray-300 p-2 bg-transparent " />

      <label htmlFor="message" className="font-Ubuntu"><strong>Message</strong></label>
      <textarea id="message" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Enter your message" required className="border border-gray-300 p-2 h-32 rounded bg-transparent"></textarea>

      <button type="submit" className="bg-blue-500 font-Ubuntu dark:bg-orange-800 text-white py-2 rounded">Send</button>
    </form>
    )
};
