export default function Index() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Blue curved line at top */}
      <svg
        className="absolute top-8 md:top-16 left-4 md:left-20 w-60 md:w-80 h-16 md:h-24"
        viewBox="0 0 320 96"
        fill="none"
      >
        <path 
          d="M20 60 Q100 20 180 40 T320 30" 
          stroke="#60A5FA" 
          strokeWidth="3" 
          fill="none"
        />
        {/* Connection points */}
        <circle cx="20" cy="60" r="4" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" />
        <circle cx="180" cy="40" r="4" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" />
        <circle cx="320" cy="30" r="4" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" />
      </svg>

      {/* Red rectangle at top right */}
      <div className="absolute top-6 md:top-12 right-8 md:right-32 w-16 md:w-24 h-10 md:h-16 bg-red-500 rounded-sm"></div>

      {/* Main yellow banner */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          {/* Yellow banner with black border */}
          <div className="bg-yellow-400 px-8 md:px-16 py-4 md:py-8 border-2 md:border-4 border-black relative">
            <h1 className="text-3xl md:text-6xl font-bold text-black">Figma basics</h1>
            {/* Selection handles */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 border-blue-500"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border-2 border-blue-500"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-blue-500"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 border-blue-500"></div>
          </div>

          {/* Purple rectangle on the right */}
          <div className="absolute top-4 md:top-8 -right-16 md:-right-32 w-12 md:w-20 h-8 md:h-12 bg-purple-500 rounded-sm"></div>
        </div>
      </div>

      {/* Blue rectangle at bottom left */}
      <div className="absolute bottom-16 md:bottom-32 left-16 md:left-56 w-12 md:w-20 h-8 md:h-12 bg-blue-500 rounded-sm"></div>

      {/* Pink/coral curved line at bottom right */}
      <svg
        className="absolute bottom-10 md:bottom-20 right-4 md:right-20 w-60 md:w-80 h-24 md:h-32"
        viewBox="0 0 320 128"
        fill="none"
      >
        <path 
          d="M20 60 Q160 100 320 40" 
          stroke="#F87171" 
          strokeWidth="4" 
          fill="none"
        />
        {/* Connection points */}
        <circle cx="20" cy="60" r="4" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
        <circle cx="160" cy="100" r="4" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
        <circle cx="320" cy="40" r="4" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
      </svg>

      {/* Small decorative triangle */}
      <div className="absolute top-16 md:top-24 right-12 md:right-40">
        <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-red-500"></div>
      </div>

      {/* Small decorative triangle near bottom rectangle */}
      <div className="absolute bottom-24 md:bottom-40 left-12 md:left-44">
        <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-8 border-b-gray-800"></div>
      </div>

      {/* Cursor arrow near purple rectangle */}
      <div className="absolute top-8 md:top-16 right-4 md:right-16">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M0 0L20 8L8 12L4 20L0 0Z" fill="#6B7280"/>
        </svg>
      </div>
    </div>
  );
}
