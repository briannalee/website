# TherapyHub - Professional Psychotherapist Website

A modern, responsive, and feature-rich telehealth platform built with Vite and React. This website provides mental health services including therapy sessions, paid chat support, appointment booking, and an SEO-optimized blog.

## Features

### 1. **Home Page**
- Hero section with clear value proposition
- Features showcase (6 key benefits)
- Call-to-action section
- Responsive design for all devices

### 2. **Services & Pricing**
- Three service tiers:
  - **Therapy Sessions**: $120 per 50-minute session
  - **Chat Support**: $0.50 per message (instant messaging)
  - **Coaching Packages**: $200 for 4 sessions/month
- Detailed therapy types offered
- Insurance and payment options
- Pricing comparison cards

### 3. **SEO-Optimized Blog**
- 10 comprehensive blog posts on mental health topics
- Blog listing page with filters
- Individual blog detail pages with related posts
- SEO-rich content with relevant keywords and tags
- Read time estimates and author information

### 4. **Paid Chat Feature**
- Real-time chat interface with licensed therapist
- Credit-based system ($0.50 per message)
- Multiple payment packages
- HIPAA-compliant messaging

### 5. **Appointment Booking System**
- Easy 2-minute booking process
- Form validation
- Date and time selection
- Therapy type selection
- Appointment details sidebar

### 6. **Responsive Design**
- Mobile-first approach
- Tailwind CSS for modern styling
- Desktop, tablet, and mobile optimized

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Form Handling**: React Hook Form + Zod Validation
- **UI Icons**: Lucide React
- **Notifications**: React Hot Toast
- **HTTP Client**: Axios
- **Date Handling**: Date-fns

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173/`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer
├── pages/
│   ├── HomePage.tsx        # Landing page
│   ├── ServicesPage.tsx    # Services & pricing
│   ├── BlogListPage.tsx    # Blog listing
│   ├── BlogDetailPage.tsx  # Blog posts
│   ├── ChatPage.tsx        # Paid chat
│   └── AppointmentPage.tsx # Booking system
├── data/
│   └── blogData.ts         # Blog content
├── App.tsx                 # Main app with routing
└── index.css              # Tailwind CSS
```

## Key Features Explained

### Blog System
- 10 SEO-optimized posts covering mental health topics
- Keyword-packed content for better search rankings
- Related posts recommendations
- Tag system for categorization

### Chat System
- Credit-based payment ($0.50 per message)
- Simulated therapist responses
- Multiple payment packages
- Secure messaging interface

### Appointment Booking
- Multi-step form with validation
- Available time slots
- Therapy type selection
- Confirmation details

## Customization

### Update Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: "#6366f1",
      secondary: "#8b5cf6",
    }
  }
}
```

### Add Blog Posts
Edit `src/data/blogData.ts` and add new posts following the BlogPost interface.

### Change Pricing
Modify `src/pages/ServicesPage.tsx` for service tiers and pricing.

## Links

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Built with ❤️ for mental health professionals
