import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function Chat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        if (input !== '') {
            const socket = io('http://localhost:8080');
            socket.emit('chat message', { name, message: input }); // Sending name along with the message
            setInput('');
        }
    };

    useEffect(() => {
        const socket = io('http://localhost:8080');
        const enteredName = prompt('Tên bạn là gì : ');
        setName(enteredName);
        socket.emit('user connected', enteredName);

        socket.on('connection', (data) => {
            // Handle connection event if needed
        });

        socket.on('chat message send', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        // Cleanup socket connection on component unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Chat app</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message.name}: {message.message}</li>
                ))}
            </ul>
            <input type='text' value={input} onChange={handleChange} />
            <button type='submit' onClick={handleSubmit}>
                Send
            </button>
        </div>
    );
}
