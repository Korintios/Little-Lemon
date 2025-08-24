import Chicago from "./components/Chicago"
import CallToAction from "./components/main/CallToAction"
import Navbar from "./components/main/Navbar"
import Specials from "./components/main/specials"
import Testimonials from "./components/main/testimonials"
import FooterPage from "./components/FooterPage"

function App() {
  return (
    <main>
      <header>
        <Navbar/>
      </header>
      <CallToAction/>
      <Specials/>
      <Testimonials/>
      <Chicago/>
      <FooterPage/>
    </main>
  )
}

export default App
