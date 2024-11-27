-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "googleId" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "educationLevel" TEXT NOT NULL,
    "preferredCity" TEXT NOT NULL,
    "preferredAccommodation" TEXT NOT NULL,
    "dailySchedule" TEXT NOT NULL,
    "smokingHabits" TEXT NOT NULL,
    "drinkingHabits" TEXT NOT NULL,
    "dietaryPreferences" TEXT NOT NULL,
    "petPreferences" TEXT NOT NULL,
    "introvertExtrovert" TEXT NOT NULL,
    "socialHabits" TEXT NOT NULL,
    "hobbiesAndInterests" TEXT NOT NULL,
    "languagePreferences" TEXT NOT NULL,
    "preferredSecurityMeasures" TEXT NOT NULL,
    "isLookingFor" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "budgetPriceRange" DOUBLE PRECISION NOT NULL,
    "numberOfRoommates" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_googleId_key" ON "UserProfile"("googleId");
