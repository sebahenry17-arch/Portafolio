import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {ExperienceCard} from "../components/molecules/ExperienceCard.jsx";


describe('Componente ExperienceCard', () => {
    it('renderiza correctamente el rol laboral y la empresa', () => {
        render(
            <ExperienceCard
                role="Asistente de Bodega (Part-Time)"
                company="Eglo"
                startDate="2022"
                endDate="2023"
            />
        );

        expect(screen.getByText('Asistente de Bodega (Part-Time)')).toBeDefined();
        expect(screen.getByText('Eglo')).toBeDefined();
        expect(screen.getByText('2022 — 2023')).toBeDefined();
    });
});