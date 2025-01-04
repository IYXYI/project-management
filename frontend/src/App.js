import React, { useState, useEffect } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace this with your backend URL later
    setProjects([{ id: 1, name: "Project Alpha" }, { id: 2, name: "Project Beta" }]);
  }, []);

  return (
    <div>
      <h1>Project Management Dashboard</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
