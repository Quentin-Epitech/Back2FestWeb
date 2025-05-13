import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    { date: '15 Juillet', day: 'Vendredi' },
    { date: '16 Juillet', day: 'Samedi' },
    { date: '17 Juillet', day: 'Dimanche' },
  ];

  const scheduleData = [
    //jour 1
    [
      { time: '16:00', artist: 'Ouverture des portes', stage: 'Scène Principale', description: 'Accueil des festivaliers' },
      { time: '17:00', artist: 'HLD', stage: 'Scène Principale', description: 'Rap français' },
      { time: '18:00', artist: 'Attaching Boy', stage: 'Scène Principale', description: 'Rap français' },
      { time: '19:00', artist: 'L2B', stage: 'Scène Principale', description: 'Rap français' },
      { time: '20:00', artist: 'JRK', stage: 'Scène Principale', description: 'Rap français' },
      { time: '21:00', artist: 'Genezio', stage: 'Scène Principale', description: 'Rap français' },
      { time: '22:00', artist: 'Nono la Grinta', stage: 'Scène Principale', description: 'Rap français' },
    ],
    // jour 2
    [
      { time: '17:00', artist: 'Genezio', stage: 'Scène Principale', description: 'Rap français' },
      { time: '18:00', artist: 'La Mano', stage: 'Scène Principale', description: 'Rap français' },
      { time: '19:00', artist: 'JRK', stage: 'Scène Principale', description: 'Rap français' },
      { time: '20:00', artist: 'Naza', stage: 'Scène Principale', description: 'Rap français' },
      { time: '21:00', artist: 'SDM', stage: 'Scène Principale', description: 'Rap français' },
      { time: '22:00', artist: 'Kaaris', stage: 'Scène Principale', description: 'Rap français' },
    ],
    // Day 3
    [
      { time: '17:00', artist: 'Nono la Grinta', stage: 'Scène Principale', description: 'Rap français' },
      { time: '18:00', artist: 'La Mano', stage: 'Scène Principale', description: 'Rap français' },
      { time: '19:00', artist: 'Naza', stage: 'Scène Principale', description: 'Rap français' },
      { time: '20:00', artist: 'Niska', stage: 'Scène Principale', description: 'Rap français' },
      { time: '21:00', artist: 'Leto', stage: 'Scène Principale', description: 'Rap français' },
      { time: '22:00', artist: 'Ninho', stage: 'Scène Principale', description: 'Show final + effets pyrotechniques' },
    ],
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Scène Principale':
        return 'bg-primary-light';
      case 'Scène Découverte':
        return 'bg-secondary-light';
      case 'Scène Électronique':
        return 'bg-secondary';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="schedule" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">PROGRAMME</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeDay === index
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {day.day} <span className="hidden sm:inline">({day.date})</span>
                </span>
              </div>
            </button>
          ))}
        </div>

        
        <div className="max-w-4xl mx-auto">
          {scheduleData[activeDay].map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row gap-4 mb-8 p-6 rounded-lg ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-primary" size={20} />
                  <span className="font-bold text-lg">{item.time}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-white text-sm ${getStageColor(item.stage)}`}>
                  {item.stage}
                </div>
              </div>
              
              <div className="flex-grow md:ml-4">
                <h3 className="text-xl font-bold text-secondary-dark mb-2">{item.artist}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;