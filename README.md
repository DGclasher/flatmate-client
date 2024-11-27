# Flatmate

## Setup
```
npm install

docker compose --file ./postgres.yml up -d

npx prisma generate
npx prisma migrate dev
```