# GoPal — Travel Buddy & Meetup Platform

A modern, responsive, and interactive frontend application for **Travel Buddy & Meetup Platform.** This application is designed to connect travelers, share travel plans, and find companions for upcoming trips. It offers a seamless user experience with features like finding travel partners, managing profiles, and premium subscriptions.

---

## Live Link

```
https://go-pal.vercel.app/
```

## Project Credentials

```
Admin Email: admin@gmail.com
Admin Password: Admin123@

Traveler Email: developermukit@gmail.com
Traveler Password: User123@
```

## Features

### General Features

- **Responsive Design:** Fully mobile-first and device-friendly layout using Tailwind CSS.
- **Secure Authentication:** JWT-based login, registration, and secure logout mechanisms.
- **Dynamic Dashboard:** Role-based dashboards (User & Admin) with real-time data visualization.
- **Interactive UI:** Smooth animations using Framer Motion and modern UI components.

### Traveler Features

- **Profile Management:** Users can update their bio, visited countries, interests, and profile photos.
- **Travel Plans (CRUD):** Create, edit, and delete travel itineraries (Destination, Budget, Date).
- **Find a Buddy:** Advanced search and filtering system to find travelers going to the same destination.
- **Request to Join:** Users can send requests to join someone else's trip.
- **Review System:** Rate and review travel companions after a trip.
- **Subscription & Payment:** Integration with Stripe/SSLCommerz for premium features and "Verified Badge".

### Admin Features

- **User Management:** View all users, manage roles, and block/unblock users.
- **Travel Plan Management:** Monitor and moderate travel plans created by users.
- **Activity Logs:** View platform analytics and user engagement summaries.

## Technologies Used

#### Frontend

- **Next.js**
- **TypeScript**
- **React**
- **Stripe**
- **Zod**

#### Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma** (ORM)
- **PostgreSQL**
- **Zod** (Validation)
- **JWT** (Authentication)
- **Bcrypt** (Security)
- **Multer** (File Upload)
- **Stripe** (Payment Gateway)

## Installation & Setup

#### Follow these steps to set up the project locally.

```
git clone https://github.com/MukitHossen7/GoPal-Client.git
```

```
cd GoPal-Client
```

```
npm install
```

```
npm run dev
```

```
Make sure you have a backend Url string set in your `.env` file:
```

```
backend-url=http://localhost:5000/api/v1
ACCESS_TOKEN_EXPIRATION = "1d"
JWT_SECRET="your_jwt_secret"
STRIPE_SECRET_KEY="your_stripe_secret_key"
```

## Project Structure

```json
neo-pay   /
├── public/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (commonLayout)/
│   │   ├── (dashboardLayout)/
│   │   ├── payment/
│   │   ├── api/
│   │   ├── error.tsx
│   │   ├── layout.tsx
│   │   └── loading.tsx
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   └── shared/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── types/
│   ├── utility/
│   └── zod/
├── .env
├── package.json
└── README.md
```

## Author

- Developed by **Mukit Hossen**
- **FullStack Developer**

## Dependencies

- "@dnd-kit/core": "^6.3.1",
- "@dnd-kit/modifiers": "^9.0.0",
- "@dnd-kit/sortable": "^10.0.0",
- "@dnd-kit/utilities": "^3.2.2",
- "@radix-ui/react-accordion": "^1.2.12",
- "@radix-ui/react-alert-dialog": "^1.1.15",
- "@radix-ui/react-avatar": "^1.1.11",
- "@radix-ui/react-checkbox": "^1.3.3",
- "@radix-ui/react-dialog": "^1.1.15",
- "@radix-ui/react-dropdown-menu": "^2.1.16",
- "@radix-ui/react-label": "^2.1.8",
- "@radix-ui/react-scroll-area": "^1.2.10",
- "@radix-ui/react-select": "^2.2.6",
- "@radix-ui/react-separator": "^1.1.8",
- "@radix-ui/react-slot": "^1.2.4",
- "@radix-ui/react-switch": "^1.2.6",
- "@radix-ui/react-tabs": "^1.1.13",
- "@radix-ui/react-toggle": "^1.1.10",
- "@radix-ui/react-toggle-group": "^1.1.11",
- "@radix-ui/react-tooltip": "^1.2.8",
- "@tabler/icons-react": "^3.35.0",
- "@tanstack/react-table": "^8.21.3",
- "@types/jsonwebtoken": "^9.0.10",
- "class-variance-authority": "^0.7.1",
- "clsx": "^2.1.1",
- "cookie": "^1.0.2",
- "date-fns": "^4.1.0",
- "framer-motion": "^12.23.25",
- "jsonwebtoken": "^9.0.2",
- "lucide-react": "^0.554.0",
- "motion": "^12.23.25",
- "next": "^16.0.7",
- "next-themes": "^0.4.6",
- "react": "19.2.0",
- "react-dom": "19.2.0",
- "react-hook-form": "^7.68.0",
- "recharts": "^2.15.4",
- "sonner": "^2.0.7",
- "stripe": "^20.0.0",
- "tailwind-merge": "^3.4.0",
- "vaul": "^1.1.2",
- "zod": "^4.1.13"

## DevDependencies

- "@tailwindcss/postcss": "^4",
- "@types/node": "^20",
- "@types/react": "^19",
- "@types/react-dom": "^19",
- "babel-plugin-react-compiler": "1.0.0",
- "baseline-browser-mapping": "^2.9.4",
- "eslint": "^9",
- "eslint-config-next": "^16.0.7",
- "tailwindcss": "^4",
- "tw-animate-css": "^1.4.0",
- "typescript": "^5"
