-- CreateTable
CREATE TABLE "username" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,

    CONSTRAINT "username_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "username_name_key" ON "username"("name");
