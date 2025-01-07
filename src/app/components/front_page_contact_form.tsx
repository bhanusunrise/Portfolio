'use client';

import { Button, Input, InputLabel, Textarea } from "@mantine/core";
import { useState } from "react";

export default function FrontPageContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/send_mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                alert("Email sent successfully!");
                handleReset();
            } else {
                alert("Failed to send email.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while sending the email.");
        }
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form>
            <InputLabel htmlFor="name">Name:</InputLabel>
            <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <InputLabel htmlFor="email" style={{ marginTop: "4%" }}>Email:</InputLabel>
            <Input
                id="email"
                placeholder="johndoe@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <InputLabel htmlFor="message" style={{ marginTop: "4%" }}>Message:</InputLabel>
            <Textarea
                id="message"
                placeholder="I would like to work with you ..."
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="button" style={{ marginTop: "4%" }} onClick={handleSubmit}>Submit</Button>
            <Button type="reset" style={{ marginTop: "4%", marginLeft: "2%" }} variant="outline" color="gray" onClick={handleReset}>Reset</Button>
        </form>
    );
}
