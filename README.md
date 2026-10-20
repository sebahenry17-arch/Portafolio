# Portafolio Personal - React & Vite 🚀

Este es un proyecto académico desarrollado para la carrera de Analista Programador. Consiste en un portafolio web personal moderno, interactivo y estructurado bajo los mejores estándares de la industria.

## 🛠️ Tecnologías Utilizadas
- **Frontend:** React 19, Vite
- **Estilos y UI:** Ant Design (antd), CSS Custom (Glassmorphism)
- **Testing:** Vitest, React Testing Library
- **Arquitectura:** Atomic Design

## 🏗️ Arquitectura (Atomic Design)
El proyecto está estructurado siguiendo el patrón de diseño atómico para garantizar la máxima escalabilidad y reutilización de componentes:
- **`src/components/atoms`**: Componentes básicos sin lógica compleja.
- **`src/components/molecules`**: Agrupación de átomos (ej. `ProjectCard`, `StudyCard`).
- **`src/components/organisms`**: Secciones completas de la interfaz (ej. `PersonalSection`, `ContactForm`).
- **`src/pages`**: Páginas principales que unen los organismos (ej. `HomePage.jsx`).

## ⚙️ Cómo ejecutar el proyecto localmente

1. Clonar el repositorio:
```bash
git clone <https://github.com/sebahenry17-arch/Portafolio.git>
```

2. Instalar las dependencias del proyecto:
```bash
npm install
```

3. Levantar el servidor de desarrollo:
```bash
npm run dev
```

## 🧪 Pruebas Unitarias
El proyecto incluye un entorno de pruebas configurado con Vitest y soporte para Ant Design (`ResizeObserver` mockeado). Para ejecutar las pruebas, utiliza el siguiente comando:
```bash
npm run test
```

---




  
