# Opstree_assessment
# 📘 Smart Question Bank

A full‑stack web application designed to centralize interview questions and make them easily searchable based on **Role**, **Technology**, and **Years of Experience (YOE)**.

This project was built as part of a technical assessment to demonstrate backend API design, frontend integration, and clean UI development. The entire application runs locally and follows a simple, extensible architecture.

---

## 🎯 Problem Statement

Interview questions are often scattered across documents and spreadsheets, making them difficult to manage and search. The goal of this project is to:

* Allow HR teams to upload interview questions in bulk using a CSV file
* Enable users to quickly search and filter questions based on relevant criteria
* Provide a clean, intuitive interface for viewing questions

---

## 🚀 Features

* CSV upload for bulk question ingestion
* Flexible search using:

  * Role (e.g., DevOps, Frontend)
  * Technology (e.g., Kubernetes, React)
  * Years of Experience (YOE)
* Partial search supported (any one or more filters can be used)
* Responsive, centered UI with a clean layout
* REST‑based backend with clear API contracts

---

## 🛠️ Tech Stack

### Frontend

* **React (Vite)** – for fast development and component‑based UI
* **JavaScript** – application logic
* **Custom CSS** – styling without external UI libraries
* **Fetch API** – communication with backend APIs

### Backend

* **Node.js** – runtime environment
* **Express.js** – REST API framework
* **Multer** – handling CSV file uploads
* **csv-parser** – parsing CSV data into JavaScript objects

---

## 📂 Project Structure

```
Opstree_assessment/
│
├── backend/
│   ├── server.js        # Express server and API logic
│   ├── package.json
│   └── uploads/         # Temporary CSV uploads
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx      # Main React component
│   │   ├── App.css      # Application styling
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Run Backend

```bash
cd backend
npm install
node server.js
```

The backend server will start on:
👉 `http://localhost:5000`

---

### 2️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend application will be available at:
👉 `http://localhost:5173`

---

## 📄 CSV File Format

The application expects the CSV file to follow this structure:

```csv
question,role,technology,yoe
What is Kubernetes?,DevOps,Kubernetes,5-8
Explain Docker containers,DevOps,Docker,3-5
What is React?,Frontend,React,0-2
Explain REST API,Backend,Node.js,1-3
```

Each row represents a single interview question along with its metadata.

---

## 🔗 API Endpoints

### Upload CSV

```
POST /upload
```

* Accepts a CSV file
* Parses the file and stores questions in memory

### Fetch Questions

```
GET /questions?role=&technology=&yoe=
```

* All query parameters are optional
* Supports partial and case‑insensitive filtering

---

## 🧠 Data Storage Approach

* The application stores questions **in memory** using a JavaScript array.
* This keeps the system lightweight and aligned with the scope of the assessment.
* Restarting the backend clears the stored data.

In a real‑world scenario, this layer can be easily replaced with a database such as MongoDB or PostgreSQL.

---

## 🧪 API Testing

* APIs were tested using the browser and the Network tab in DevTools
* Verified successful CSV uploads and filtered responses from `/questions`

---

## 📌 Future Improvements

* Add persistent storage using a database
* Implement authentication and role‑based access
* Add pagination and advanced search
* Improve natural‑language search capabilities

---

## 👤 Author

**Khushi Tomar**
