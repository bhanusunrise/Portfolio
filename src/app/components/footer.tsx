'use client';

import { Anchor, Group } from '@mantine/core';
import classes from './FooterCentered.module.css';

const links = [
  { link: '#', label: 'Home' },
  { link: '#', label: 'Portfolio' },
  { link: '#', label: 'Experiance' },
  { link: '#', label: 'Contact' }
];

export default function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
            <i className="fa-brands fa-linkedin" style={{ color: "gray", fontSize: "1rem" }}></i>
            <i className="fa-brands fa-github" style={{ color: "gray", fontSize: "1rem" }}></i>
            <i className="fa-brands fa-facebook" style={{ color: "gray", fontSize: "1rem" }}></i>
            <i className="fa-brands fa-instagram" style={{ color: "gray", fontSize: "1rem" }}></i>
            <i className="fa-brands fa-youtube" style={{ color: "gray", fontSize: "1rem" }}></i>
            <i className="fa-brands fa-google" style={{ color: "gray", fontSize: "1rem" }}></i>
            <i className="fa-brands fa-whatsapp" style={{ color: "gray", fontSize: "1rem" }}></i>
        </Group>
      </div>
    </div>
  );
}