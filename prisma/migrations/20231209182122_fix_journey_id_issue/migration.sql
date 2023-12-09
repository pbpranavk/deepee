/*
  Warnings:

  - You are about to drop the column `journeyId` on the `Investment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Investment" DROP CONSTRAINT "Investment_journeyId_fkey";

-- AlterTable
ALTER TABLE "Investment" DROP COLUMN "journeyId",
ALTER COLUMN "journey_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_journey_id_fkey" FOREIGN KEY ("journey_id") REFERENCES "Journey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
