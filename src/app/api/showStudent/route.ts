import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const response = await prisma.student.findMany({
    select: {
      name: true,
    },
  });
  return new Response(JSON.stringify(response), { status: 200 });
}
