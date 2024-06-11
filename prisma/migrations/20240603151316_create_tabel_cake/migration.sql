-- CreateEnum
CREATE TYPE "Category" AS ENUM ('KUE_KERING', 'KUE_BASAH');

-- CreateTable
CREATE TABLE "cake" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "nameCake" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cake_pkey" PRIMARY KEY ("id")
);
