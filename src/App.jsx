import './index.css'

// import your components
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './components/pages/home'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-1">
        <Home />
      </main>

      <Footer />
    </div>
  )
}

export default App
