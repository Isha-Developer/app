-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "Student" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING(255),
    "email" STRING(255) NOT NULL,
    "gender" "Gender" NOT NULL,
    "course" STRING NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
