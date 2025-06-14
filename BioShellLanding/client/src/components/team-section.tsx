export default function TeamSection() {
  const teamMembers = [
    {
      name: "Anar Eyvazzade",
      role: "President",
    },
    {
      name: "Nəzrin Əlihümbətova",
      role: "Vitse-prezident",
    },
    {
      name: "Ceyran İmranova",
      role: "Layihə meneceri",
    },
    {
      name: "Nazim Qənizadə",
      role: "İT meneceri",
    },
    {
      name: "Tahirə Salayeva",
      role: "Mentor",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
              Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl text-green-600">👤</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
