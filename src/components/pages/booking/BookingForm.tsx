import { useEffect, useState, useReducer } from "react"
import { fetchAPI } from "../../../lib/fetchData";

export default function BookingForm({ submitForm }: { submitForm: (form: Record<string, string>) => void }) {


    const todayStr = new Date().toISOString().split('T')[0];

    const [form, setForm] = useState({
        date: todayStr,
        time: "null",
        guests: "",
        occasion: ""
    })

    const [errors, setErrors] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    })

    const [nowForSubmit, setNowForSubmit] = useState(true);

    function reducer(state: string[], action: any) {
        switch (action.type) {
            case 'updateTimes':
                return fetchAPI(new Date(form.date));
            case 'initilizeTimes':
                return fetchAPI(new Date());
            default:
                return state
        }
    }

    const [timeState, dispatch] = useReducer(reducer, [""])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        if (e.target.id === "date") {
            dispatch({ type: 'updateTimes', time: form.date })
        }

        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    useEffect(() => {
        dispatch({ type: 'initilizeTimes' })
    }, [])

    useEffect(() => {
        console.log("Validating form...");
        console.log(form);

        const newErrors = {
            date: "",
            time: "",
            guests: "",
            occasion: ""
        };

        // Validar fecha
        if (!form.date) {
            newErrors.date = "La fecha es requerida";
        }

        // Validar hora
        if (form.time === "null") {
            newErrors.time = "La hora es requerida";
        }

        // Validar ocasión
        if (!form.occasion) {
            newErrors.occasion = "La ocasión es requerida";
        }

        // Validar número de invitados
        if (!form.guests) {
            newErrors.guests = "El número de invitados es requerido";
        } else {
            const guestsNum = parseInt(form.guests);
            if (isNaN(guestsNum) || guestsNum < 1 || guestsNum > 10) {
                newErrors.guests = "El número de invitados debe ser entre 1 y 10";
            }
        }

        setErrors(newErrors);

        // Verificar si el formulario es válido
        const isValid = !newErrors.date && !newErrors.time && !newErrors.guests && !newErrors.occasion;
        setNowForSubmit(!isValid);
    }, [form])

    return (
        <form
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
            onSubmit={() => submitForm(form)}
            aria-label="Formulario de reserva de restaurante"
        >
            <div className="field-container">
                <label htmlFor="date">Fecha de Reserva</label>
                <input
                    type="date"
                    id="date"
                    value={form.date}
                    min={todayStr}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? "date-error" : undefined}
                />
                <span
                    id="date-error"
                    role="alert"
                    aria-live="polite"
                    style={{ color: errors.date ? 'red' : 'transparent' }}
                >
                    {errors.date}
                </span>
            </div>
            <div className="field-container">
                <label htmlFor="time">Hora de Reserva</label>
                <select
                    id="time"
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.time}
                    aria-describedby={errors.time ? "time-error" : undefined}
                >
                    <option value="null" selected>Selecciona una hora</option>
                    {timeState.map((time: string) => (
                        <option id="time-option" key={time}>{time}</option>
                    ))}
                </select>
                <span
                    id="time-error"
                    role="alert"
                    aria-live="polite"
                    style={{ color: errors.time ? 'red' : 'transparent' }}
                >
                    {errors.time}
                </span>
            </div>
            <div className="field-container">
                <label htmlFor="guests">Numero de invitados</label>
                <input
                    type="number"
                    placeholder="1"
                    id="guests"
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.guests}
                    aria-describedby={errors.guests ? "guests-error" : undefined}
                    min="1"
                    max="10"
                />
                <span
                    id="guests-error"
                    role="alert"
                    aria-live="polite"
                    style={{ color: errors.guests ? 'red' : 'transparent' }}
                >
                    {errors.guests}
                </span>
            </div>
            <div className="field-container">
                <label htmlFor="occasion">Ocasion</label>
                <select
                    id="occasion"
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.occasion}
                    aria-describedby={errors.occasion ? "occasion-error" : undefined}
                >
                    <option value="">Selecciona una ocasión</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                    <option value="Aniversario">Aniversario</option>
                </select>
                <span
                    id="occasion-error"
                    role="alert"
                    aria-live="polite"
                    style={{ color: errors.occasion ? 'red' : 'transparent' }}
                >
                    {errors.occasion}
                </span>
            </div>
            <input
                type="submit"
                value="Confirmar Reserva"
                disabled={nowForSubmit}
                aria-describedby={nowForSubmit ? "submit-help" : undefined}
            />
            {nowForSubmit && (
                <span id="submit-help" role="status" aria-live="polite">
                    Completa todos los campos requeridos para habilitar el botón de envío
                </span>
            )}
        </form>
    )
}