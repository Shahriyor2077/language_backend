/*
  Warnings:

  - Made the column `specification` on table `teacher` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "teacher" ALTER COLUMN "specification" SET NOT NULL,
ALTER COLUMN "specification" SET DEFAULT 'english';
