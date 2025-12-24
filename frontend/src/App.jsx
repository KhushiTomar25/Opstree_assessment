import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState([]);

  const [role, setRole] = useState("");
  const [technology, setTechnology] = useState("");
  const [yoe, setYoe] = useState("");

  const fetchQuestions = async () => {
    let url = "http://localhost:5000/questions?";

    if (role) url += `role=${role}&`;
    if (technology) url += `technology=${technology}&`;
    if (yoe) url += `yoe=${yoe}&`;

    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data);
  };

  const uploadCSV = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    alert("CSV uploaded successfully");
    fetchQuestions();
  };

  useEffect(() => {
  fetchQuestions();
}, [role, technology, yoe]);


  return (
  <div className="page">
    {/* HEADER */}
    <header className="header">
      <div className="header-left">
        <div className="logo">📘</div>
        <div>
          <h1>Smart Question Bank</h1>
          <p>Centralized interview questions</p>
        </div>
      </div>

      <label className="primary-btn">
        Upload CSV
        <input
          type="file"
          hidden
          onChange={(e) => {
            setFile(e.target.files[0]);
            setTimeout(uploadCSV, 100);
          }}
        />
      </label>
    </header>

    {/* MAIN CONTENT */}
    <main className="main">
      {/* SEARCH BAR */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by role, technology, or experience..."
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        />
      </div>

      {/* HINT */}
      <div className="hint">
        ✨ Try: <i>“Kubernetes questions for 5-8 years experience”</i>
      </div>

      {/* FILTERS */}
      <div className="filters">
        <input
          placeholder="Role (DevOps)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          placeholder="Technology (Kubernetes)"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        />
        <input
          placeholder="YOE (5-8)"
          value={yoe}
          onChange={(e) => setYoe(e.target.value)}
        />
      </div>

      {/* QUESTIONS */}
      <div className="questions">
        {questions.length === 0 ? (
          <p className="empty">No questions found</p>
        ) : (
          questions.map((q, index) => (
            <div key={index} className="question-card">
              <h3>{q.question}</h3>
              <div className="meta">
                <span>{q.role}</span>
                <span>{q.technology}</span>
                <span>{q.yoe} yrs</span>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  </div>
);

  
}

export default App;
