/*
  Warnings:

  - The `level` column on the `teacher` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[googleMeetsUrl]` on the table `lesson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tgId]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cardNumber]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - Made the column `googleMeetsUrl` on table `lesson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tgId` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `teacher` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cardNumber` on table `teacher` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TeacherLevel" AS ENUM ('b2', 'c1', 'c2');

-- AlterTable
ALTER TABLE "lesson" ALTER COLUMN "googleMeetsUrl" SET NOT NULL;

-- AlterTable
ALTER TABLE "student" ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "tgId" SET NOT NULL;

-- AlterTable
ALTER TABLE "teacher" ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "cardNumber" SET NOT NULL,
DROP COLUMN "level",
ADD COLUMN     "level" "TeacherLevel" NOT NULL DEFAULT 'b2';

-- CreateIndex
CREATE UNIQUE INDEX "lesson_googleMeetsUrl_key" ON "lesson"("googleMeetsUrl");

-- CreateIndex
CREATE UNIQUE INDEX "student_phoneNumber_key" ON "student"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "student_tgId_key" ON "student"("tgId");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_phoneNumber_key" ON "teacher"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_cardNumber_key" ON "teacher"("cardNumber");
