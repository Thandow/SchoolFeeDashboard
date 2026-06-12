# 💳 School Fee Dashboard 

A modern, responsive **school finance dashboard** built with React to help school administrators track learner fee payments, outstanding balances, and overdue accounts in real time.

---

## Live Demo

https://school-fee-dashboard.vercel.app/

---

## Project Overview

This dashboard simulates a real-world **school finance management system** used by administrators to:

- Monitor total fees collected
- Track outstanding balances
- Identify overdue learners
- Search learners by name or grade
- Export filtered financial data to CSV

The goal of this project is to demonstrate **frontend engineering skills, UI design, and data handling in React**.

---

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- HTML5
- CSS3
- Git & GitHub
- Browser APIs (Blob for CSV export)

---

## Features

### Financial Summary Dashboard
- Total fees collected
- Total outstanding fees
- Number of overdue learners

### Smart Search & Filtering
- Filter learners by name
- Filter learners by grade
- Real-time table updates

### Status Indicators
- 🟢 Paid
- 🟠 Unpaid
- 🔴 Overdue

### CSV Export
- Export only visible filtered data
- Download `.csv` file instantly

### Responsive UI
- Clean dashboard layout
- Card-based summary section
- Simple, readable table design

---

## Project Structure
school-fee-dashboard/
│── public/
│── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│── package.json
│── README.md

---

## How to Run Locally

### 1. Clone the repository

`
git clone https://github.com/your-username/school-fee-dashboard.git

## Navigate into the project 
cd school-fee-dashboard

## Install Dependencies
npm install

## Start Development Server
npm run dev

## Open in Browser
http://localhost:5173

## Design Decisions
- Used React functional components for simplicity and scalability
- Managed UI state using useState
- Used array methods (filter, reduce) for financial calculations
- Implemented real-time filtering for better UX
- Used native Blob API for CSV export (no external libraries)
- Designed a clean dashboard layout inspired by fintech admin systems

## Possible improvements
- Add authentication (Admin login)
- Connect to a backend (Node.js / Firebase)
- Add charts (Revenue trends, monthly payments)
- Add pagination for large datasets
- Role-based access control (Teacher / Admin / Finance Officer)

## Author
- Built by Thando Mngomezulu
- AI Engineer | Frontend Developer | UI/UX Enthusiast | Aspiring Software Engineer

