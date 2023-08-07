const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    const ret = await db.category.createMany({
      data: [
        { name: "Famous People" },
        { name: "Movies & TV" },
        { name: "Musicians" },
        { name: "Games" },
        { name: "Animals" },
        { name: "Philosophy" },
        { name: "Scientists" },
      ],
    });
    console.log("🚀 ~ file: seed.ts:18 ~ main ~ ret:", ret)
  } catch (error) {
    console.error("Error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main()