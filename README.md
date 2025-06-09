# Codex Products API

This project provides a simple example of a NestJS application exposing a CRUD for complex products. Each product contains nested details and supports an unlimited number of uploaded images using `multer` and persisted with Prisma.

## Development

Install dependencies (requires internet access):

```bash
npm install
```

Generate the Prisma client:

```bash
npx prisma generate
```

Copy `.env.example` to `.env` and adjust the connection string if needed. Prisma
will use this value to connect to MySQL.

Run the application in development mode:

```bash
npm run start:dev
```

Uploaded images are stored in the local `uploads/` directory.

The API will be available at `http://localhost:3000` and Swagger documentation at `http://localhost:3000/api`.

## Docker

You can run the API without installing Node.js locally. Build and start the
container stack with Docker Compose:

```bash
docker-compose up --build
```

The application will be exposed on port `3000` and a MySQL database will be
started alongside the API. Uploaded files are persisted in `uploads/` on the
host machine.
