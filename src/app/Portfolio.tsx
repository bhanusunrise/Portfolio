import { Text, Title } from "@mantine/core";

export default function Portfolio() {
    return (
        <>  
            <br /><br /><br /><br /><br /><br />
            <Title order={1} size="4rem" c="black" style={{fontWeight: "400", textAlign: "center"}}>Portfolio</Title>
            <Text size="xl" c="gray" style={{textAlign: "center", paddingLeft: "10%", paddingRight: "10%", marginTop: "3%", marginBottom: "3%"}}>
                Showcasing my projects in web development and software engineering. This project highlights my skills in Next.js and TypeScript, showcasing a responsive web application that enhances user experience and demonstrates my coding proficiency.
                As a freelance web developer, I created various websites for clients, focusing on functionality and design, utilizing technologies like PHP and MySQL to deliver high-quality solutions.
            </Text>

        </>
    );
}