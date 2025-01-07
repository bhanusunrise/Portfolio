'use client';

import { Title, Text } from "@mantine/core";

interface certificationProps {
    certificate: string;
    description: string;
    date: string;
    image_url: string;
}

export default function Certification({ certificate, description, date, image_url }: certificationProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10%" }}>
            <div style={{ width: "100%", textAlign: "center", paddingBottom: "5%" }}>
                <img
                    src={image_url}
                    alt={certificate}
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "10px"
                    }}
                />
            </div>
            <div style={{ textAlign: "center", paddingLeft: "5%", paddingRight: "5%", width: "100%" }}>
                <Title order={4} size="1.5rem" c="black" style={{ fontWeight: "600" }}>
                    {certificate}
                </Title>
                <Text size="lg" style={{ color: "black", fontWeight: "400" }}>
                    {description}
                </Text>
                <Text size="md" style={{ color: "gray", fontWeight: "400" }}>
                    {date}
                </Text>
            </div>
            <hr />
        </div>
    );
}
