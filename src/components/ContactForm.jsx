import React, { useState } from 'react'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format!');
            return;
        }

        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);


        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto', gap: '10px' }}>
            <label htmlFor="name">
                Name
                <input type="text" name="name" id="name" value={name} required onChange={e => setName(e.target.value)} />
            </label>
            <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" value={email} required onChange={e => setEmail(e.target.value)} />
            </label>
            <label htmlFor="message">
                Message
                <textarea type="text" name="message" id="message" value={message} required onChange={e => setMessage(e.target.value)} />
            </label>
            <button type="submit" disabled={!name || !email || !message} onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ContactForm