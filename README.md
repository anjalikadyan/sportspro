# SportsPro — Sports Management System

Full-stack app for tournaments, teams, matches, and player stats. Roles: Super Admin, Coach, Player.

## Local setup (MongoDB Compass)

### 1. Start MongoDB and open Compass

Connect Compass to:

```
mongodb://127.0.0.1:27017
```

If Compass cannot connect, start **MongoDB Community** (Windows service `MongoDB`) first.

### 2. Create database `sportspro`

In Compass: **Create Database**

- Database name: `sportspro`
- Collection name: `_init` (optional; you can delete it later)

You can skip this step. The API creates `sportspro` on first connect.

### 3. Backend

```bash
cd backend
copy .env.example .env
npm install
npm run seed:admin
npm run dev
```

API: http://localhost:3001  
Health: http://localhost:3001/api/health

Default admin (change after login):

- Email: `admin@sportspro.com`
- Password: `Admin1234`

Refresh Compass → `sportspro` → `users`.

### 4. Frontend

```bash
cd frontend
copy .env.example .env
npm install
npm run dev
```

App: http://localhost:5173

Register as **Coach** or **Player**. Super admin is seed-only.

## Environment

| Variable | Where | Purpose |
|---|---|---|
| `MONGODB_URI` | backend | Default `mongodb://127.0.0.1:27017/sportspro` |
| `PORT` | backend | API port, **3001** |
| `JWT_SECRET` | backend | Required in production |
| `VITE_API_URL` | frontend | Must match backend, `http://localhost:3001` |

Do not commit `.env` files.

## Stack

- Frontend: React + Vite + Tailwind
- Backend: Express + JWT
- Database: MongoDB (Compass locally, or Atlas in production)

## Production

See `DEPLOYMENT_GUIDE.md`. Use a new Atlas database and new credentials — never reuse sample URIs from old docs.

## Demo dataset (local development)

The optional demo seed creates reproducible showcase records for coaches, players, teams, tournaments, matches, and completed-match player statistics. It uses the existing Mongoose models and the `User` model's password pre-save hook.

```bash
cd backend
npm install
npm run seed:admin
npm run seed:data
```

Demo coach and player accounts use the password **`Demo@1234`**. Examples:

- Coach: `coach01@demo.sportspro.com`
- Coach: `coach02@demo.sportspro.com`
- Coach: `coach03@demo.sportspro.com`
- Player: `player001@demo.sportspro.com`
- Player: `player002@demo.sportspro.com`
- Player: `player003@demo.sportspro.com`

The super-admin is **not** duplicated by the demo seed. Create it first with `npm run seed:admin`; its default credentials remain `admin@sportspro.com` / `Admin1234` unless `ADMIN_EMAIL` and `ADMIN_PASSWORD` are configured. Change all demo credentials before using a publicly accessible environment.

To remove only demo data and then recreate it:

```bash
npm run seed:data -- --reset
npm run seed:data
```

The reset identifies demo users by the `@demo.sportspro.com` email domain and demo teams/tournaments by the `Demo ` prefix. It preserves the existing super-admin and ordinary users. Seeded data is intended for development/demo use, not production.

## Recent UX and API improvements

- Shared Tailwind design tokens for semantic colors, typography, radius, and shadows.
- Persistent light/dark mode control in the landing-page header.
- Responsive mobile navigation and improved keyboard focus visibility.
- Reduced-motion CSS support and a React error boundary fallback.
- User and team listing APIs support search, filters, bounded pagination, and stable page metadata.
- `GET /api/matches` provides a paginated match directory with text search, sport/status/tournament filters, and date bounds.
- Additional query indexes support team, match-date, and player-stat lookups.
