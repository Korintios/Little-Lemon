import Card from "./Card";

export default function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="specials-cards">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}