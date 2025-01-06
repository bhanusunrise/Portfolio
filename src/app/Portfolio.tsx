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

            <Project 
                title="Exchange Marathon Dashboard" 
                description="Exchange Marathon was an event which was condusted globally by AIESEC international and in Sri Lanka, it was handled by AIESEC in Sri Lanka. I developed this dashboard to manage the event." 
                technologies={["Python", "Streamlit"]}
                imageUrl="/projects/exchange_marathon.png"
                repo_link="https://github.com/AIESEC-LK/exchange-marathon-dashboard"
            />

            <Project 
                title="NLDS Marathon Dashboard" 
                description="NLDS Marathon ws a similar event to Exchange Marathon. I developed this dashboard to manage the event." 
                technologies={["Python", "Streamlit"]}
                imageUrl="/projects/exchange_marathon.png"
                repo_link="https://github.com/AIESEC-LK/nlds-marathon"
            />

            <Project 
                title="Akuna Weather App" 
                description="This is a weather app which was developed by me to showcase the weather of the world. This is my academic project." 
                technologies={["Flutter", "Weather API"]}
                imageUrl="/projects/akuna_weather_app.png"
                repo_link="https://github.com/bhanusunrise/Akuna-Weather-App"
            />

            <Project 
                title="Eventra Event Notifying App" 
                description="This is an event notifying app which was developed by me to notify the events to the users. This is my academic project." 
                technologies={["Java", "Android Studio"]}
                imageUrl="/projects/eventra_event_app.png"
                repo_link="https://github.com/bhanusunrise/EVENTRA-Android-App"
            />

            <Project 
                title="Koopi - Coffee Shop Management System" 
                description="This is a desktop application which was developed by me to manage the coffee shop. This is my academic project." 
                technologies={["Java", "Java Swing", "MySQL"]}
                imageUrl="/projects/koopi_desktop_app.png"
                repo_link="https://github.com/bhanusunrise/Coffee-Shop"
            />

            <Project 
                title="VR Era - VR Content Management System" 
                description="This website was devekoped to showcase the VR content to the student. This is my hackathon project." 
                technologies={["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "A-Frame"]}
                imageUrl="/projects/vr_era_app.png"
                repo_link="https://github.com/bhanusunrise/VR-Era"
            />

            <Project 
                title="Kamadasa Video Game" 
                description="This video game was developed by me for our school's 100th anniversary exhibition X'Ban 2018. I presented whis project for entire five days." 
                technologies={["Game Maker 8.0", "MS Paint", "Virtual DJ", "Audacity", "GML"]}
                imageUrl="/projects/kamadasa.jpeg"
                project_link="https://drive.google.com/file/d/1wdlaOCcmgfJs4PqyJKaaghD9KH_L1QGu/view?usp=sharing"
            />

        </>
    );
}