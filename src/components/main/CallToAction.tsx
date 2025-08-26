import { useNavigate } from "react-router";
import restaurantFood from "../../assets/restaurantFood.jpg";

export default function CallToAction() {

    const navigate = useNavigate();

    return (
        <section className="call-to-action">
            <div>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <button onClick={() => navigate("/booking")}>Reserve A Table</button>
            </div>
            <img src={restaurantFood} alt="" />
        </section>
    )
}