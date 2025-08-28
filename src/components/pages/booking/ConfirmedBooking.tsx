import { useEffect } from "react";
import { useNavigate } from "react-router"

export default function ConfirmedBooking() {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div className="confirmed-booking">
            <h1>Reserva Registrada Exitosamente</h1>
            <span>Volveras a la pagina principal en 5 segundos...</span>
        </div>
    )
}