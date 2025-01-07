import { Title, Text } from "@mantine/core";

interface achievementProps{
    achievement: string;
    description: string;
    date: string;
    image_url: string;
}

export default function Achievement({achievement, description, date, image_url}: achievementProps) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10%" }}>
            <div style={{ flex: 1, textAlign: "left", paddingRight: "5%" }}>
            <Title order={4} size="1.5rem" c="black" style={{ fontWeight: "600" }}>{achievement}</Title>
            <Text size="lg" style={{ color: "black", fontWeight: "400" }}>
                {description}
            </Text>
             <Text size="md" style={{ color: "gray", fontWeight: "400" }}>
                {date}
             </Text>
            </div>
            <div style={{ flex: 1, textAlign: "right", paddingLeft: "5%" }}>
            <img src={image_url} alt={achievement} style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center", borderRadius: "10px" }} />
            </div>
            <hr/>
        </div>
    );
}