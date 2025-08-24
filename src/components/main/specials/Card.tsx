import greekSalad from "../../../assets/cook/greek salad.jpg";
import deliveryIcon from "../../../assets/icons/delivery.svg";

interface CardProps {
    title?: string;
    price?: number;
    description?: string;
    image?: string;
}

export default function Card({ title = "Greek Salad", price = 12.99, description = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", image = greekSalad}: CardProps) {
    return (
        <div className="specials-card">
            <img src={image} alt="Little Lemon" />
            <div className="specials-card-content">
                <div className="specials-card-content-title">
                    <h3>{title}</h3>
                    <p>${price}</p>
                </div>
                <p className="specials-card-content-description">{description}</p>
                <a href="#" className="specials-card-content-button">
                    <span>Order a delivery</span>
                    <img className="delivery-icon" src={deliveryIcon} alt="Delivery Icon" />
                </a>
            </div>
        </div>
    )
}