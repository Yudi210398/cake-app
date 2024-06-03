/*
  Warnings:

  - Added the required column `quantity` to the `cake` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cake" ADD COLUMN     "quantity" INTEGER NOT NULL;
