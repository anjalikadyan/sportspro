import React from 'react';
import { tournamentHighlights } from '../../utils/constants';
import { getSportIcon } from '../../utils/helpers';
import './TournamentsSection.css';

const TournamentsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl font-bold mb-6">Tournament Highlights</h2>
          <p className="text-xl text-gray-400">Major tournaments currently being organized</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tournamentHighlights.map((tournament, index) => (
            <div
              key={tournament.id}
              className="group relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 overflow-hidden animate-slideUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{tournament.name}</h3>
                    <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                      {tournament.sport}
                    </span>
                  </div>
                  <div className="text-4xl">{getSportIcon(tournament.sport)}</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Prize Pool</span>
                    <span className="font-bold text-green-400 text-lg">{tournament.prize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Teams</span>
                    <span className="font-semibold">{tournament.teams} Teams</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration</span>
                    <span className="font-semibold">
                      {tournament.startDate} - {tournament.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status</span>
                    <span
                      className={`font-semibold px-3 py-1 rounded-full text-sm ${
                        tournament.status === 'Registration Open'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {tournament.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
