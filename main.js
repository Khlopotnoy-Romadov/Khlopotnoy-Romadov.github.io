const DATA = {
    // Основная информация
    personal: {
        fullName: "Дмитрий Хлопотной-Ромадов",
        grade: "Full-stack разработчик",
        avatarInitials: "",
        experience: 1.5, // Лет опыта
        contacts: [
            { label: "GitHub", url: "https://github.com/Khlopotnoy-Romadov" },
            { label: "Telegram", url: "https://t.me/rengokuAdmin" },
            { label: "Резюме на HH", url: "https://spb.hh.ru/resume/48ba15e4ff0c27a9c30039ed1f46746162306e" }
        ]
    },

    // О себе 
    about: `
            <p class="mb-3"><span class="text-[var(--fg)]">$</span> <span class="text-[var(--accent)]">run</span> biography.exe</p>
            <p class="mb-4">Это мой личный сайт-визитка и здесь вы можете ознакомиться с моими навыками и портфолио.</p>
        `,

    // Навыки 
    skills: [
        { name: "JavaScript", status: "Frontend" },
        { name: "TypeScript", status: "Frontend" },
        { name: "Vue.js", status: "Frontend" },
        { name: "CI/CD", status: "Core" },
        { name: "PostgreSQL", status: "Core" },
        { name: "Docker", status: "Core" },
        { name: "Python", status: "Core" },
        { name: "Git", status: "Core" },
        { name: "Vite/Webpack", status: "Core" },
        { name: "PHP", status: "Backend" },
        { name: "Laravel", status: "Backend" }

    ],

    // Пет-проекты
    projects: [
        {
            id: "watch_app",
            title: "Мой кинотрекер",
            shortDesc: "Приложение, дающее возможность сохранять просмотренные фильмы/сериалы.",
            tags: ["Vue.js", "Vuetify", "Laravel", "PHP"],
            github: "https://github.com/Khlopotnoy-Romadov/watching_app",
            fullDesc: `
                    <p>С помощью приложения пользователь может создать архив просмотра.</p>
                    <h4 class="font-bold mt-4 mb-2 text-[var(--fg)]">Возможности:</h4>
                    <ul class="list-disc list-inside space-y-1 text-[var(--fg-muted)]">
                        <li>Создание, редактирование и удаление для тайтлов</li>
                        <li>Отмечать статус: просмотрено, прошено, смотрю</li>
                        <li>Выставлять количество просмотренных эпизодов</li>
                    </ul>
                `,
            images: [
                { url: "archive_screens/image.png", caption: "Главный интерфейс" },
                { url: "archive_screens/image2.png", caption: "Сортировка по жанру" }
            ],
            techStack: ["Vue.js", "Vuetify", "Laravel", "PHP"]
        },
        // {
        //     id: "weather-widget",
        //     title: "Weather Dashboard",
        //     shortDesc: "Виджет погоды с красивыми визуализациями данных",
        //     tags: ["React", "API", "CSS"],
        //     github: "https://github.com/username/weather-dashboard",
        //     fullDesc: `
        //             <p>Интерактивный погодный дашборд с визуализацией данных и прогнозами.</p>
        //             <h4 class="font-bold mt-4 mb-2 text-[var(--fg)]">Особенности:</h4>
        //             <ul class="list-disc list-inside space-y-1 text-[var(--fg-muted)]">
        //                 <li>Автоматическое определение геолокации</li>
        //                 <li>Недельный прогноз</li>
        //                 <li>Адаптивный интерфейс</li>
        //             </ul>
        //         `,
        //     images: [
        //         { url: "https://placehold.co/800x400/1e293b/94a3b8?text=Weather+UI", caption: "Главный экран" }
        //     ],
        //     techStack: ["React", "OpenWeather API", "Recharts"]
        // },

    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme(); // Инициализация темы при загрузке
    renderPersonalInfo();
    renderAbout();
    renderSkills();
    renderProjects();
    updateStats();
    initRevealAnimations();
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.removeAttribute('data-theme');
        updateThemeIcon(false);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateThemeIcon(false);
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon(true);
    }
}

function updateThemeIcon(isDark) {
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');

    if (isDark) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

function renderPersonalInfo() {
    const { personal } = DATA;

    document.getElementById('full-name').textContent = personal.fullName;
    document.getElementById('grade').textContent = personal.grade;
    document.getElementById('avatar-initials').textContent = personal.avatarInitials;

    const contactsContainer = document.getElementById('contact-links');
    contactsContainer.innerHTML = personal.contacts.map(contact => `
            <a href="${contact.url}" target="_blank" rel="noopener noreferrer" 
               class="tag hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors">
                ${contact.label}
            </a>
        `).join('');
}

function renderAbout() {
    document.getElementById('about-text').innerHTML = DATA.about;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = DATA.skills.map((skill, index) => `
            <div class="skill-widget">
                <div class="skill-icon">
                    ${skill.name.charAt(0)}
                </div>
                <div class="flex-1">
                    <h4 class="font-bold text-sm text-[var(--fg)]">${skill.name}</h4>
                    <p class="text-xs text-[var(--fg-muted)] font-mono uppercase">${skill.status}</p>
                </div>
            </div>
        `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-list');
    document.getElementById('projects-count').textContent = `${DATA.projects.length} entries`;

    container.innerHTML = DATA.projects.map(project => `
            <article class="project-card p-6" onclick="showProjectDetail('${project.id}')">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="flex-1">
                        <h3 class="font-bold text-lg mb-2 text-[var(--fg)]">${project.title}</h3>
                        <p class="text-[var(--fg-muted)] text-sm mb-3">${project.shortDesc}</p>
                        <div class="flex flex-wrap gap-2">
                            ${project.tags.map(tag => `<span class="tag text-xs">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                           class="btn-secondary text-sm py-2 px-4"
                           onclick="event.stopPropagation()">
                            GitHub
                        </a>
                        <button class="btn-primary text-sm py-2 px-4">
                            Details
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
}

function showProjectDetail(projectId) {
    const project = DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const container = document.getElementById('project-detail-content');
    container.innerHTML = `
            <div class="card p-6 mb-6">
                <div class="terminal-header mb-4">
                    <div class="terminal-dot bg-red-300"></div>
                    <div class="terminal-dot bg-yellow-300"></div>
                    <div class="terminal-dot bg-green-300"></div>
                    <span class="font-mono text-xs text-[var(--fg-muted)] ml-2">${project.id}.log</span>
                </div>
                <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="prose prose-sm max-w-none text-[var(--fg-muted)]">
                    ${project.fullDesc}
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="font-bold mb-4 text-sm uppercase tracking-wider text-[var(--fg-muted)]">Технологии</h3>
                <div class="flex flex-wrap gap-2">
                    ${project.techStack.map(tech => `
                        <span class="px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border)] text-sm font-mono">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="font-bold mb-4 text-sm uppercase tracking-wider text-[var(--fg-muted)]">Скриншоты</h3>
                <div class="grid gap-4">
                    ${project.images.map(img => `
                        <div class="card overflow-hidden">
                            <img src="${img.url}" alt="${img.caption}" 
                                 class="w-full h-auto object-cover">
                            <p class="p-3 text-sm text-[var(--fg-muted)] text-center font-mono">${img.caption}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="flex gap-4">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                   class="btn-primary flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Исходный код
                </a>
                <button onclick="showPage('projects')" class="btn-secondary">
                    К списку
                </button>
            </div>
        `;

    showPage('project-detail');
}

function updateStats() {
    document.getElementById('stat-projects').textContent = DATA.projects.length;
    document.getElementById('stat-experience').textContent = DATA.personal.experience;
    document.getElementById('stat-technologies').textContent = DATA.skills.length;
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const navLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
        });
        initRevealAnimations();
    }, 100);
}

function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}
