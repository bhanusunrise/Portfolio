import { Button, Text, Title } from "@mantine/core";
import FrontPageParagraph from "./components/front_page_paragraph";
import FrontPageTitle from "./components/front_page_title";
import HomeVideo from "./components/home_video";
import FrontPageProject from "./components/front_page_project";
import ExperianceTimeline from "./components/timeline";
import FrontPageContactForm from "./components/front_page_contact_form";

export default function HomePage() {
    return (
        <>
             <HomeVideo />
      
        <br /><br /><br /><br /><br />
      <FrontPageTitle />
      <FrontPageParagraph />
      <div style={{ display: "flex", alignItems: "center", marginTop: "2%"}}>
        <Button variant="outline" color="rgba(255, 255, 255, 1)" radius="xl" size="xl" style={{ paddingLeft: "3%", paddingRight: "3%", marginLeft: "5%" }}>
          <a href="tel:+94762018348">Contact</a>
        </Button>
        <a href="https://www.linkedin.com/in/pasindu-bhanuka-/" target="_blank" rel="noopener noreferrer" style={{marginLeft: "3%"}}>
          <i className="fa-brands fa-linkedin" style={{ color: "#ffffff", fontSize: "3rem" }}></i>
        </a>
        <a href="https://github.com/bhanusunrise" target="_blank" rel="noopener noreferrer" style={{marginLeft: "3%"}}>
          <i className="fa-brands fa-github" style={{ color: "#ffffff", fontSize: "3rem" }}></i>
        </a>
        <a href="https://web.facebook.com/profile.php?id=61552988180349" target="_blank" rel="noopener noreferrer" style={{marginLeft: "3%"}}>
          <i className="fa-brands fa-facebook" style={{ color: "#ffffff", fontSize: "3rem" }}></i>
        </a>
        <a href="https://www.instagram.com/bhanusunrise____/" target="_blank" rel="noopener noreferrer" style={{marginLeft: "3%"}}>
          <i className="fa-brands fa-instagram" style={{ color: "#ffffff", fontSize: "3rem" }}></i>
        </a>
        <a href="https://www.youtube.com/@bhanusunrise" target="_blank" rel="noopener noreferrer" style={{marginLeft: "3%"}}>
          <i className="fa-brands fa-youtube" style={{ color: "#ffffff", fontSize: "3rem" }}></i>
        </a>
        <a href="mailto:pasindubhanukagood@gmail.com" target="_blank" rel="noopener noreferrer" style={{marginLeft: "3%"}}>
          <i className="fa-brands fa-google" style={{ color: "#ffffff", fontSize: "3rem" }}></i>
        </a>
        <a href="tel:+94762018348" target="_blank" rel="noopener noreferrer" style={{marginLeft: "3%"}}>
          <i className="fa-brands fa-whatsapp" style={{ color: "#ffffff", fontSize: "3rem" }}></i>
        </a>
      </div>
      <br /><br /><br /><br /><br />
      <div style={{ backgroundColor: "#ffffff", paddingTop: "10%" }}>
        <Title order={1} size="4rem" c="black" style={{fontWeight: "400", textAlign: "center"}}>My Projects</Title>
        <FrontPageProject 
          images={["./projects/adventure_tours_2.png", "./projects/adventure_tours_1.png"]} 
          title="www.adventuretourssl.com" 
          paragraph="Adventue Tours is a Tuk Tuk company which provides tours around Nuwara Eliya and Badulla Sri Lanka. This website was built using Nextjs and TypeScript." 
          url="https://www.adventuretourssl.com" />
        <FrontPageProject 
          images={["./projects/gamini_builders_1.png", "./projects/gamini_builders_2.png"]} 
          title="www.gaminibuilders.com" 
          paragraph="Gamini Builders is a construction company which provides construction services in Sri Lanka. This website was built using PHP." 
          url="https://www.gaminibuilders.com" />

        <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
          <Button variant="outline" color="rgba(0, 0, 0, 1)" radius="xl" size="xl" style={{ paddingLeft: "3%", paddingRight: "3%" }}>
            <a href="/projects">View All Projects</a>
          </Button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "2%", paddingTop: "15%" }}>
          <div style={{ flex: 1, textAlign: "left" }}>
            <img src="./experiance_bg.png" alt="Project Image 1" style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center", borderRadius: "10px" }} />
          </div>
          <div style={{ flex: 1, textAlign: "left" }}>
            <Title order={1} size="4rem" c="black" style={{ fontWeight: "400", marginBottom: "5%" }}>My Experiences</Title>
            <Text size="xl" style={{ color: "gray", fontWeight: "400", marginBottom: "10%" }}>
               Currently serving as a software engineer team leader at AIESEC, while freelancing as a web developer at Bhanu Sunrise Solutions. I have experience in building websites using Nextjs, Reactjs and PHP. I have also worked on projects using Python, JavaScript, Java and Flutter.
            </Text>
            <ExperianceTimeline items={[
              { title: "Software Engineer - Team Lead (Internship) | AIESEC in Sri Lanka", description: "I am working as a Software Engineer Team Lead at National Dev Team of AIESEC in Sri Lanka. While doing my internship, I mainly contributed to rewamp the CRM project and to develop hackathon dashboards. Mainly I used Bext, TypeScript, Steamlit and Mongo DB as Technologies. As a Team Leader, I managed the GitHub repository and my team to achieve all goals.", time: "2024 August - Present" },
              { title: "Software Developer | AIESEC in Sri Lanka", description: "Started my carrier as a Software Developer at the National Dev Team of AIESEC in Sri Lanka. This time I worked as a part time developer. Mainly contributed to develop hackathon dashboards by using Streamlit.", time: "2024 February - 2024 August" },
              { title: "Freelance Web Developer | Bhanu Sunrise Solutions", description: "I am working as a freelance web developer at Bhanu Sunrise Solutions. I mainly worked on projects using Nextjs, Reactjs and PHP. Handled 2 cl;ient web projects so far.", time: "2023 July - Present" }
            ]} />
          </div>
        </div>
        <Title order={1} size="4rem" c="black" style={{fontWeight: "400", textAlign: "center", paddingTop: "15%", paddingBottom: "5%"}}>About Me</Title>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "2%" }}>
          <div style={{ flex: 1, textAlign: "center", paddingRight: "5%" }}>
            <Text size="xl" style={{ color: "gray", fontWeight: "400", marginBottom: "10%" }}>
              I am a software engineer with a passion for building innovative and user-friendly applications. I have a strong background in web development and have worked on projects using Nextjs, Reactjs and PHP. I am also experienced in Python, JavaScript, Java and Flutter. I am currently serving as a software engineer team leader at AIESEC, while freelancing as a web developer at Bhanu Sunrise Solutions.
            </Text>
            <Text size="xl" style={{ color: "gray", fontWeight: "400", marginBottom: "10%" }}>
              I studied at  Bandaranayake College Gampaha and completed my Advanced Level examination in 2020 in Physical Science and I.C.T. stream. I am currently studying for a Bachelor&apos;s degree in Information Technology at the University of Kelaniya. I am a self-motivated individual who is always eager to learn new technologies and improve my skills.
            </Text>
          </div>
          <div style={{ flex: 1, textAlign: "left", paddingLeft: "5%" }}>
            <img src="./pro_pic.jpg" alt="Project Image 1" style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center", borderRadius: "10px" }} />
          </div>
        </div>

        <Title order={1} size="4rem" c="black" style={{fontWeight: "400", textAlign: "center", paddingTop: "15%", paddingBottom: "5%"}}>Get in Touch</Title>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "2%" }}>
          <div style={{ flex: 1, textAlign: "center", paddingRight: "5%" }}>
            <img src="./contact_pic.png" alt="Project Image 1" style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center", borderRadius: "10px" }} />
          </div>
          <div style={{ flex: 1, paddingLeft: "5%" }}>
            <FrontPageContactForm />
          </div>
        </div>


      </div>
        </>

    );
}