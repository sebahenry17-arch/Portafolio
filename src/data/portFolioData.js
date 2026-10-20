import imagenPerfil from '../assets/imagenDePerfil.png';
export const portfolioData = {
    personal: {
        name: "Sebastian Alexander Henry Smith",
        title: "Estudiante de Analista Programador",

        avatar: imagenPerfil,
        description: "Soy estudiante de segundo semestre de la carrera Analista Programador. Me apasiona la tecnología, el desarrollo de software y estoy en constante aprendizaje. Actualmente busco mi primera oportunidad laboral (práctica o puesto Trainee/Junior) para aportar valor y aplicar mis conocimientos en proyectos reales."
    },


    experience: [
        {
            id: 1,
            company: "Proyectos Académicos y Personales",
            role: "Desarrollador en Formación",
            startDate: "2015",
            endDate: "Presente"
        },
        {
            id: 2,
            company: "Eglo (Tienda de Iluminación)",
            role: "Asistente de Bodega (Part-Time)",
            startDate: "2013",
            endDate: "2013"
        }
    ],

    studies: [
        {
            id: 1,
            institution: "Duoc UC Maipu",
            degree: "Analista Programador",
            year: "Segundo Semestre (En curso)"
        }
    ],


    projects: [
        {
            id: 1,
            title: "Portafolio Web Personal",
            preview: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
            repoUrl: "https://github.com/sebahenry17-arch/Portafolio",
            tags: ["React", "Vite", "CSS", "Frontend"]
        },
        {
            id: 2,
            title: "API Backend Automotora",

            preview: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400",
            repoUrl: "https://github.com/sebahenry17-arch/automotora-app",
            tags: ["Java", "Spring Boot", "API REST", "Backend"]
        }
    ],

    socials: {
        github: "https://github.com/sebahenry17-arch",

    }
};