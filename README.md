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

# 🧪 Getting Started

Follow these steps to set up the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/aman8990/nextjs-wild-haven-cabins.git
cd nextjs-wild-haven-cabins
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Set Up Environment Variables

```bash
PROJECT_URL=your_project_url

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE=your_supabase_service_role_key

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_key

```

## 5. Start Development Server

```bash
npm run dev
```

---

## 📬 Contact

Created by [Aman Kumar](https://github.com/aman8990)  
📧 Email: [amandalal899@gmail.com](mailto:amandalal899@gmail.com)


