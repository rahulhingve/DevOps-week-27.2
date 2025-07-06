/*
  Warnings:

  - You are about to drop the column `paswordF` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "paswordF",
ADD COLUMN     "password" TEXT;
