import { expect, test } from "vitest"
import { render } from "vitest-browser-react";
import BookingForm from "./BookingForm";
import { page } from "@vitest/browser/context";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = page.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('Validate Initilize Times', () => {
    render(<BookingForm />);
    const timeSelect = page.getByLabelText("Choose time");
    expect(timeSelect).toHaveTextContent("17:00");

})

test('Validate Update Times', async () => {
    render(<BookingForm />);
    const dateSelect = page.getByLabelText("Choose date");
    await dateSelect.fill("2025-08-26");
    const options = document.querySelectorAll("#time-option");
    expect(options.length).toBeGreaterThan(0);
})