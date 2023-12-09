/*
  Warnings:

  - The primary key for the `Investment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Journey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `journeyId` on table `Investment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Investment" DROP CONSTRAINT "Investment_journeyId_fkey";

-- AlterTable
ALTER TABLE "Investment" DROP CONSTRAINT "Investment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "journeyId" SET NOT NULL,
ALTER COLUMN "journeyId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Investment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Investment_id_seq";

-- AlterTable
ALTER TABLE "Journey" DROP CONSTRAINT "Journey_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Journey_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Journey_id_seq";

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "Journey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
