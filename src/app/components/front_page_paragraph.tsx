import { MantineProvider, Text } from "@mantine/core";

export default function FrontPageParagraph() {
    return (
        <>
            <MantineProvider>
                <Text size="xl" style={{ paddingLeft: "5%", color: "white", fontWeight: "400" }}>
                    Showcasing My Skills, Projects, and Experiences in <br/> Technology                
                </Text>
            </MantineProvider>
        </>
    );
}