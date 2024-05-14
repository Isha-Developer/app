/*
  Warnings:

  - You are about to alter the column `id` on the `Student` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Student" (
    "id" STRING NOT NULL,
    "name" STRING(255),
    "email" STRING(255) NOT NULL,
    "gender" "Gender" NOT NULL,
    "course" STRING NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
DROP INDEX "Student_email_key";
INSERT INTO "_prisma_new_Student" ("course","email","gender","id","name") SELECT "course","email","gender","id","name" FROM "Student";
DROP TABLE "Student" CASCADE;
ALTER TABLE "_prisma_new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
