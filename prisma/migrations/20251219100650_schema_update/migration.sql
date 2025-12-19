/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[googleId]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[googleRefreshToken]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[googleAccessToken]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - Made the column `phoneNumber` on table `admin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reason` on table `deletedTeacher` required. This step will fail if there are existing NULL values in that column.
  - Made the column `star` on table `lessonHistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `googleId` on table `teacher` required. This step will fail if there are existing NULL values in that column.
  - Made the column `googleRefreshToken` on table `teacher` required. This step will fail if there are existing NULL values in that column.
  - Made the column `googleAccessToken` on table `teacher` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "phoneNumber" SET NOT NULL;

-- AlterTable
ALTER TABLE "deletedTeacher" ALTER COLUMN "reason" SET NOT NULL;

-- AlterTable
ALTER TABLE "lesson" ALTER COLUMN "status" SET DEFAULT 'available';

-- AlterTable
ALTER TABLE "lessonHistory" ALTER COLUMN "star" SET NOT NULL;

-- AlterTable
ALTER TABLE "teacher" ALTER COLUMN "googleId" SET NOT NULL,
ALTER COLUMN "googleRefreshToken" SET NOT NULL,
ALTER COLUMN "googleAccessToken" SET NOT NULL,
ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "experience" SET DEFAULT '0 years';

-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "status" SET DEFAULT 'pending';

-- CreateIndex
CREATE UNIQUE INDEX "admin_phoneNumber_key" ON "admin"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_googleId_key" ON "teacher"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_googleRefreshToken_key" ON "teacher"("googleRefreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_googleAccessToken_key" ON "teacher"("googleAccessToken");
