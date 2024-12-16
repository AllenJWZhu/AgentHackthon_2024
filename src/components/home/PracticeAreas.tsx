// src/components/home/PracticeAreas.tsx
import React from 'react';

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

interface PracticeAreasProps {
  areas: PracticeArea[];
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ areas }) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Practice Areas</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {areas.map((area) => (
          <button
            key={area.id}
            className={`group flex flex-col h-40 p-6 rounded-lg transition-all hover:-translate-y-1 ${area.color}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 flex items-center justify-center">
                {area.icon}
              </span>
              <h3 className="font-medium text-gray-800">{area.title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {area.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};