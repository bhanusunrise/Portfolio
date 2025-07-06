import { Title, Text, Tabs } from "@mantine/core";
import ExperianceTimeline from "./components/timeline";
import Achievement from "./components/achievement";
import Certification from "./components/certification";

export default function Experience() {
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <Title order={1} size="4rem" c="black" style={{fontWeight: "400", textAlign: "center"}}>Experience</Title>
            <Text size="xl" c="gray" style={{textAlign: "center", paddingLeft: "10%", paddingRight: "10%", marginTop: "3%", marginBottom: "3%"}}>
                I have wide range of experiances including Software Development, Event Management, Marketing, and more. I have worked with various companies and organizations to help them grow and achieve their goals.
                In my university and school years, I have worked with various sports, clubs and organizations to help them grow and achieve their goals. Also, I have completed some certifications while getting some more achievements.

            <br /><br /><br />

            <Tabs defaultValue="positions">
                <Tabs.List justify="center">
                    <Tabs.Tab value="positions"><Text size = "xl"><i className="fa-solid fa-briefcase" style={{marginRight: "10%"}}></i>Positions</Text></Tabs.Tab>
                    <Tabs.Tab value="achievements"><Text size = "xl"><i className="fa-solid fa-award" style={{marginRight: "10%"}}></i>Achievements</Text></Tabs.Tab>
                    <Tabs.Tab value="certifications"><Text size = "xl"><i className="fa-solid fa-certificate" style={{marginRight: "10%"}}></i>Certifications</Text></Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="positions">

                <div style={{marginTop: "15%", marginBottom: "3%", marginLeft: "10%", marginRight: "10%"}}>
                <ExperianceTimeline
                    items={[   
                        {
                            title: "Freelance Developer | Upwork",
                            description: "Started my freelance career as a developer on Upwork.",
                            time: "2025 July - Present"
                        }, 
                        {
                            title: "Product Manager | AIESEC in Sri Lanka",
                            description: "As the Product Manager, I have contributed to the finalizing the CRM project.",
                            time: "2025 February - 2025 July"
                        },
                        {
                        title: "Web Designer | AIESEC in Greece",
                        description: "I worked with AIESEC in Greece's as a Web Designer.",
                        time: "2025 January - 2025 - June"
                        },
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
                        description: "I was working with AIESEC in University of Kelaniya's Incoming Exchanges Team to help them grow and achieve their goals. I am mainly working on creating marketing strategies",
                        time: "2024 August - 2024 January"
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
                        title: "Core Committee Member - Business Development | NatCon'24 | AIESEC in Sri Lanka",
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

                <Tabs.Panel value="achievements">
                    <div style={{marginTop: "15%", marginBottom: "3%", marginLeft: "10%", marginRight: "10%"}}>
                        <Achievement 
                            achievement="Zest of June for IGv B2B - AIESEC in University of Kelaniya"
                            description="I was awarded the Zest of June for iGV B2B - AIESEC in University of Kelaniya for the month of June 2024."
                            date="2024 June"
                            image_url="/achievements/igv.jpeg"
                        />
                        <Achievement 
                            achievement="Edify - Intra departmental Article Competition - Second Runner's Up"
                            description="I was awarded the Second Runner's Up award at the Edify - Intra departmental Article Competition which was organized by Department of Industrial Management, Faculty of Science,
                            University of Kelaniya for Exposition Issue 19."
                            date="2024 February"
                            image_url="/achievements/edify.jpg"
                        />
                        <Achievement
                            achievement="Pioneers Ideathon - Finalist"
                            description="I was awarded as a Finalist at the Pioneers Ideathon which was organized by Rotaract Club, University of Kelaniya."
                            date="2023 May"
                            image_url="/achievements/pioneers.jpeg"
                        />
                        <Achievement
                            achievement="Kick Start Weekend - Runner's Up"
                            description="Our talent management system (TalentX) became the second best business idea of the Kickstart weekend."
                            date="2023 March"
                            image_url="/achievements/kick_start.jpg"
                        />
                        <Achievement
                            achievement="HackX 7.0 - Finalist"
                            description="Our team could be able to select as a finalist at the HackX 7.0 which was organized by Department of Industrial Management, Faculty of Science, University of Kelaniya."
                            date="2022 September"
                            image_url="/achievements/hackx.jpg"
                        />
                    </div>           
                </Tabs.Panel>

                <Tabs.Panel value="certifications">
                   
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10%", marginTop: "10%" }}>
                    <div style={{ flex: 1, textAlign: "left", paddingRight: "5%" }}>

                    <Certification
                        certificate="Getting Started with CISCO Packet Tracer"
                        description="CISCO"
                        date="2023 March"
                        image_url="/certifications/packet_tracer.png"
                    />

                     <Certification
                        certificate="Introduction to JavaScript"
                        description="Sololearn"
                        date="2023 March"
                        image_url="/certifications/intro_to_js.jpg"
                    />

                    <Certification
                        certificate="Introduction to Java"
                        description="Sololearn"
                        date="2023 March"
                        image_url="/certifications/intro_to_java.jpg"
                        />
                    <Certification
                        certificate="Java Intermediate"
                        description="Sololearn"
                        date="2023 March"
                        image_url="/certifications/java_intm.jpg"
                        />


                    </div>
                    <div style={{ flex: 1, textAlign: "right", paddingLeft: "5%" }}>
                    <Certification
                        certificate="Introduction to HTML"
                        description="Sololearn"
                        date="2023 March"
                        image_url="/certifications/intro_to_html.jpg"
                        />

                    <Certification
                        certificate="Introduction to CSS"
                        description="Sololearn"
                        date="2023 March"
                        image_url="/certifications/intro_to_css.jpg"
                        />

                    <Certification
                        certificate="Introduction to SQL"
                        description="Sololearn"
                        date="2023 March"
                        image_url="/certifications/intro_to_sql.jpg"
                        />
                    </div>
                </div>

                </Tabs.Panel>    
                </Tabs>
            </Text>
        </div>
    );
}