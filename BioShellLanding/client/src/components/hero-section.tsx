export default function HeroSection() {
  const handleDiscoverClick = () => {
    const element = document.querySelector('#solution');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-green-600">
            🌿 BioShell – Torpağın Yeni Nəfəsi
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-green-600">
            Restore Land. Grow Sustainably.
          </p>
          <p className="text-lg md:text-xl mb-8 text-green-700 max-w-3xl mx-auto">
            Biodegradable capsule that revives soil, protects crops, and reduces chemical use.
          </p>
          <button
            onClick={handleDiscoverClick}
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Discover BioShell
          </button>
        </div>
      </div>
    </section>
  );
}
