import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'message') setMessage(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to submit the form
    };

    return (
        <section>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" value={name} onChange={handleInputChange} required />
                <input name="email" type="email" value={email} onChange={handleInputChange} required />
                <textarea name="message" value={message} onChange={handleInputChange} required />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
