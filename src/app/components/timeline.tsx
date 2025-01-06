'use client';

import { Timeline, Text, MantineProvider } from '@mantine/core';

interface TimelineItem {
    title: string;
    description: string;
    time: string;
}

interface DemoProps {
    items: TimelineItem[];
}

export default function ExperianceTimeline({ items }: DemoProps) {
    return (
        <>
        <div style={{ fontSize: "1.5rem" }}>
        <MantineProvider>
        <Timeline bulletSize={25}>
            {items.map((item, index) => (
                <Timeline.Item key={index} title={item.title} >
                    <Text c="dimmed" size="lg">
                        {item.description}
                    </Text>
                    <Text size="md" mt={4}>{item.time}</Text>
                </Timeline.Item>
            ))}
        </Timeline>
        </MantineProvider>
        </div>
        </>
    );
}
