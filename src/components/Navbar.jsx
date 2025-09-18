function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Website Logo / Title */}
      <h1 className="text-xl font-bold">🏗️ Building Material</h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">Products</a></li>
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar


