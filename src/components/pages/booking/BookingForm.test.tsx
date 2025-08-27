import { expect, test } from "vitest"
import { render } from "vitest-browser-react";
import BookingForm from "./BookingForm";
import { page } from "@vitest/browser/context";
import { MemoryRouter } from "react-router";

// Mock function para submitForm
const mockSubmitForm = (form: Record<string, string>) => {
    console.log('Form submitted:', form);
};

test('Renders the BookingForm heading', () => {
    render(
        <MemoryRouter>
            <BookingForm submitForm={mockSubmitForm}/>
        </MemoryRouter>
    );
    const headingElement = page.getByText("Fecha de reserva");
    expect(headingElement).toBeInTheDocument();
})

test('Validate Initilize Times', () => {
    render(
        <MemoryRouter>
            <BookingForm submitForm={mockSubmitForm}/>
        </MemoryRouter>
    );
    const timeSelect = page.getByLabelText("Hora de reserva");
    expect(timeSelect).toHaveTextContent("17:00");
})

test('Validate Update Times', async () => {
    render(
        <MemoryRouter>
            <BookingForm submitForm={mockSubmitForm}/>
        </MemoryRouter>
    );
    const dateSelect = page.getByLabelText("Fecha de reserva");
    await dateSelect.fill("2025-08-26");
    const options = document.querySelectorAll("#time-option");
    expect(options.length).toBeGreaterThan(0);
})

test('Validate validations', async () => {
    render(
        <MemoryRouter>
            <BookingForm submitForm={mockSubmitForm}/>
        </MemoryRouter>
    );


    const timeInput = page.getByLabelText("Hora de reserva");
    await timeInput.selectOptions("Selecciona una hora");

    const guestsInput = page.getByLabelText("Numero de invitados");
    await guestsInput.fill("25");
    const errorMessage = page.getByText("El número de invitados debe ser entre 1 y 10");
    expect(errorMessage).toBeInTheDocument();
})

test('Submit button is disabled initially', () => {
    render(
        <MemoryRouter>
            <BookingForm submitForm={mockSubmitForm}/>
        </MemoryRouter>
    );
    const submitButton = page.getByText("Confirmar Reserva");
    expect(submitButton).toBeDisabled();
})

test('Submit button becomes enabled when form is valid', async () => {
    render(
        <MemoryRouter>
            <BookingForm submitForm={mockSubmitForm}/>
        </MemoryRouter>
    );
    
    // Llenar todos los campos requeridos
    const timeInput = page.getByLabelText("Hora de reserva");
    await timeInput.selectOptions("17:00");

    const guestsInput = page.getByLabelText("Numero de invitados");
    await guestsInput.fill("5");
    
    const occasionSelect = page.getByLabelText("Ocasion");
    await occasionSelect.selectOptions("Cumpleaños");
    
    // Esperar a que se actualice el estado
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const submitButton = page.getByText("Confirmar Reserva");
    expect(submitButton).not.toBeDisabled();
})