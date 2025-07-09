# 🏕️ Next.js Wild Haven Cabins

A modern full-stack cabin booking application built with **Next.js 15**, designed for a seamless and interactive experience. Users can browse available cabins, check availability, and book effortlessly — with secure authentication and Stripe payments.

## 🚀 Live Demo

🔗 [Live Site](https://nextjs-wild-haven-cabins.vercel.app)  


## 🧩 Features

- 🔐 User authentication (Email/Password + Google & Github OAuth)
- 📅 Calendar-based date selection
- 🏠 Cabin listings with availability
- 📊 Recharts-based analytics
- 💳 Stripe payment integration(fully integrated with webhook)
- 🔥 Toast notifications for user actions
- 🎨 Responsive design with Tailwind CSS
- 🌍 Supabase backend integration
- 🧠 Global state management using Zustand
- 🧑‍💼 **Admin Panel** for managing bookings, check-ins, check-outs, and more

---

## 🛠️ Tech Stack

### Frontend:
- **Next.js 15 (App Router)**
- **React 19**
- **Tailwind CSS**
- **React Day Picker** – Date range picker

### Backend & State:
- **Supabase** – Auth + Database
- **Zustand** – Lightweight state management
- **Next.js API Routes & Actions** – Server logic

### Auth & Payments:
- **Supabase Auth (Credentials + oAuth(Google & Github))**
- **Stripe** – Secure payment processing

### Tools & Utilities:
- **Axios** – For API requests
- **Date-fns** – Date formatting
- **React Hook Form** – Form handling
- **React Icons** – Icon support
- **React Hot Toast** – Toast notifications
- **Recharts** – Dashboard visualizations
- **Tailwind Scrollbar** – Custom scrollbars

---

## 📂 Project Structure

```bash
project/
  ├── middleware.js          # Middleware for route protection (auth guard)

  app/
    ├── api/                 # API endpoints (checkout, paymentInfo, webhook etc.)
    ├── _actions/            # Next.js Server Actions (admin, cabin, bookings etc.)
    ├── _context/            # React Contexts (Toast context)
    ├── _components/         # Reusable UI components (buttons, input, header, sidebar etc.)
    ├── _hooks/              # Custom hooks (useSession, useDataRange etc.)
    ├── _libs/               # Core libraries (middleware, adminClient, getChartData etc.)
    ├── account/             # User account info and settings
    ├── login/               # Login page
    ├── contactUs/           # Contact Us page
    ├── about/               # About page
    ├── cabins/              # Cabins listing route          
    │   └── [cabinId]/       # Dynamic cabin page
    ├── adminPanel/          
    │   └── dashboard/       # Admin panel dashboard
    │   └── bookings/        # All new bookings
    │   └── searchBooking/   # Search booking
    │   ||                   # More routes
    ├── layout.js            # Root layout for the app
    ├── globals.css          # Global Tailwind styles
    ├── page.js              # App Homepage
    └── not-found.js         # Custom 404 error page
```

---


