# Bihar Darshan — Bihar Tourism Portal

A full-stack tourism web application for exploring Bihar's rich cultural heritage, ancient history, and natural beauty. Built as a portfolio project to learn Angular with a Spring Boot backend.

---

## Screenshots

> Home Page · Places Grid · Place Detail · Visit Report · Login/Register · Favorites

---

## Features

### Frontend (Angular 17)
- **Home page** — hero banner, featured places, category quick-links
- **Places browser** — search by keyword, filter by category (Historical / Religious / Nature / Wildlife / Adventure)
- **Place detail** — hero image, history, timings, entry fee, nearby attractions, star reviews
- **Visit Report Generator** — multi-image upload (max 5), PDF export, email submission to tourism commissioner
- **JWT Authentication** — Register & Login pages, token stored in localStorage
- **Favorites** — heart icon on every place card, dedicated Favorites page (protected route)
- **User reviews** — rate and comment on any place (requires login)
- **Responsive design** — Bootstrap 5, Playfair Display + Inter fonts, premium navy + gold theme

### Backend (Spring Boot 3.2.5)
- **REST API** on `http://localhost:8090/api`
- **JWT Authentication** — stateless, BCrypt password hashing
- **MySQL persistence** — auto-creates database `bihar_darshan_db` on first run
- **Data seeding** — 12 Bihar tourist places auto-inserted on startup
- **CORS** configured for `localhost:4200` and GitHub Pages

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 17, TypeScript, Bootstrap 5, Bootstrap Icons |
| PDF Export | jsPDF + html2canvas |
| Backend | Spring Boot 3.2.5, Spring Security, Spring Data JPA |
| Auth | JWT (JJWT 0.12.5), BCrypt |
| Database | MySQL 8 |
| Build tools | Angular CLI 19, Apache Maven 3.9 |

---

## Project Structure

```
bihar-darshan/
├── bihar-darshan/              # Angular frontend
│   └── src/app/
│       ├── features/
│       │   ├── home/           # Landing page
│       │   ├── places/         # Places list with search & filter
│       │   ├── place-detail/   # Single place with reviews
│       │   ├── favorites/      # User's saved places (auth-guarded)
│       │   ├── report/         # Visit report generator + PDF export
│       │   ├── about/          # About Bihar page
│       │   ├── contact/        # Contact form
│       │   └── auth/
│       │       ├── login/
│       │       └── register/
│       ├── shared/components/
│       │   ├── header/         # Navbar with auth state
│       │   ├── footer/
│       │   ├── place-card/     # Reusable card with favorite toggle
│       │   ├── search-bar/
│       │   └── category-filter/
│       ├── services/
│       │   ├── auth.service.ts
│       │   ├── place.service.ts
│       │   └── favorite.service.ts
│       ├── interceptors/
│       │   └── auth.interceptor.ts   # Attaches JWT to every request
│       └── guards/
│           └── auth.guard.ts         # Protects /favorites route
│
└── bihar-darshan-api/          # Spring Boot backend
    └── src/main/java/com/bihardarshan/api/
        ├── controller/         # REST controllers
        ├── service/            # Business logic
        ├── entity/             # JPA entities (User, Place, Favorite, Review)
        ├── repository/         # Spring Data repositories
        ├── dto/                # Request/response records
        ├── security/           # JwtUtil, JwtAuthenticationFilter
        ├── config/             # SecurityConfig (CORS, permit rules)
        └── seed/               # DataSeeder — populates 12 places on startup
```

---

## Prerequisites

- **Node.js** 18+ and npm
- **Java** 17+
- **MySQL** 8 running locally
- **Apache Maven** 3.9+ (or use `C:\tools\maven\bin\mvn.cmd` if installed locally)
- **Angular CLI** — `npm install -g @angular/cli`

---

## Getting Started

### 1. Database setup

MySQL database is created automatically on first run via `createDatabaseIfNotExist=true`.

If you want to create it manually:
```sql
CREATE DATABASE bihar_darshan_db;
```

### 2. Configure database credentials

Edit `bihar-darshan-api/src/main/resources/application.properties`:
```properties
spring.datasource.username=root
spring.datasource.password=your_password
server.port=8090
```

### 3. Start the Spring Boot API

```bash
cd bihar-darshan-api
mvn spring-boot:run
```

The API starts on `http://localhost:8090`. On first startup, `DataSeeder` automatically inserts all 12 tourist places. You should see:

```
DataSeeder: 12 places inserted successfully
Started BiharDarshanApplication in X seconds
```

### 4. Start the Angular frontend

```bash
cd bihar-darshan
npm install
npx ng serve
```

Open `http://localhost:4200` in your browser.

---

## API Reference

### Auth (public)
| Method | Endpoint | Body |
|--------|----------|------|
| `POST` | `/api/auth/register` | `{ username, email, password }` |
| `POST` | `/api/auth/login` | `{ email, password }` |

Both return `{ token, username, email }`.

### Places (public)
| Method | Endpoint | Params |
|--------|----------|--------|
| `GET` | `/api/places` | `?category=Historical` · `?search=nalanda` |
| `GET` | `/api/places/{id}` | — |
| `GET` | `/api/places/{id}/reviews` | — |

### Reviews (requires JWT)
| Method | Endpoint | Body |
|--------|----------|------|
| `POST` | `/api/places/{id}/reviews` | `{ rating (1-5), comment }` |

### Favorites (requires JWT)
| Method | Endpoint |
|--------|----------|
| `GET` | `/api/favorites` |
| `POST` | `/api/favorites/{placeId}` |
| `DELETE` | `/api/favorites/{placeId}` |
| `GET` | `/api/favorites/{placeId}/check` |

All protected endpoints require the header:
```
Authorization: Bearer <token>
```

---

## Tourist Places Included

| # | Place | District | Category |
|---|-------|----------|----------|
| 1 | Mahabodhi Temple | Gaya | Religious |
| 2 | Vishnupad Temple | Gaya | Religious |
| 3 | Nalanda Mahavihara | Nalanda | Historical |
| 4 | Vaishali | Vaishali | Historical |
| 5 | Rajgir | Nalanda | Religious |
| 6 | Kakolat Falls | Nawada | Nature |
| 7 | Rajgir Nature Safari | Nalanda | Wildlife |
| 8 | Valmiki Tiger Reserve | West Champaran | Wildlife |
| 9 | Vikramshila | Bhagalpur | Historical |
| 10 | Patna Sahib Gurudwara | Patna | Religious |
| 11 | Rohtasgarh Fort | Rohtas | Historical |
| 12 | Sher Shah Suri Tomb | Rohtas | Historical |

---

## Visit Report Feature

Users can generate an official-looking tourism visit report:
1. Fill personal details (Name, Aadhaar, Phone, Email, Address)
2. Select visited place and date
3. Upload up to 5 photos (selfies or place photos)
4. Preview the formatted report document
5. Download as PDF or submit by email to `tourism.commissioner@bihar.gov.in`

Report IDs follow the format `BDR-XXXXXXXX` for tracking.

---

## Design System

| Token | Value |
|-------|-------|
| Primary | `#1C3557` (navy) |
| Accent | `#C8922A` (gold) |
| Heading font | Playfair Display |
| Body font | Inter |

---

## Author

**Shailendra Vishwakarma** — Java backend developer learning Angular & full-stack development.

GitHub: [Shailendra-Vishwakarma](https://github.com/Shailendra-Vishwakarma)
