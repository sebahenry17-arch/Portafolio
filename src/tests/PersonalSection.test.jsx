import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {PersonalSection} from "../components/organism/PersonalSection.jsx";


describe('Componente PersonalSection', () => {
    it('muestra el nombre y el título profesional del estudiante', () => {
        const mockPersonalData = {
            name: "Sebastian Henry",
            title: "Desarrollador en Formación",
            description: "Estudiante de Analista Programador",
            avatar: "ruta-falsa.jpg"
        };

        render(<PersonalSection personal={mockPersonalData} />);

        expect(screen.getByText('Sebastian Henry')).toBeDefined();
        expect(screen.getByText('Desarrollador en Formación')).toBeDefined();
        expect(screen.getByText('Estudiante de Analista Programador')).toBeDefined();
    });
});