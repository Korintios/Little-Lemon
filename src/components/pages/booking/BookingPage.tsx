import { useNavigate } from "react-router";
import { submitAPI } from "../../../lib/fetchData";
import BookingForm from "./BookingForm";

export default function BookingPage() {

    const navigate = useNavigate();

    const handleSubmitForm = (form: Record<string,string>) => {
        const result = submitAPI(form);

        if (!result) {
            return;
        }

        navigate('/booking/confirmed')
    }

    return (
        <div className="booking-page">
            <h1>Reserva tu Mesa</h1>
            <BookingForm submitForm={handleSubmitForm}/>
        </div>
    )
}