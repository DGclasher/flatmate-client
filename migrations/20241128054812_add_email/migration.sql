/*
  Warnings:

  - The primary key for the `UserProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserProfile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailId]` on the table `UserProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailId` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_pkey",
DROP COLUMN "id",
ADD COLUMN     "emailId" TEXT NOT NULL,
ADD CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_emailId_key" ON "UserProfile"("emailId");
