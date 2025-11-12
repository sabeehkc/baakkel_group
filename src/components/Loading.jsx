const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Loading Content */}
      <div className="relative flex items-center justify-center">
        {/* Outer Spinning Ring */}
        <div className="absolute w-32 h-32 border-4 border-gray-200 border-t-primary-cyan rounded-full animate-spin"></div>
        
        {/* Middle Spinning Ring */}
        <div className="absolute w-24 h-24 border-4 border-transparent border-r-primary-teal rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        
        {/* Logo Container - Centered */}
        <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-black rounded-full">
          <img
            src="/logo.png"
            alt="Baakkel Group Logo"
            className="h-16 w-auto"
            onError={(e) => {
              // Fallback if logo doesn't exist
              e.target.style.display = 'none';
              const fallback = e.target.parentElement;
              if (fallback) {
                fallback.innerHTML = '<div class="text-2xl font-bold text-primary-cyan">BG</div>';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;

