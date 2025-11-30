# Dragon News

Dragon News is a responsive news web application built with **React**, **Tailwind CSS**, and **Firebase Authentication**, featuring dynamic news fetching, detailed article pages, and user authentication with Google, GitHub, and email/password login.

---

## 🛠 Technologies Used

- **Frontend:** React.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)  
- **Routing & State Management:** React Router, React Context API  
- **Authentication & Backend:** Firebase Authentication (Email/Password, Google, GitHub)  
- **UI Components & Notifications:** Reusable components, Toast notifications  
- **Version Control:** Git & GitHub  

---

## ⚡ Features

- Responsive UI for **desktop and mobile** using Tailwind CSS.  
- **User authentication** with email/password, Google, and GitHub.  
- **Password reset** and profile update functionality.  
- **Private Routes** for protected pages.  
- Dynamic **news cards** displaying author info, ratings, view counts, and "Read More" links.  
- Reusable components for maintainable and scalable frontend.  
- **Toast notifications** for real-time feedback.  
- Smooth routing and navigation using **React Router**.  

---

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd dragon-news
npm install
npm run dev

src/
├─ components/     # Reusable UI components
├─ pages/          # Login, Register, News Details, Home
├─ provider/       # AuthContext, ToastProvider
├─ Router/         # React Router configuration
├─ App.jsx
├─ main.jsx
└─ index.css


💡 Future Improvements

Add news category filters and search functionality.

Integrate backend API for storing user preferences.

Add pagination and lazy loading for performance.


📄 License

This project is licensed under the MIT License.