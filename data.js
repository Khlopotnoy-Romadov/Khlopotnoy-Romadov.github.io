export const DATA = {
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
        {
            id: "manage_form",
            title: "Форма управления аккаунтами",
            shortDesc: "Простая форма управления учетных записей.",
            tags: ["Vue.js", "Typescript", "Composition.api"],
            github: "https://github.com/Khlopotnoy-Romadov/account_manage_form",
            fullDesc: `
                    <p>С помощью данной формы можно хранить данные по аккаунтам.</p>
                    <h4 class="font-bold mt-4 mb-2 text-[var(--fg)]">Возможности:</h4>
                    <ul class="list-disc list-inside space-y-1 text-[var(--fg-muted)]">
                        <li>Создание, редактирование и удаление для учетных записей</li>
                    </ul>
                `,
            images: [
                { url: "archive_screens/AMF1.jpg", caption: "Интерфейс с пустым списком" },
                { url: "archive_screens/AMF2.jpg", caption: "Создание новой записи" },
                { url: "archive_screens/AMF3.jpg", caption: "Интерфейс с сохраненными записями" },
                { url: "archive_screens/AMF4.jpg", caption: "Простое удаление записи" },
            ],
            techStack: ["Vue.js", "Typescript", "Composition.api"]
        },

    ]
};