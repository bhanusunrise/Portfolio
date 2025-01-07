import { Title, Text, Tabs } from "@mantine/core";
import ExperianceTimeline from "./components/timeline";

export default function Experience() {
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <Title order={1} size="4rem" c="black" style={{fontWeight: "400", textAlign: "center"}}>Experience</Title>
            <Text size="xl" c="gray" style={{textAlign: "center", paddingLeft: "10%", paddingRight: "10%", marginTop: "3%", marginBottom: "3%"}}>
                I have wide range of experiances including Software Development, Event Management, Marketing, and more. I have worked with various companies and organizations to help them grow and achieve their goals.
                In my university and school years, I have worked with various sports, clubs and organizations to help them grow and achieve their goals.

            <br /><br /><br />

            <Tabs defaultValue="positions">
                <Tabs.List justify="center">
                    <Tabs.Tab value="positions"><Text size = "xl">Positions</Text></Tabs.Tab>
                    <Tabs.Tab value="organizations"><Text size = "xl">Achievements</Text></Tabs.Tab>
                    <Tabs.Tab value="certifications"><Text size = "xl">Certifications</Text></Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="positions">

                <div style={{marginTop: "15%", marginBottom: "3%", marginLeft: "10%", marginRight: "10%"}}>
                <ExperianceTimeline
                    items={[    
                        {
                        title: "Software Engineer - Team Lead (Internship) | AIESEC in Sri Lanka",
                        description: "I am working with AIESEC in Sri Lanka's National Dev Team to help them grow and achieve their goals. I am mainly working on CRM project and hackathon dashboards.",
                        time: "2024 August - Present"
                        },
                        {
                        title: "Software Developer | AIESEC in Sri Lanka",
                        description: "I have started my carrier as a Software Developer at the National Dev Team of AIESEC in Sri Lanka. This time I worked as a part time developer. I mainly worked on hackathon dashboards by using Streamlit.",
                        time: "2024 February - 2024 August"
                        },
                        {
                        title: "Product Strategy - Team Lead - Incoming Exchanges | AIESEC in University of Kelaniya",
                        description: "I am working with AIESEC in University of Kelaniya's Incoming Exchanges Team to help them grow and achieve their goals. I am mainly working on creating marketing strategies",
                        time: "2024 August - Present"
                        },
                        {
                        title: "Freelance Web Developer | Bhanu Sunrise Solutions",
                        description: "I am working as a freelance web developer at Bhanu Sunrise Solutions. I mainly worked on projects using Nextjs, Reactjs and PHP. Handled 2 client web projects so far.",
                        time: "2023 July - Present"
                        },
                        {
                        title: "Organizing Committee Vice President - Events and Logistics | Global Expansia | AIESEC in University of Kelaniya",
                        description :"I was working with AIESEC in University of Kelaniya's Events and Logistics Team to help them grow and achieve their goals. I am mainly worked on improving the quality of the event by facilitating well.",
                        time: "2024 June - 2024 September"
                        },
                        {
                        title: "Performance Manager | Creative Regiment | AIESEC in University of Kelaniya",
                        description: "I was working with AIESEC in University of Kelaniya's Creative Regiment as a Performance Manager to help them grow and achieve their goals. I am mainly worked on updating trackers",
                        time: "2024 January - 2024 August"
                        },
                        {
                        title: "ER Coordinator | Incoming Global Volunteer | AIESEC in University of Kelaniya",
                        description: "I was working with AIESEC in University of Kelaniya's Incoming Global Volunteer as a ER Coordinator to help them grow and achieve their goals. I am mainly worked on raising partners and handling team",
                        time: "2024 January - 2024 August"
                        },
                        {
                        title: "Core Committee Member - Business Development | NatCon'24 | AIESEC in Sri Lanka;",
                        description: "I was working with AIESEC in Sri Lanka's NatCon'24 as a Core Committee Member to help them grow and achieve their goals. I am mainly worked on raising partners and supporting financially",
                        time: "2023 August - 2024 January"
                        },
                        {
                        title : "Platforms Handler | Creative Regiment | AIESEC in University of Kelaniya",
                        description: "I was working with AIESEC in University of Kelaniya's Creative Regiment as a Platforms Handler to help them grow and achieve their goals. I am mainly worked on supporting the Social Media handling part",
                        time: "2023 August - 2024 January"
                        },
                        {
                        title : "Sponsorship Coordinator | HackX Jr. 6.0 | Department of Industrial Management",
                        description: "I was working with Department of Industrial Management's HackX Jr. 6.0 as a Sponsorship Coordinator to help them grow and achieve their goals. I am mainly worked on raising partners and supporting financially",
                        time: "2023 April - 2023 November"
                        },
                        {
                        title : "Team Member | University of Kelaniya Scrabble",
                        description: "I played for university Scrabble team and contributed to organize the SPELL 2023 - inter university invitational scrabble tournament event.",
                        time: "2022 July - 2024 June"
                        },
                        {
                        title : "Member | University of Kelaniya Karate",
                        description: "I played Karate at the university premises for a short period of time",
                        time: "2022 July - 2023 January"

                        }
                    ]
                    }
                />
                </div>
                </Tabs.Panel>
                </Tabs>
            </Text>
        </div>
    );
}