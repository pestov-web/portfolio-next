const navList = [
  {
    id: "1",
    name: "Home",
    href: "/",
    icon: "solar:home-smile-linear",
  },
  {
    id: "2",
    name: "Projects",
    href: "/projects",
    icon: "solar:suitcase-tag-linear",
  },
  {
    id: "3",
    name: "Library",
    href: "/library",
    icon: "solar:library-linear",
  },
  {
    id: "4",
    name: "Contact",
    href: "/contact",
    icon: "solar:mailbox-linear",
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
