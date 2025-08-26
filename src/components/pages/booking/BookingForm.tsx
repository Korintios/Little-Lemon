import { useEffect, useState, useReducer } from "react"
import { fetchAPI } from "../../../lib/fetchData";

export default function BookingForm() {

    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    })

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

    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" onChange={handleChange} />
            <label htmlFor="time">Choose time</label>
            <select id="time" onChange={handleChange}>
                {timeState.map((time: string) => (
                    <option id="time-option" key={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}