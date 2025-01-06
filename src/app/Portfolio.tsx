import { Text, Title } from "@mantine/core";
import Project from "./components/project";

export default function Portfolio() {
    return (
        <>  
            <br /><br /><br /><br /><br /><br />
            <Title order={1} size="4rem" c="black" style={{fontWeight: "400", textAlign: "center"}}>Portfolio</Title>
            <Text size="xl" c="gray" style={{textAlign: "center", paddingLeft: "10%", paddingRight: "10%", marginTop: "3%", marginBottom: "3%"}}>
                Showcasing my projects in web development and software engineering. These projects highlights my skills in Next.js and TypeScript, showcasing a responsive web application that enhances user experience and demonstrates my coding proficiency.
                As a freelance web developer, I created various websites for clients, focusing on functionality and design, utilizing technologies like PHP and MySQL to deliver high-quality solutions.
            </Text>

            <Project 
                title="www.adventuretourssl.com" 
                description="Adventure Tours is a Tuk Tuk riding company which is in Nuwara Eliya Sri Lanka. I developed this website to manage reviews, messages, update packages and showcase business to the clients so easily." 
                technologies={["MySQL", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"]}
                imageUrl="/projects/adventure_tours_2.png"
                project_link="https://www.adventuretourssl.com"
            />

            <Project 
                title="www.gaminibuilders.com" 
                description="Gaminibuilders is a construction company which is in Nuwara Eliya Sri Lanka. I developed this website to showcase their business to their clients so easily." 
                technologies={["PHP", "Bootstrap", "JavaScript", "Hostinger"]}
                imageUrl="/projects/gamini_builders_1.png"
                project_link="https://www.gaminibuilders.com"
            />

            <Project 
                title="www.bhanusunrisesolutions.io" 
                description="Bhanu Sunrise Solutions is a software company which is handled by me. I developed this website to showcase my business to outside world." 
                technologies={["PHP", "Bootstrap", "JavaScript", "Hostinger", "MySQL"]}
                imageUrl="/projects/bhanu_sunrise_solutions.png"
                project_link="https://www.bhanusunrisesolutions.io"
            />

            <Project 
                title="www.pasindubhanuka.com" 
                description="This is website of myself and now you are here. I developed this website to showcase my personal information to outside world." 
                technologies={["Next.js", "TypeScript", "Mantine UI", "Vercel"]}
                imageUrl="/projects/pasindu_bhanuka.png"
                project_link="https://www.bhanusunrise.com"
                repo_link="https://github.com/bhanusunrise/Portfolio"
            />

            <Project 
                title="Global Expansia Website" 
                description="Global Expansia was an event that was held in 2024 and I was a part of the organizing committee. I developed this website to showcase the event to the participants." 
                technologies={["Python", "Streamlit"]}
                imageUrl="/projects/global_expansia.png"
                repo_link="https://github.com/bhanusunrise/Global-Expansia-1.0"
            />


        </>
    );
}