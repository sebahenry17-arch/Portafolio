import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {StudyCard} from "../components/molecules/StudyCard.jsx";


describe('Componente StudyCard', () => {
    it('renderiza correctamente el título de la carrera, la institución y el año', () => {
        render(
            <StudyCard
                degree="Analista Programador"
                institution="Universidad"
                year="2023 - Presente"
            />
        );

        expect(screen.getByText('Analista Programador')).toBeDefined();
        expect(screen.getByText('Universidad')).toBeDefined();
        expect(screen.getByText('2023 - Presente')).toBeDefined();
    });
});