# Technical Documentation

## 1. Project Overview

**Smart Question Bank** is a full-stack web application built to centralize interview questions and make them easily searchable. The application allows bulk upload of interview questions using a CSV file and enables users to filter questions based on **Role**, **Technology**, and **Years of Experience (YOE)**.

The project was developed as part of a technical assessment and focuses on clean backend API design, frontend–backend integration, and a simple yet polished user interface.

---

## 2. Problem Statement

In many organizations, interview questions are stored across multiple documents or spreadsheets. This makes searching, organizing, and maintaining questions inefficient.

The goal of this project is to:

* Provide a centralized system for managing interview questions
* Allow structured and flexible searching
* Support bulk ingestion of questions using CSV files

---

## 3. Tech Stack

### Frontend

* **React (Vite)** – Component-based UI and fast development environment
* **JavaScript** – Application logic
* **Custom CSS** – Styling and responsive layout
* **Fetch API** – Communication with backend services

### Backend

* **Node.js** – JavaScript runtime environment
* **Express.js** – REST API framework
* **Multer** – Middleware for handling CSV file uploads
* **csv-parser** – Library to parse CSV files into JavaScript objects

---

## 4. System Architecture

```
Frontend (React)
    |
    |  HTTP Requests (Fetch API)
    |
Backend (Express APIs)
    |
    |  In-memory Data Storage
```

* Frontend runs on **[http://localhost:5173](http://localhost:5173)**
* Backend runs on **[http://localhost:5000](http://localhost:5000)**
* Communication happens via REST APIs

---

## 5. Backend Design

### 5.1 API Endpoints

#### Upload CSV

```
POST /upload
```

**Purpose:**

* Accepts a CSV file
* Parses the content
* Stores questions in memory

**Implementation Details:**

* `multer` handles file upload
* `csv-parser` converts each CSV row into a JavaScript object
* Parsed questions are stored in an in-memory array

---

#### Fetch Questions

```
GET /questions?role=&technology=&yoe=
```

**Purpose:**

* Retrieves interview questions
* Applies filters dynamically based on query parameters

**Key Behavior:**

* All query parameters are optional
* Partial filtering is supported (any one or more filters)
* If no filters are provided, all questions are returned

---

## 6. Frontend Design

### Key Features

* CSV upload button connected to backend upload API
* Search inputs for role, technology, and YOE
* Clean, centered layout with card-based question display
* Automatic refresh of questions after successful upload

### User Flow

1. User uploads a CSV file
2. Backend parses and stores the questions
3. User searches using one or more filters
4. Filtered results are displayed as cards

---

## 7. Data Storage Strategy

* Data is stored **in memory** using a JavaScript array on the backend
* Restarting the backend clears all stored questions

**Reasoning:**

* Persistence was not required by the problem statement
* Keeps the application lightweight and simple
* Can be easily replaced with a database in future

---

## 8. API Testing

APIs were tested using:

* Browser
* Network tab in browser DevTools

Test cases included:

* Successful CSV upload
* Correct CSV parsing
* Accurate filtering based on different query combinations

---

## 9. Running the Project Locally

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 10. Challenges Faced

* Handling CSV file uploads from the frontend
* Managing React state during file upload
* UI alignment and responsive layout issues
* Synchronizing frontend and backend during development

All challenges were resolved through iterative debugging and refactoring.

---

## 11. Future Enhancements

* Add persistent storage using a database (MongoDB / PostgreSQL)
* Implement authentication and role-based access
* Add pagination for large datasets
* Improve search using natural language processing

---

## 12. Conclusion

This project demonstrates full-stack development capabilities including backend API design, frontend development, and clean system architecture. The application is easy to understand, extend, and scale, making it suitable as a foundation for a real-world interview question management system.

---

**Author:** Khushi Tomar
