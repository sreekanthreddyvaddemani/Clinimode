const gradients = [
  "bg-gradient-to-r from-blue-900 to-indigo-900", // 0
  "bg-gradient-to-r from-green-800 to-teal-700", // 1
  "bg-gradient-to-r from-purple-700 to-pink-500", // 2
  "bg-gradient-to-r from-gray-900 to-gray-700", // 3
  "bg-gradient-to-r from-yellow-600 to-orange-500", // 4
  "bg-gradient-to-r from-red-700 to-rose-500", // 5
  "bg-gradient-to-r from-cyan-700 to-blue-500", // 6
  "bg-gradient-to-r from-emerald-600 to-lime-500", // 7
  "bg-gradient-to-r from-sky-600 to-violet-600", // 8
  "bg-gradient-to-r from-indigo-800 to-fuchsia-700", // 9
  "bg-gradient-to-r from-teal-900 to-green-600", // 10
  "bg-gradient-to-r from-pink-900 to-red-700", // 11
  "bg-gradient-to-r from-amber-600 to-yellow-400", // 12
  "bg-gradient-to-r from-blue-800 to-cyan-500", // 13
  "bg-gradient-to-r from-gray-800 to-black", // 14
  "bg-gradient-to-r from-lime-700 to-green-400", // 15
  "bg-gradient-to-r from-fuchsia-800 to-rose-600", // 16
  "bg-gradient-to-r from-indigo-600 to-purple-400", // 17
  "bg-gradient-to-r from-cyan-900 to-blue-700", // 18
  "bg-gradient-to-r from-red-800 to-orange-600", // 19
  "bg-gradient-to-r from-slate-800 to-gray-600", // 20
  "bg-gradient-to-r from-green-900 to-emerald-700", // 21
  "bg-gradient-to-r from-orange-700 to-yellow-500", // 22
  "bg-gradient-to-r from-violet-900 to-indigo-700", // 23
  "bg-gradient-to-r from-rose-700 to-pink-500", // 24
  "bg-gradient-to-r from-gray-700 to-slate-500", // 25
  "bg-gradient-to-r from-blue-700 to-sky-500", // 26
  "bg-gradient-to-r from-emerald-900 to-teal-700", // 27
  "bg-gradient-to-r from-lime-800 to-green-600", // 28
  "bg-gradient-to-r from-purple-900 to-fuchsia-700", // 29
  "bg-gradient-to-r from-indigo-700 to-blue-500", // 30
  "bg-gradient-to-r from-amber-900 to-orange-700", // 31
  "bg-gradient-to-r from-yellow-700 to-lime-500", // 32
  "bg-gradient-to-r from-red-900 to-rose-700", // 33
  "bg-gradient-to-r from-sky-900 to-cyan-700", // 34
  "bg-gradient-to-r from-teal-800 to-emerald-600", // 35
  "bg-gradient-to-r from-fuchsia-900 to-violet-700", // 36
  "bg-gradient-to-r from-orange-900 to-red-700", // 37
  "bg-gradient-to-r from-slate-900 to-gray-700", // 38
  "bg-gradient-to-r from-lime-900 to-green-700", // 39
  "bg-gradient-to-r from-violet-700 to-purple-500", // 40
  "bg-gradient-to-r from-cyan-800 to-teal-600", // 41
  "bg-gradient-to-r from-rose-900 to-pink-700", // 42
  "bg-gradient-to-r from-gray-900 to-slate-700", // 43
  "bg-gradient-to-r from-blue-900 to-indigo-800", // 44
  "bg-gradient-to-r from-teal-700 to-green-500", // 45
  "bg-gradient-to-r from-pink-800 to-red-600", // 46
  "bg-gradient-to-r from-amber-800 to-yellow-600", // 47
  "bg-gradient-to-r from-gray-700 to-slate-500", // 48
  "bg-gradient-to-r from-green-700 to-emerald-500", // 49
  "bg-gradient-to-r from-orange-800 to-yellow-600", // 50
  "bg-gradient-to-r from-violet-800 to-indigo-600", // 51
  "bg-gradient-to-r from-red-800 to-rose-600", // 52
  "bg-gradient-to-r from-blue-800 to-sky-600", // 53
  "bg-gradient-to-r from-emerald-800 to-teal-600", // 54
  "bg-gradient-to-r from-lime-800 to-green-600", // 55
  "bg-gradient-to-r from-purple-800 to-fuchsia-600", // 56
  "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600", // 57 Diagonal rainbow
  "bg-gradient-to-tr from-yellow-300 via-orange-400 to-red-500", // 58 Warm sunset
  "bg-gradient-to-bl from-green-300 via-teal-400 to-cyan-500", // 59 Cool water
  "bg-gradient-to-tl from-indigo-200 via-violet-300 to-purple-400", // 60 Soft lavender
  "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500", // 61 Metallic silver
  "bg-gradient-to-l from-black via-gray-800 to-slate-700", // 62 Deep space
  "bg-gradient-to-b from-yellow-600 via-amber-600 to-orange-700", // 63 Molten gold
  "bg-gradient-to-t from-lime-400 via-green-500 to-emerald-600", // 64 Fresh spring
  "bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-600", // 65 Romantic blossom
  "bg-gradient-to-l from-sky-400 via-blue-500 to-indigo-600", // 66 Calm ocean
  "bg-gradient-to-br from-red-800 via-yellow-600 to-lime-400", // 67 Fire burst
  "bg-gradient-to-tr from-cyan-600 via-blue-400 to-indigo-200", // 68 Arctic sky
  "bg-gradient-to-bl from-purple-800 via-pink-600 to-orange-400", // 69 Cosmic dusk
  "bg-gradient-to-tl from-green-900 via-teal-700 to-cyan-500", // 70 Deep forest
  "bg-gradient-to-r from-slate-600 via-gray-500 to-white", // 71 Foggy dawn
  "bg-gradient-to-l from-amber-700 via-yellow-500 to-lime-300", // 72 Honey glow
  "bg-gradient-to-b from-blue-900 via-purple-700 to-pink-500", // 73 Electric violet
  "bg-gradient-to-t from-red-600 via-rose-500 to-pink-400", // 74 Velvet red
  "bg-gradient-to-br from-indigo-700 via-blue-500 to-cyan-300", // 75 Icy blue
  "bg-gradient-to-tr from-orange-800 via-red-600 to-rose-400", // 76 Fiery sunset
  "bg-gradient-to-bl from-lime-600 via-green-400 to-teal-200", // 77 Grass field
  "bg-gradient-to-tl from-fuchsia-700 via-purple-500 to-indigo-300", // 78 Mystic purple
  "bg-gradient-to-r from-gray-800 via-slate-600 to-slate-400", // 79 Stone texture
  "bg-gradient-to-l from-emerald-800 via-green-600 to-lime-400", // 80 Jade stone
  "bg-gradient-to-b from-yellow-800 via-orange-600 to-red-400", // 81 Lava flow
  "bg-gradient-to-t from-cyan-900 via-blue-700 to-indigo-500", // 82 Night sky
  "bg-gradient-to-br from-pink-700 via-rose-500 to-red-300", // 83 Coral reef
  "bg-gradient-to-tr from-violet-600 via-purple-400 to-indigo-200", // 84 Aura glow
  "bg-gradient-to-bl from-teal-700 via-green-500 to-lime-300", // 85 Rainforest
  "bg-gradient-to-tl from-amber-800 via-yellow-600 to-lime-400", // 86 Desert sun
  "bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-300", // 87 Coastal breeze
  "bg-gradient-to-l from-rose-800 via-pink-600 to-fuchsia-400", // 88 Cherry blossom
  "bg-gradient-to-b from-slate-800 via-gray-600 to-gray-400", // 89 Concrete wall
  "bg-gradient-to-t from-lime-700 via-emerald-500 to-green-300", // 90 Alpine meadow
  "bg-gradient-to-br from-orange-700 via-red-500 to-rose-300", // 91 Autumn leaves
  "bg-gradient-to-tr from-indigo-900 via-blue-700 to-cyan-500", // 92 Deep sea
  "bg-gradient-to-bl from-purple-700 via-fuchsia-500 to-pink-300", // 93 Neon dream
  "bg-gradient-to-tl from-green-800 via-lime-600 to-yellow-400", // 94 Golden hour
  "bg-gradient-to-r from-gray-700 via-slate-500 to-sky-300", // 95 Mountain haze
  "bg-gradient-to-l from-red-900 via-rose-700 to-pink-500", // 96 Crimson tide
  "bg-gradient-to-b from-cyan-800 via-teal-600 to-emerald-400", // 97 Tropical lagoon
  "bg-gradient-to-t from-yellow-900 via-amber-700 to-orange-500", // 98 Solar flare
  "bg-gradient-to-br from-pink-800 via-fuchsia-600 to-violet-400", // 99 Galaxy dust
  "bg-gradient-to-tr from-lime-900 via-green-700 to-teal-500", // 100 Mossy rock
  "bg-gradient-to-bl from-orange-900 via-red-700 to-rose-500", // 101 Ember glow
  "bg-gradient-to-tl from-indigo-600 via-blue-400 to-cyan-200", // 102 Frozen lake
  "bg-gradient-to-r from-purple-600 via-pink-400 to-rose-200", // 103 Silk touch
  "bg-gradient-to-l from-green-700 via-teal-500 to-cyan-300", // 104 Sea foam
  "bg-gradient-to-b from-gray-600 via-slate-400 to-sky-200", // 105 Cloud cover
  "bg-gradient-to-t from-red-700 via-rose-500 to-pink-300", // 106 Blood moon
  "bg-gradient-to-br from-cyan-700 via-blue-500 to-indigo-300", // 107 Ice cave
  "bg-gradient-to-tr from-yellow-700 via-amber-500 to-orange-300", // 108 Sun kissed
  "bg-gradient-to-bl from-pink-600 via-fuchsia-400 to-violet-200", // 109 Dreamscape
  "bg-gradient-to-tl from-lime-600 via-green-400 to-teal-200", // 110 Verdant fields
];


const NotFound = () => {
const getPattern = (index) => {
  const patternIndex = index % 41; // 0-40 patterns
  switch (patternIndex) {
    case 0: // Dense Circles
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)', backgroundSize: '10px 10px' }} />;
    case 1: // Diagonal Lines
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 10px)' }} />;
    case 2: // Checkerboard
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.1) 0deg 90deg, transparent 90deg 180deg)', backgroundSize: '20px 20px' }} />;
    case 3: // Scattered Triangles
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%), linear-gradient(225deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%), linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%), linear-gradient(315deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%)', backgroundPosition: '10px, 10px, 0 0, 0 0', backgroundSize: '20px 20px' }} />;
    case 4: // Small Dots
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '5px 5px' }} />;
    case 5: // Wavy Lines 2
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0 50 C 30 100, 70 0, 100 50\' stroke=\'rgba(255,255,255,0.1)\' fill=\'none\'/%3E%3C/svg%3E")', backgroundSize: '100px 50px' }} />;
    case 6: // Concentric Circles
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 40%), radial-gradient(circle, rgba(255, 255, 255, 0.05) 30%, transparent 60%)', backgroundSize: '60px 60px' }} />;
    case 7: // Zigzag Lines
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%), linear-gradient(225deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }} />;
    case 8: // Horizontal Stripes
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)' }} />;
    case 9: // Random Noise
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3e%3crect width=\'100\' height=\'100\' fill=\'rgba(255,255,255,0.05)\'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'2\' height=\'2\' viewBox=\'0 0 2 2\'%3e%3ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'rgba(255,255,255,0.05)\'/%3e%3c/svg%3e")', backgroundSize: '100px 100px, 2px 2px' }} />;
    case 10: // Diagonal Grid
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 10px), linear-gradient(135deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 10px)', backgroundSize: '20px 20px' }} />;
    case 11: // Interlocking Triangles
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.1) 30%, transparent 30%), linear-gradient(240deg, rgba(255, 255, 255, 0.1) 30%, transparent 30%)', backgroundSize: '20px 20px' }} />;
    case 12: // Small Squares
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.1) 0deg 90deg, transparent 90deg 180deg)', backgroundSize: '10px 10px' }} />;
    case 13: // Distorted Waves
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0 50 C 30 80, 70 20, 100 50\' stroke=\'rgba(255,255,255,0.1)\' fill=\'none\'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0 50 C 30 20, 70 80, 100 50\' stroke=\'rgba(255,255,255,0.1)\' fill=\'none\'/%3E%3C/svg%3E")', backgroundSize: '100px 50px' }} />;
    case 14: // Concentric Squares
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-conic-gradient(from 45deg, rgba(255, 255, 255, 0.1) 0deg 90deg, transparent 90deg 180deg), repeating-conic-gradient(from 45deg, rgba(255, 255, 255, 0.05) 45deg 135deg, transparent 135deg 225deg)', backgroundSize: '40px 40px' }} />;
    case 15: // Irregular Dots
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />;
    case 16: // Angled Stripes
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(60deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }} />;
    case 17: // Random Lines
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cline x1=\'0\' y1=\'0\' x2=\'100\' y2=\'100\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'1\'/%3E%3Cline x1=\'100\' y1=\'0\' x2=\'0\' y2=\'100\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'1\'/%3E%3Cline x1=\'50\' y1=\'0\' x2=\'50\' y2=\'100\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'1\'/%3E%3Cline x1=\'0\' y1=\'50\' x2=\'100\' y2=\'50\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '50px 50px' }} />;
    case 18: // Textured Squares
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.1) 0deg 90deg, transparent 90deg 180deg), repeating-conic-gradient(from 45deg, rgba(255, 255, 255, 0.05) 0deg 90deg, transparent 90deg 180deg)', backgroundSize: '20px 20px' }} />;
    case 19: // Circular Grid
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px), repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.1) 0deg 90deg, transparent 90deg 180deg)', backgroundSize: '20px 20px' }} />;
    case 20: // Hexagon Grid
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'35\' viewBox=\'0 0 40 35\'%3E%3Cpath d=\'M0 17.5L20 0l20 17.5l-20 17.5z\' fill=\'none\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '40px 35px' }} />;
    case 21: // Starburst
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />;
    case 22: // Curved Lines
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0 50 C 50 0, 100 50, 50 100\' stroke=\'rgba(255,255,255,0.1)\' fill=\'none\'/%3E%3C/svg%3E")', backgroundSize: '100px 100px' }} />;
    case 23: // Thin Vertical Stripes
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '5px 100%' }} />;
    case 24: // Tiny Triangles
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 10%, transparent 10%), linear-gradient(225deg, rgba(255, 255, 255, 0.1) 10%, transparent 10%)', backgroundSize: '10px 10px' }} />;
    case 25: // Diamond Grid
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Cpath d=\'M10 0L20 10L10 20L0 10z\' fill=\'none\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '20px 20px' }} />;
    case 26: // Nested Circles
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 20%), radial-gradient(circle, rgba(255, 255, 255, 0.05) 10%, transparent 30%)', backgroundSize: '40px 40px' }} />;
    case 27: // Slanted Lines
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 10px)' }} />;
    case 28: // Tiny Squares
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.1) 0deg 90deg, transparent 90deg 180deg)', backgroundSize: '5px 5px' }} />;
    case 29: // Ripples
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />;
    case 30: // Crossed Lines
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)' }} />;
    case 31: // Small Ellipses
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />;
    case 32: // Wavy Grid
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'50\' viewBox=\'0 0 100 50\'%3E%3Cpath d=\'M0 25 C 25 0, 75 50, 100 25\' stroke=\'rgba(255,255,255,0.1)\' fill=\'none\'/%3E%3C/svg%3E"), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '100px 50px, 100% 5px' }} />;
    case 33: // Tiny Stars
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'10\' viewBox=\'0 0 10 10\'%3E%3Cpath d=\'M5 0L6.12 3.8H10L6.87 6.12L8 10L5 8L2 10L3.12 6.12L0 3.8H3.88z\' fill=\'rgba(255,255,255,0.1)\'/%3E%3C/svg%3E")', backgroundSize: '10px 10px' }} />;
    case 34: // Intersecting Circles
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />;
    case 35: // Dot Grid
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />;
    case 36: // Triangle Grid
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.1) 75%), linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.1) 75%)', backgroundSize: '10px 10px' }} />;
    case 37: // Offset Squares
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.1) 0deg 90deg, transparent 90deg 180deg)', backgroundSize: '20px 10px' }} />;
    case 38: // Thin Diagonal Lines
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 5px)' }} />;
    case 39: // Centered Dots
      return <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />;
      case 40: // Diagonal Fade
      return (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 70%)',
            backgroundSize: '30px 30px',
            opacity: 0.5
          }}
        />
      );   default:
      return null;
  }
};

// Generate all combinations systematically
const generateCombinations = () => {
  const combinations = [];
  // For each gradient (0-110)
  for (let gradientIndex = 0; gradientIndex < gradients.length; gradientIndex++) {
    // For each pattern (0-40)
    for (let patternIndex = 0; patternIndex < 41; patternIndex++) {
      combinations.push({
        gradientIndex: gradientIndex,
        patternIndex: patternIndex
      });
    }
  }
  return combinations;
};

const combinations = generateCombinations();

return (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 min-h-screen bg-gray-100">
    {combinations.map((combination, index) => (
      <div
        key={index}
        className="relative font-sans text-gray-700 overflow-hidden min-h-[250px] flex items-center justify-center rounded-lg shadow-lg"
      >
        <div className={`absolute inset-0 ${gradients[combination.gradientIndex]} z-0`}></div>
        {getPattern(combination.patternIndex)}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">404</h1>
          <p className="text-lg text-gray-200 mt-2">
            Gradient: {combination.gradientIndex} <br />
            Pattern: {combination.patternIndex}
          </p>
        </div>
      </div>
    ))}
  </div>
);
};

export default NotFound;


