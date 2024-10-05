const navList = [
  {
    id: "1",
    name: "Home",
    href: "/",
    icon: "HomeIcon",
  },
  {
    id: "2",
    name: "Projects",
    href: "/projects",
    icon: "CodeIcon",
  },
  {
    id: "3",
    name: "Blog",
    href: "/blog",
    icon: "BookOpenIcon",
  },
  {
    id: "4",
    name: "Contact",
    href: "/contact",
    icon: "MailIcon",
  },
];

const users = [
  {
    id: "16ad06bf-8632-47ea-9dc2-37ad9f338270",
    name: process.env.ADMIN_USERNAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    role: "admin",
  },
  {
    id: "16ad06bf-8632-47ea-9dc2-37ad9f338271",
    name: "admin",
    email: "admin@habr.ru",
    password: "lolipop123",
    role: "hacker",
  },
];

export { users, navList };
