import { Button, Pill, Text, Title } from "@mantine/core";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repo_link?: string;
  project_link?: string;
}

export default function Project({ title, description, technologies, imageUrl, repo_link, project_link }: ProjectProps) {
  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <img src={imageUrl} alt={title} style={imageStyle} />
      </div>
      <div style={rightColumnStyle}>
        <Title order={1} size="2rem" c="black" style={{ fontWeight: "400", textAlign: "left", paddingLeft: "10%", paddingRight: "10%" }}>
          {title}
        </Title>
        <Text
          size="xl"
          c="gray"
          style={{ textAlign: "left", paddingLeft: "10%", paddingRight: "10%", marginTop: "3%", marginBottom: "3%" }}
        >
          {description}
        </Text>
        <Pill.Group style={{ paddingLeft: "10%", paddingRight: "10%", marginBottom: "3%" }}>
          {technologies.map((tech) => (
            <Pill key={tech} style={{ backgroundColor: "gray", color: "#ffffff" }}>{tech}</Pill>
          ))}
        </Pill.Group>
        {repo_link && (
          <Button
            variant="filled"
            color="dark"
            style={{ paddingLeft: "3%", paddingRight: "3%", marginLeft: "10%" }}
            component="a"
            href={repo_link}
            target="_blank"
          >
            <i className="fa-brands fa-github" style={{ color: "#ffffff", fontSize: "1rem", marginRight: "10px" }}></i> View Repository
          </Button>
        )}
        {project_link && (
          <Button
            variant="filled"
            style={{
              paddingLeft: "3%",
              paddingRight: "3%",
              marginLeft: repo_link ? "3%" : "10%",
            }}
            component="a"
            href={project_link}
            target="_blank"
          >
            <i className="fa-solid fa-external-link" style={{ color: "#ffffff", fontSize: "1rem", marginRight: "10px" }}></i> View Project
          </Button>
        )}
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  paddingLeft: '10%',
  gap: '20px',
};

const leftColumnStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const rightColumnStyle = {
  flex: '2',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
};
