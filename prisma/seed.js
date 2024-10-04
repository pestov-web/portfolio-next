import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const user = {
  id: "3d1ec36f-c330-45f5-b94c-1fed5a56dc69",
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD, // bcrypt для хэширования в реальном приложении
  name: process.env.ADMIN_USERNAME,
  avatar_url:
    "https://your-supabase-url/storage/v1/object/public/avatars/test-avatar.png",
  role: "admin",
};

async function main() {
  try {
    // Check if user object is defined
    if (!user) {
      throw new Error("User object is not defined");
    }

    // Check if prisma object is defined and configured
    if (!prisma) {
      throw new Error("Prisma object is not defined or configured");
    }

    // Create test user
    await prisma.user.create({
      data: {
        email: user.email,
        password: user.password, // bcrypt для хэширования в реальном приложении
        name: user.name,
        avatar_url: user.avatar_url,
        role: user.role,
      },
    });

    // Create test project
    await prisma.project.create({
      data: {
        title: "My Awesome Project",
        description: "This is a description of an awesome project.",
        url: "https://project-url.com",
        image_url:
          "https://your-supabase-url/storage/v1/object/public/projects/my-awesome-project.png",
        userId: user.id,
      },
    });

    // Create test skill
    await prisma.skill.create({
      data: {
        name: "JavaScript",
        userId: user.id,
      },
    });

    // Create test blog post
    await prisma.blogPost.create({
      data: {
        title: "My First Blog Post",
        content:
          "# Hello World\nThis is my first blog post written in **Markdown**!",
        status: "published",
        authorId: user.id,
        published_at: new Date(),
      },
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
main();
