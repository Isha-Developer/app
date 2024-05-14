import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const {course, email, gender, name} = await request.json();
  const newStudent = await prisma.student.create({
    data: {
      course: course,
      email: email,
      gender: gender,
      name: name,
    },
  });
  return new Response(JSON.stringify(newStudent), { status: 200 });
}
