import starIcon from "../../../assets/icons/star.svg";
import exampleImage from "../../../assets/photo.png";

export default function Card() {
    return (
        <div className="testimonials-card">
            <h3>John Doe</h3>
            <div className="testimonials-card-stars">
                <img src={exampleImage} alt="" />
                <div className="testimonials-card-stars-container">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <img key={index} src={starIcon} alt="" />
                    ))}
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
    )
}