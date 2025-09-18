function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 text-white text-center">
      <h2 className="text-5xl font-bold mb-4">Welcome to Building Material Store</h2>
      <p className="text-lg mb-6">We provide cement, iron, gitti, sand, and more at best prices.</p>
      <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500">
        Explore Products
      </button>
    </section>
  )
}

export default Hero
