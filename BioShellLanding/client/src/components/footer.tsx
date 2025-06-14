export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold text-green-500 mb-6">🌿 BioShell</div>
          <p className="text-gray-400 mb-8">Restoring soil, protecting crops, supporting sustainable farming.</p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              Terms of Service
            </a>
          </div>
          
          <p className="text-gray-500">© 2025 BioShell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
