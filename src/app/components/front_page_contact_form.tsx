'use client'

import { Button, Input, InputLabel, Textarea } from "@mantine/core";
import { useState } from "react";

export default function FrontPageContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {

        alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    }

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
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
        </>
    );
}
