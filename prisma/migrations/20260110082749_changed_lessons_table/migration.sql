-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "lesson_studentId_fkey";

-- AlterTable
ALTER TABLE "lesson" ALTER COLUMN "studentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
