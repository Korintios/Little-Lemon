import bannerOne from "../assets/banner_one.jpg";
import bannerTwo from "../assets/banner_two.jpg";

export default function Chicago() {
    return (
        <section className="chicago">
            <div className="chicago-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel minima eum, aperiam, cum doloremque ducimus corrupti delectus perferendis quam dolorem culpa quibusdam assumenda neque eveniet. Blanditiis accusamus corporis repellat libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores nobis doloribus incidunt nemo accusamus? Deserunt iusto praesentium accusantium quidem, omnis a dicta accusamus dolor at quas eos asperiores iste.</p>
            </div>
            <div className="chicago-images">
                <img className="chicago-image-one" src={bannerOne} alt="" />
                <img className="chicago-image-two" src={bannerTwo} alt="" />
            </div>
        </section>
    )
}