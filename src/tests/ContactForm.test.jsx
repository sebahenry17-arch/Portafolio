import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {ContactForm} from "../components/organism/ContactForm.jsx";



globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
};

describe('Componente ContactForm', () => {
    it('dispara la validación de Ant Design al intentar enviar el formulario vacío', async () => {
        render(<ContactForm />);

        const botonEnviar = screen.getByRole('button', { name: /enviar mensaje/i });
        fireEvent.click(botonEnviar);

        const mensajeError = await screen.findByText('Tu nombre es obligatorio');
        expect(mensajeError).toBeDefined();
    });
});