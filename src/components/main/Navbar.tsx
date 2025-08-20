import littleLemonLogo from "../../assets/Logo.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={littleLemonLogo} alt="Little Lemon" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}