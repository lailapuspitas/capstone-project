/*
  Warnings:

  - Added the required column `timetable` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Doctor` ADD COLUMN `timetable` VARCHAR(191) NOT NULL;
