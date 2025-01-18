
"use client";

import { Button, Navbar } from "flowbite-react";

export function Navigationbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl md:text-2xl font-semibold text-[#155E75] dark:text-white ">College Dhundo</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="hidden md:block">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/Colleges">Colleges</Navbar.Link>
        <Navbar.Link href="#">Exams</Navbar.Link>
        <Navbar.Link href="#">Courses</Navbar.Link>
        <Navbar.Link href="/Contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
