import { Title, Text } from "@mantine/core";
import FrontPageContactForm from "./components/front_page_contact_form";

export default function Contact() {
    return (
        <>
               <div>
                   <br /><br /><br /><br /><br /><br />
                   <Title order={1} size="4rem" c="black" style={{fontWeight: "400", textAlign: "center"}}>Contact</Title>
                   <Text size="xl" c="gray" style={{textAlign: "center", paddingLeft: "10%", paddingRight: "10%", marginTop: "3%", marginBottom: "3%"}}>
                       If you have any questions or inquiries, please don't hesitate to contact me using the form below. I look forward to hearing from you!
                    </Text>
                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "2%" }}>
                        <div style={{ flex: 1, textAlign: "center", paddingRight: "5%" }}>
                            <img src="./contact_pic.png" alt="Project Image 1" style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center", borderRadius: "10px" }} />
                        </div>
                        <div style={{ flex: 1, paddingLeft: "5%" }}>
                            <FrontPageContactForm />
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: "5%", paddingRight: "5%", alignItems: "center", borderRadius: "10px" }}>
                    <center>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.9043134182036!2d80.0878489!3d7.031766500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fe2d459bab15%3A0x3d61f93230f853e7!2sAjith%20Nandana%20Online%20Advertising!5e0!3m2!1sen!2slk!4v1736269410649!5m2!1sen!2slk" width="1024" height="768" style={{border:0, borderRadius: "10px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </center>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "2%", marginTop: "10%" }}>
                    <div style={{ flex: 1, textAlign: "center" }}>
                        <Text size="xl" c="gray" style={{textAlign: "center", marginTop: "3%", marginBottom: "3%", fontWeight: "500"}}>
                            Contact Number
                        </Text>
                        <Text size="lg" c="gray" style={{textAlign: "center", marginTop: "3%", marginBottom: "3%"}}>
                            <a href="tel:+94762018348">076 2018 348</a>
                         </Text>
                    </div>
                    <div style={{ flex: 1, paddingLeft: "5%" }}>
                        <Text size="xl" c="gray" style={{textAlign: "center", marginTop: "3%", marginBottom: "3%", fontWeight: "500"}}>
                            Address
                        </Text>
                        <Text size="lg" c="gray" style={{textAlign: "center", marginTop: "3%", marginBottom: "3%"}}>
                            No 364/M,<br/> Mandawala road, <br/> Radawana
                        </Text>
                    </div>
                    <div style={{ flex: 1, paddingLeft: "5%" }}>
                        <Text size="xl" c="gray" style={{textAlign: "center", marginTop: "3%", marginBottom: "3%", fontWeight: "500"}}>
                            Email Address
                        </Text>
                        <Text size="lg" c="gray" style={{textAlign: "center", marginTop: "3%", marginBottom: "3%"}}>
                            <a href="mailto:pasindubhanukagood@gmail.com">pasindubhanukagood@gmail.com</a>
                        </Text>
                    </div>
                </div>

                <Text size="xl" c="gray" style={{textAlign: "center", marginTop: "3%", marginBottom: "3%", fontWeight: "500"}}>
                    Social Media
                </Text>   
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "10%", marginTop: "4%" }}>
                    <div style={{ flex: 1, paddingLeft: "5%" }}><a href ="https://www.linkedin.com/pasindu-bhanuka-"><i className="fa-brands fa-linkedin" style={{ color: "gray", fontSize: "3rem" }}></i></a></div>
                    <div style={{ flex: 1, paddingLeft: "5%" }}><a href ="https://www.github.com/bhanusunrise"><i className="fa-brands fa-github" style={{ color: "gray", fontSize: "3rem" }}></i></a></div>
                    <div style={{ flex: 1, paddingLeft: "5%" }}><a href ="https://web.facebook.com/profile.php?id=61552988180349"><i className="fa-brands fa-facebook" style={{ color: "gray", fontSize: "3rem" }}></i></a></div>
                    <div style={{ flex: 1, paddingLeft: "5%" }}><a href ="https://www.instagram.com/bhanusunrise____"><i className="fa-brands fa-instagram" style={{ color: "gray", fontSize: "3rem" }}></i></a></div>
                    <div style={{ flex: 1, paddingLeft: "5%" }}><a href ="https://www.youtube.com/@bhanusunrise"><i className="fa-brands fa-youtube" style={{ color: "gray", fontSize: "3rem" }}></i></a></div>
                    <div style={{ flex: 1, paddingLeft: "5%" }}><a href ="tel:+94762018348"><i className="fa-brands fa-whatsapp" style={{ color: "gray", fontSize: "3rem" }}></i></a></div>

                </div>


            </>
        );
}