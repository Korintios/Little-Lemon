import logo from "../assets/footer_logo.png"

export default function FooterPage() {
    return (
        <footer className="footer-page">
            <img src={logo} alt="logo" />
            <div className="footer-links">
                <ul>
                    <li>Navegacion</li>
                    <li>Inicio</li>
                    <li>Hero</li>
                    <li>Especiales</li>
                    <li>Testimonios</li>
                    <li>Sobre que</li>
                    <li>Pie de Pagina</li>
                    <li>Iniciar Sesion</li>
                </ul>
                <ul>
                    <li>Contacto</li>
                    <li>Numero</li>
                    <li>Correo Electronico</li>
                </ul>
                <ul>
                    <li>Redes Sociales</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </footer>
    )
}