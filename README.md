# Getting Started

This project is a starting point for a ExpressJS, TypeScript, MySQL, Prisma application.

## Stack

- [ExpressJS](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [Prisma](https://www.prisma.io/)

## Quick Start

1. Clone the repository

```bash
git clone <repository_url>
```

2. Go to the project directory

```bash
cd <folder_name>
```

3. Install dependencies

```bash
npm install
```

4. Migrate the database

```bash
npx prisma migrate dev --name init
```

5. Seed the database

```bash
npx prisma db seed
```

6. Start the server

```bash
npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - Port number for the server to run on

`DATABASE_URL` - URL for the database

## Migrations

To run migrations, run the following command

```bash
npx prisma migrate dev --name init
```

## Seeding

Seed data is located in `prisma/seeders`. To control which seeders are run, edit the `index.ts` file by adding or removing the seeders function.


To seed the database, run the following command:

```bash
npx prisma db seed
```

## Authors

- [@mars-area](https://www.github.com/mars-area)

## Contributing

If there is a suggestions for how this app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.