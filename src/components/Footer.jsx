function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">&copy {new Date().getFullYear()} Nano-Nerds</p>
        <div className="flex gap-4 text-sm">
          <a href="#">Instagram</a>
          <a href="#">Website</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer