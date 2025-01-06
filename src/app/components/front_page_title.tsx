
import { Title, MantineProvider } from '@mantine/core';
export default function FrontPageTitle() {
    return (
        <>
            <MantineProvider  >
                <Title order={1} size="4.5rem" c="white" style={{ paddingLeft: "5%", fontWeight: "400"}}>Pasindu Bhanuka - Aspiring<br/> Software Engineer &<br/> Web Developer Portfolio</Title>
            </MantineProvider>
        </>
    );
}