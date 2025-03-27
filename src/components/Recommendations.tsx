import React from 'react';

const Recommendations = () => {
  const recommendations = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      text: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him a valuable asset to any team.",
    },
    {
      name: "Michael Chen",
      role: "CTO at WebSolutions",
      text: "Working with John was a pleasure. He has a deep understanding of frontend technologies and brings creative solutions to complex problems.",
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Designer at CreativeStudio",
      text: "John's ability to translate designs into functional interfaces is outstanding. He has a great eye for detail and always goes the extra mile to ensure pixel-perfect implementation.",
    }
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Recommendations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="glass-card p-4 md:p-5">
            <p className="text-gray-300 mb-4 text-sm md:text-base italic">"{rec.text}"</p>
            <div>
              <p className="font-medium text-white text-base md:text-lg">{rec.name}</p>
              <p className="text-sm md:text-base text-gray-400">{rec.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
