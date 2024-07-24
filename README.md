# Eisen File Uploader

## Instructions

### Prerequisites

1. Install [Node.js](https://nodejs.org/en/download/package-manager)
2. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
3. Install [Postgres](https://www.postgresql.org/download/)

### Installation

1. Clone repo

```
git clone https://github.com/davidlam296/eisen-file-uploader.git
```

2. Go to directory and install dependencies

```
npm install
cd /client
npm install
cd ..
```

3. Set up local Postgres database

```
CREATE DATABASE name_of_database
```

4. Set up environment variables: use .env-example for guidance

```
cp .env-example .env
cd /client
cp .env-example .env
cd ..
```

5. Set up database

```
npm run db:reset
```

6. Run local/development services in terminal instances

```
npm run dev:server
npm run dev:client
```
