import { prisma } from "../../src/connect/prisma";

interface ZiggotData {
  name: string;
}

const ziggotData: ZiggotData[] = [
  {
    name: "Ziggot"
  },
  {
    name: "Other Ziggot"
  },
  {
    name: "Another Ziggot"
  }
]

export async function seedZiggot() {
  console.log(`Start ziggot seeding ...`)
  
  for (const data of ziggotData) {
    const user = await prisma.ziggot.create({ data })
    console.log(`Created ziggot with id: ${user.id}`)
  }

  console.log(`Seeding ziggot finished.`)
}