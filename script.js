"use strict";
var worksContainer;
var appContainer;
var loader;
var projectsLoaded;

document.addEventListener("DOMContentLoaded", function(event) {
  worksContainer = document.getElementById('works');
  appContainer = document.getElementById('app');
  loader = document.getElementById('loader');
  projectsLoaded = false;
  AOS.init();
  appendProjects();
  loader.style.display = 'none';
  appContainer.style.display = 'block';
});

function appendProjects() {
  for (let i = 0; i < projects.length; i++) {
    worksContainer.appendChild(buildProject(projects[i]));
  }
}

function buildProject(project) {
  let template = document.createElement("div");
  template.innerHTML = `
    <div class="project-box">
      <a alt="${project.name}" target="_blank" href="${project.name === 'Sideline Fantasy Sports' ? 'https://playsideline.com' : project.link}" class="project-img ${project.image === 'meteor.gif' ? 'meteor' : ''} ${project.image === 'sideline.png' ? 'sideline' : ''}" data-aos="fade-right" style="background-image: url('/img/${project.image}')">
      </a>
      <!-- meteor project is a gif so it gets its own styles -->
      <!-- sideline gets scooted over on mobile -->
      <div class="project-desc" data-aos="fade-left" data-aos-delay="100">
        <h4>${project.name}</h4>
        <p class="desc-text">${project.description}</p>
        ${_awardsTemplate()}
        <div class="button-row">
        ${_badgeTemplate()}
        ${_linkTemplate()}
        </div>
      </div>
    </div>
  `;

  return template;

  function _badgeTemplate() {
    if (!project.badges) return '';
    let template = '';
    for (let i = 0; i < project.badges.length; i++) {
      let badge = project.badges[i];
      template += `
      <a class="app-link" target="_blank" href="${badge.link}" alt="${badge.alt}">
      <img src="/img/${badge.image}" alt="${badge.alt}">
      </a>
      `;
    }
    return template;
  }

  function _linkTemplate() {
    let template = '';
    if (project.link) {
      template += `
      <a href="${project.link}" alt="Project" target="_blank"><button class="project-button">VISIT PROJECT</button></a>
      `;
    }
    if (project.repo) {
      template += `
      <a href="${project.repo}" alt="GitHub" target="_blank"><button class="project-button">GITHUB REPO</button></a>
      `;
    }
    if (project.docs) {
      template += `
      <a href="${project.docs}" alt="API docs" target="_blank"><button class="project-button">VISIT API DOCS</button></a>
      `;
    }
    return template;
  }

  function _awardsTemplate() {
    if (!project.awards) return '';
    let template = '';
    template = `
    <p class="awards-title">Awards</p>
    <ul v-if="project.awards" class="awards-list">
    `;
    for (let i = 0; i < project.awards.length; i++) {
      template += `<li>${project.awards[i]}</li>`;
    }
    template += '</ul>';
    return template;
  }
}