// script.js

const projects = [
  { name: "Project A", status: "In Progress" },
  { name: "Project B", status: "Completed" },
];

window.onload = () => {
  const projectsContainer = document.getElementById("projects-list");
  projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
      <h3>${project.name}</h3>
      <p>Status: ${project.status}</p>
    `;
    projectsContainer.appendChild(projectDiv);
  });
};
