// Spaceship.jsx
import React, { forwardRef } from 'react';

const Spaceship = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gray-200 rounded-t-full"></div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-cyan-500 rounded-lg"></div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-pink-500 rounded-b-lg"></div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
      </div>
    </div>
  );
});



const SpaceCraft3 = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: "transform 0.2s ease",
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`, // Fixed syntax
      }}
    >
      <div className="relative">
        {/* Main body */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-12 bg-indigo-600 rounded-t-lg"></div>

        {/* Wings */}
        <div className="absolute top-6 left-0 w-16 h-4 bg-purple-500 rounded-full"></div>

        {/* Cockpit */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-300 rounded-full border-2 border-blue-400"></div>

        {/* Engine flames */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-3 bg-red-500 rounded-b-lg"></div>
          <div className="w-6 h-4 bg-orange-400 rounded-b-lg mt-1 mx-auto"></div>
          <div className="w-4 h-3 bg-yellow-300 rounded-b-lg animate-pulse mt-1 mx-auto"></div>
        </div>

        {/* Side thrusters */}
        <div className="absolute top-8 -left-1 w-3 h-3 bg-teal-400 rounded-full"></div>
        <div className="absolute top-8 -right-1 w-3 h-3 bg-teal-400 rounded-full"></div>
      </div>
    </div>
  );
});


// Design 1: Triangular Fighter
const TriangularFighter = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main body */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-red-600 w-0 h-0"></div>
        
        {/* Cockpit */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
        
        {/* Wings */}
        <div className="absolute top-8 left-0 w-16 h-2 bg-gray-800 rounded-full"></div>
        
        {/* Engine glow */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-white rounded-full opacity-90 animate-ping"></div>
      </div>
    </div>
  );
});

// Design 2: Stealth Bomber
const StealthBomber = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main wing */}
        <div className="absolute top-6 left-0 w-16 h-4 bg-gray-900 transform skew-y-12 rounded-l-full rounded-r-full"></div>
        
        {/* Cockpit */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gray-700 rounded-t-lg"></div>
        
        {/* Engine trails */}
        <div className="absolute top-8 left-4 w-2 h-6 bg-blue-400 opacity-40 rounded-b-full animate-pulse"></div>
        <div className="absolute top-8 left-10 w-2 h-6 bg-blue-400 opacity-40 rounded-b-full animate-pulse"></div>
        
        {/* Running lights */}
        <div className="absolute top-6 left-1 w-1 h-1 bg-red-500 rounded-full"></div>
        <div className="absolute top-6 right-1 w-1 h-1 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
});

// Design 3: Space Cruiser
const SpaceCruiser = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main body */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-10 bg-blue-700 rounded-lg"></div>
        
        {/* Front section */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-blue-800 rounded-t-lg"></div>
        
        {/* Engine section */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-blue-900 rounded-lg"></div>
        
        {/* Windows (staggered) */}
        <div className="absolute top-3 left-5 w-6 h-1 bg-yellow-100 rounded-full"></div>
        <div className="absolute top-5 left-5 w-6 h-1 bg-yellow-100 rounded-full"></div>
        <div className="absolute top-7 left-5 w-6 h-1 bg-yellow-100 rounded-full"></div>
        <div className="absolute top-9 left-5 w-6 h-1 bg-yellow-100 rounded-full"></div>
        
        {/* Engine lights */}
        <div className="absolute top-13 left-6 w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-13 left-8 w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-13 left-10 w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 4: Alien Organic Ship
const AlienOrganic = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main organic body */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-purple-800 rounded-full"></div>
        
        {/* Tentacle/appendages */}
        <div className="absolute top-8 left-2 w-2 h-6 bg-purple-700 rounded-full transform rotate-12"></div>
        <div className="absolute top-8 left-6 w-2 h-5 bg-purple-700 rounded-full"></div>
        <div className="absolute top-8 left-10 w-2 h-6 bg-purple-700 rounded-full transform -rotate-12"></div>
        
        {/* Eye/sensor */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full"></div>
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
        
        {/* Glowing aura */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-purple-600 rounded-full opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 5: Retro Rocket
const RetroRocket = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Rocket nose cone */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-t-full"></div>
        
        {/* Main rocket body */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded"></div>
        
        {/* Fins */}
        <div className="absolute top-10 left-1 w-3 h-4 bg-red-600 transform skew-x-12"></div>
        <div className="absolute top-10 right-1 w-3 h-4 bg-red-600 transform -skew-x-12"></div>
        
        {/* Porthole windows */}
        <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-300 rounded-full border-2 border-gray-700"></div>
        
        {/* Flames */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-orange-600 rounded-b-lg animate-pulse"></div>
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-yellow-500 rounded-b-lg animate-pulse"></div>
      </div>
    </div>
  );
});


const SpaceShip2 = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main saucer section */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-5 bg-gray-800 rounded-full"></div>
        
        {/* Top dome */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-emerald-500 rounded-full border border-emerald-300"></div>
        
        {/* Bottom section */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-gray-700 rounded-b-lg"></div>
        
        {/* Glowing ring */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-amber-400 rounded-full opacity-70 animate-pulse"></div>
        
        {/* Windows */}
        <div className="absolute top-5 left-4 w-1 h-1 bg-blue-300 rounded-full"></div>
        <div className="absolute top-5 left-6 w-1 h-1 bg-blue-300 rounded-full"></div>
        <div className="absolute top-5 left-8 w-1 h-1 bg-blue-300 rounded-full"></div>
        <div className="absolute top-5 left-10 w-1 h-1 bg-blue-300 rounded-full"></div>
        <div className="absolute top-5 left-12 w-1 h-1 bg-blue-300 rounded-full"></div>
        
        {/* Engine glow */}
        <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-violet-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-fuchsia-400 rounded-full animate-pulse"></div>
        
        {/* Sensor array */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-red-500"></div>
      </div>
    </div>
  );
});

// Design 1: Insectoid Scout
const InsectoidScout = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main body */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-800 rounded-full"></div>
        
        {/* Head section */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-5 h-4 bg-green-700 rounded-t-full"></div>
        
        {/* Antenna */}
        <div className="absolute top-0 left-6 w-1 h-3 bg-green-600 transform rotate-12"></div>
        <div className="absolute top-0 left-9 w-1 h-3 bg-green-600 transform -rotate-12"></div>
        
        {/* Wing structures */}
        <div className="absolute top-6 left-0 w-5 h-1 bg-green-500 rounded"></div>
        <div className="absolute top-8 left-0 w-6 h-1 bg-green-500 rounded"></div>
        <div className="absolute top-6 right-0 w-5 h-1 bg-green-500 rounded"></div>
        <div className="absolute top-8 right-0 w-6 h-1 bg-green-500 rounded"></div>
        
        {/* Eyes */}
        <div className="absolute top-4 left-5 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-4 right-5 w-2 h-2 bg-yellow-400 rounded-full"></div>
        
        {/* Energy trail */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-300 rounded-full opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 2: Crystal Voyager
const CrystalVoyager = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Central crystal */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-cyan-300 bg-opacity-80 rotate-45"></div>
        
        {/* Crystal spikes */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-cyan-400 bg-opacity-80 rotate-12"></div>
        <div className="absolute top-6 left-1 w-2 h-5 bg-cyan-400 bg-opacity-80 -rotate-45"></div>
        <div className="absolute top-6 right-1 w-2 h-5 bg-cyan-400 bg-opacity-80 rotate-45"></div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-cyan-400 bg-opacity-80 -rotate-12"></div>
        
        {/* Energy core */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-70 animate-pulse"></div>
        
        {/* Energy field */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-cyan-200 rounded-full opacity-40"></div>
      </div>
    </div>
  );
});

// Design 3: Solar Sailer
const SolarSailer = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main hull */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-amber-700 rounded"></div>
        
        {/* Command pod */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-amber-800 rounded-t-lg"></div>
        
        {/* Solar sail (left) */}
        <div className="absolute top-2 left-0 w-8 h-10 bg-amber-300 bg-opacity-40 transform skew-y-12 rounded-l-lg"></div>
        
        {/* Solar sail (right) */}
        <div className="absolute top-2 right-0 w-8 h-10 bg-amber-300 bg-opacity-40 transform -skew-y-12 rounded-r-lg"></div>
        
        {/* Sail supports */}
        <div className="absolute top-7 left-2 w-1 h-6 bg-amber-600 transform rotate-12"></div>
        <div className="absolute top-7 right-2 w-1 h-6 bg-amber-600 transform -rotate-12"></div>
        
        {/* Energy collectors */}
        <div className="absolute top-1 left-3 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1 right-3 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 4: Quantum Sphere
const QuantumSphere = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main sphere */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-900 rounded-full"></div>
        
        {/* Inner core */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-fuchsia-500 rounded-full animate-pulse"></div>
        
        {/* Orbital rings */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 border border-purple-400 rounded-full opacity-70"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 rotate-45 w-12 h-12 border border-purple-400 rounded-full opacity-70"></div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 rotate-90 w-12 h-12 border border-purple-400 rounded-full opacity-70"></div>
        
        {/* Energy particles */}
        <div className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-8 right-3 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-12 left-6 w-1 h-1 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
});

// Design 5: Galactic Explorer
const GalacticExplorer = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Central command disk */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-slate-700 rounded-full"></div>
        
        {/* Upper dome */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-slate-600 rounded-t-full"></div>
        
        {/* Lower section */}
        <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-4 h-5 bg-slate-800 rounded-b-lg"></div>
        
        {/* Observation windows */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-yellow-200 rounded-full"></div>
        
        {/* Extendable arms */}
        <div className="absolute top-5 left-2 w-2 h-4 bg-slate-500 rounded transform rotate-12"></div>
        <div className="absolute top-5 right-2 w-2 h-4 bg-slate-500 rounded transform -rotate-12"></div>
        
        {/* Sensor pods */}
        <div className="absolute top-3 left-3 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full"></div>
        
        {/* Propulsion field */}
        <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-blue-300 rounded-full opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
});


// Design 1: Battle Cruiser
const BattleCruiser = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main hull */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-600 rounded"></div>
        
        {/* Front section */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gray-700 rounded-t-lg -translate-y-3"></div>
        
        {/* Weapon turrets */}
        <div className="absolute top-3 left-4 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-3 right-4 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-7 left-2 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-7 right-2 w-2 h-2 bg-gray-800 rounded-full"></div>
        
        {/* Engine section */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-700 rounded"></div>
        
        {/* Engine glow */}
        <div className="absolute top-10 left-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-10 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        
        {/* Bridge */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blue-400 rounded"></div>
      </div>
    </div>
  );
});

// Design 2: Neo Racer
const NeoRacer = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Aerodynamic body */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-pink-600 rounded-full"></div>
        
        {/* Cockpit */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-5 h-3 bg-black rounded-t-full"></div>
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-cyan-400 rounded"></div>
        
        {/* Fins */}
        <div className="absolute top-5 left-1 w-1 h-4 bg-pink-600 transform -skew-y-12"></div>
        <div className="absolute top-5 right-1 w-1 h-4 bg-pink-600 transform skew-y-12"></div>
        
        {/* Thruster */}
        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        
        {/* Light strips */}
        <div className="absolute top-7 left-4 w-4 h-1 bg-cyan-400 animate-pulse"></div>
        <div className="absolute top-7 right-4 w-4 h-1 bg-cyan-400 animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 3: Orbital Station
const OrbitalStation = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Central hub */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-400 rounded-full"></div>
        
        {/* Ring structure */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-14 h-14 border-4 border-gray-600 rounded-full"></div>
        
        {/* Modules */}
        <div className="absolute top-6 left-2 w-3 h-3 bg-gray-500 rounded"></div>
        <div className="absolute top-6 right-2 w-3 h-3 bg-gray-500 rounded"></div>
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-500 rounded"></div>
        <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-500 rounded"></div>
        
        {/* Solar panels */}
        <div className="absolute top-8 left-0 w-4 h-1 bg-blue-500"></div>
        <div className="absolute top-8 right-0 w-4 h-1 bg-blue-500"></div>
        
        {/* Docking lights */}
        <div className="absolute top-4 left-4 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute top-11 right-4 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 4: Nebula Drifter
const NebulaDrifter = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Cloud-like main body */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-violet-400 bg-opacity-70 rounded-full"></div>
        <div className="absolute top-4 left-3 w-10 h-6 bg-pink-300 bg-opacity-60 rounded-full"></div>
        
        {/* Central orb */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-violet-700 rounded-full"></div>
        <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        
        {/* Trailing wisps */}
        <div className="absolute top-10 left-4 w-3 h-5 bg-pink-300 bg-opacity-40 rounded-full"></div>
        <div className="absolute top-10 right-4 w-3 h-5 bg-violet-400 bg-opacity-40 rounded-full"></div>
        <div className="absolute top-12 left-6 w-4 h-4 bg-pink-200 bg-opacity-30 rounded-full"></div>
      </div>
    </div>
  );
});

// Design 5: Astral Nomad
const AstralNomad = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main body - pyramid */}
        <div 
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-teal-600">
        </div>
        
        {/* Base section */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-teal-700 rounded-full -translate-y-1"></div>
        
        {/* Hover rings */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-teal-500 rounded-full"></div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-teal-400 rounded-full opacity-80"></div>
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-teal-300 rounded-full opacity-60"></div>
        
        {/* Energy orb */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
        
        {/* Light beams */}
        <div className="absolute top-2 left-6 w-1 h-4 bg-yellow-100 opacity-60 transform rotate-12"></div>
        <div className="absolute top-2 right-6 w-1 h-4 bg-yellow-100 opacity-60 transform -rotate-12"></div>
      </div>
    </div>
  );
});

// Design 6: Quantum Leaper
const QuantumLeaper = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Main structure - split halves */}
        <div className="absolute top-4 left-3 w-4 h-8 bg-blue-800 rounded-l-full"></div>
        <div className="absolute top-4 right-3 w-4 h-8 bg-blue-800 rounded-r-full"></div>
        
        {/* Energy field between halves */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 animate-pulse rounded-full"></div>
        
        {/* Connecting struts */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-700 rounded"></div>
        <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-700 rounded"></div>
        
        {/* Energy wisps */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-200 opacity-70 animate-ping"></div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-200 opacity-70 animate-ping"></div>
        
        {/* Dimensional field */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-14 h-10 border border-blue-400 opacity-40 rounded-full"></div>
      </div>
    </div>
  );
});

// Design 7: Bio-Organic Explorer
const BioOrganic = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Central body - irregular shape */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-emerald-700 rounded-t-full rounded-b-lg"></div>
        
        {/* Membrane appendages */}
        <div className="absolute top-3 left-4 w-3 h-5 bg-emerald-600 rounded-full transform -rotate-12"></div>
        <div className="absolute top-3 right-4 w-3 h-5 bg-emerald-600 rounded-full transform rotate-12"></div>
        <div className="absolute top-8 left-2 w-4 h-3 bg-emerald-600 rounded-full transform -rotate-45"></div>
        <div className="absolute top-8 right-2 w-4 h-3 bg-emerald-600 rounded-full transform rotate-45"></div>
        
        {/* Sensory nodes */}
        <div className="absolute top-2 left-7 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
        <div className="absolute top-6 left-5 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
        <div className="absolute top-6 right-5 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
        
        {/* Bio-luminescence */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-emerald-200 opacity-60 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 8: Interstellar Voyager
const InterstellarVoyager = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Long cylindrical body */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-14 h-4 bg-gray-500 rounded-full"></div>
        
        {/* Forward sensor array */}
        <div className="absolute top-5 left-2 w-4 h-6 bg-gray-600 rounded-t-full"></div>
        
        {/* Habitat rings */}
        <div className="absolute top-4 left-6 w-4 h-8 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute top-5 left-8 w-4 h-6 border-2 border-gray-400 rounded-full"></div>
        
        {/* Communications dish */}
        <div className="absolute top-4 right-3 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute top-4 right-3 w-4 h-1 bg-white transform rotate-45"></div>
        
        {/* Engine section */}
        <div className="absolute top-6 right-1 w-3 h-4 bg-gray-600 rounded-r-full"></div>
        
        {/* Engine glow */}
        <div className="absolute top-7 right-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 9: Cosmic Behemoth
const CosmicBehemoth = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Massive central structure */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-10 bg-red-900 rounded"></div>
        
        {/* Armored plates */}
        <div className="absolute top-0 left-3 w-10 h-3 bg-red-800 rounded-t-lg"></div>
        <div className="absolute top-11 left-3 w-10 h-3 bg-red-800 rounded-b-lg"></div>
        <div className="absolute top-4 left-0 w-3 h-6 bg-red-800 rounded-l-lg"></div>
        <div className="absolute top-4 right-0 w-3 h-6 bg-red-800 rounded-r-lg"></div>
        
        {/* Weapon emplacements */}
        <div className="absolute top-3 left-4 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-3 right-4 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-9 left-4 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-9 right-4 w-2 h-2 bg-gray-800 rounded-full"></div>
        
        {/* Central command tower */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gray-700 rounded-t-lg"></div>
        
        {/* Engine glow */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-orange-500 rounded-full opacity-70 animate-pulse"></div>
      </div>
    </div>
  );
});

// Design 10: Stellar Phantom
const StellarPhantom = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-16 h-16"
      style={{
        left: `calc(${position.x}% - 32px)`,
        top: `calc(${position.y}% - 32px)`,
        transition: 'transform 0.2s ease',
        transform: `rotate(${(targetPosition.x - position.x) * 0.5}deg)`,
      }}
    >
      <div className="relative">
        {/* Semi-transparent main body */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-indigo-900 bg-opacity-60 rounded"></div>
        
        {/* Shimmering edges */}
        <div className="absolute top-3 left-3 w-10 h-8 border border-indigo-400 opacity-40 rounded"></div>
        
        {/* Core element */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full"></div>
        <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        
        {/* Phase-shift field */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-14 h-14 border border-indigo-300 opacity-20 rounded-full"></div>
        
        {/* Distortion waves */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-indigo-300 opacity-30 rounded-full"></div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-indigo-300 opacity-30 rounded-full"></div>
        <div className="absolute top-7 left-0 w-1 h-10 bg-indigo-300 opacity-30 rounded-full transform rotate-90"></div>
        <div className="absolute top-7 right-0 w-1 h-10 bg-indigo-300 opacity-30 rounded-full transform rotate-90"></div>
      </div>
    </div>
  );
});


const Satellite = forwardRef(({ position, targetPosition }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 w-40 h-40"
      style={{
        left: `calc(${position.x}% - 64px)`,
        top: `calc(${position.y}% - 64px)`,
        transition: "transform 0.5s ease-in-out",
        transform: `rotate(${(targetPosition.x - position.x) * 0.2}deg)`,
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Satellite Core (Main Body) */}
        <div className="relative w-24 h-24 bg-gray-800 rounded-xl border border-gray-500 shadow-2xl flex items-center justify-center">
          <div className="w-10 h-10 bg-gray-600 rounded-lg border border-gray-400"></div>
        </div>

        {/* Solar Panels */}
        <div className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 w-32 h-10 bg-blue-600 border border-blue-400 shadow-lg rounded-md animate-pulse"></div>
        <div className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 w-32 h-10 bg-blue-600 border border-blue-400 shadow-lg rounded-md animate-pulse"></div>

        {/* Antenna Dish */}
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-400 rounded-full border border-gray-200"></div>
        <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gray-300"></div>

        {/* Orbital Glow Effect */}
        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-44 h-44 border-2 border-gray-300 opacity-30 rounded-full animate-spin-slow"></div>

        {/* Rotating Signal Waves */}
        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gray-300 opacity-40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gray-300 opacity-40 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
});




export { 
  Satellite,
  BattleCruiser, 
  NeoRacer, 
  OrbitalStation, 
  NebulaDrifter, 
  AstralNomad,
  QuantumLeaper,
  BioOrganic,
  InterstellarVoyager,
  CosmicBehemoth,
  StellarPhantom
};
// Export all designs
export {Spaceship,SpaceShip2, SpaceCraft3,TriangularFighter, StealthBomber, SpaceCruiser, AlienOrganic, 
        RetroRocket ,InsectoidScout, CrystalVoyager, SolarSailer, QuantumSphere, GalacticExplorer};





import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GoogleStyle404 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would go here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 relative overflow-hidden">
      {/* Moving Bubbles Background - LOWERED Z-INDEX */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`absolute w-10 h-10 rounded-full opacity-50 ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'} animate-bubble`} style={{ left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 5 + 3}s` }}></div>
        ))}
      </div>
      
      {/* Color band at top - INCREASED Z-INDEX */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-white to-blue-700 z-10"></div>
      
      {/* Subtle background pattern - KEPT LOW Z-INDEX */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #f0f0f0 0px, #f0f0f0 10px, transparent 10px, transparent 20px)`
        }}></div>
      </div>
      
      {/* Content Wrapper - ADDED WITH HIGH Z-INDEX */}
      <div className="relative z-20 flex flex-col items-center w-full">
        {/* Logo Area with enhanced styling */}
        <div className="mb-8 flex justify-center relative">
          <div className="text-5xl font-normal tracking-tight relative">
            <span className="text-blue-700 font-medium">4</span>
            <span className="text-red-600 font-medium">0</span>
            <span className="text-blue-700 font-medium">4</span>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="absolute -bottom-4 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
        
        {/* 404 Message with improved styling */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-medium text-gray-800 mb-3">That's an error.</h1>
          <div className="h-1 w-16 mx-auto bg-gradient-to-r from-red-500 via-white to-blue-600 mb-4 rounded-full"></div>
          <p className="text-base text-gray-700 max-w-md">
            The requested URL was not found on this server.
            <span className="block mt-2 text-sm text-gray-500">That's all we know.</span>
          </p>
        </div>
        
        {/* Enhanced Search Bar */}
        <div className="w-full max-w-xl mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:ring-2 focus:ring-blue-600 focus:outline-none appearance-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-full py-3 pl-10 pr-20 ring-1 ring-gray-200 shadow-md" 
              placeholder="Search our site"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1.5 px-4 py-1.5 bg-gradient-to-r from-red-600 to-blue-700 text-white font-medium rounded-full text-sm hover:shadow-lg transition-shadow duration-200"
            >
              Search
            </button>
          </form>
        </div>
        
        {/* Navigation Links with more styling */}
        <div className="w-full max-w-xl mb-10">
          <div className="flex flex-wrap justify-center gap-2 items-center py-2">
            <Link to="/" className="px-4 py-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors duration-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link to="/about" className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200">About</Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link to="/contact" className="px-4 py-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors duration-200">Contact</Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link to="/help" className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200">Help</Link>
          </div>
        </div>

        {/* Suggestion with card styling */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-xl w-full shadow-sm mb-12">
          <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
            <svg className="h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Try these suggestions:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 mr-2 flex-shrink-0">1</span>
              <span>Check the URL for spelling errors</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0">2</span>
              <span>Go back to the <Link to="/" className="text-blue-600 hover:underline font-medium">homepage</Link></span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 mr-2 flex-shrink-0">3</span>
              <span>Use the search bar above to find what you're looking for</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer with red, white and blue theme - INCREASED Z-INDEX */}
      <div className="absolute bottom-0 w-full py-3 border-t border-gray-200 bg-white z-20">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="mb-2 sm:mb-0 text-gray-700">
            &copy; {new Date().getFullYear()} <span className="font-medium">Clinimode</span>
          </div>
          <div className="flex gap-x-6">
            <a href="#" className="text-red-600 hover:underline">Privacy</a>
            <a href="#" className="text-blue-700 hover:underline">Terms</a>
            <a href="#" className="text-red-600 hover:underline">Settings</a>
          </div>
        </div>
      </div>
      
      {/* Tailwind Animation for Bubbles with improved animation */}
      <style>
        {`
          @keyframes bubble {
            0% { transform: translateY(100vh) scale(0.8); opacity: 0.6; }
            50% { opacity: 0.4; }
            100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
          }
          .animate-bubble {
            animation: bubble linear infinite;
            will-change: transform, opacity;
          }
        `}
      </style>
    </div>
  );
};

export default GoogleStyle404;