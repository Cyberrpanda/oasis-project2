import './index.css'

// import your components
import Header from './components/layout/header.jsx'
import Footer from './components/layout/footer.jsx'
import Home from './components/pages/home.jsx'
import Products from './components/pages/products.jsx'
import Testimonial from './components/pages/testimonial.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-1">
        <Home />
        <Products />
        <Testimonial />
      </main>

      <Footer />
    </div>
  )
}

export default App
