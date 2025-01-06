import { Title, Text, Button } from "@mantine/core";



interface FrontPageProjectProps {
    images: string[];
    title: string;
    paragraph: string;
    url: string;
}

export default function FrontPageProject({ images, title, paragraph, url }: FrontPageProjectProps) {
    return (
        <>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5%", marginBottom: "5%", paddingLeft: "15%", paddingRight: "15%" }}>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Project Image ${index + 1}`}
                    style={{ width: "auto", height: "200px", objectFit: "cover", objectPosition: "center", borderRadius: "10px" }}
                />
            ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "2%" }}>
            <div style={{ flex: 1, textAlign: "left" }}>
            <Title order={4} size="2rem" c="black" style={{ fontWeight: "400" }}>{title}</Title>
            <Text size="xl" style={{ color: "gray", fontWeight: "400" }}>
                {paragraph}
            </Text>
            </div>
            <div style={{ flex: 1, textAlign: "right" }}>
            <Button variant="outline" color="rgba(0, 0, 0, 1)" radius="xl" size="xl" style={{ paddingLeft: "3%", paddingRight: "3%" }}>
                <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
            </Button>
            </div>
        </div>
        </>
    );
}