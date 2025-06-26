import React from 'react'

const EvonnexisLogo = ({ width = 280, height = 70, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 350 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* EV Logo Gradients */}
        <linearGradient id="evGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1e1b4b', stopOpacity: 1 }} />
          <stop offset="30%" style={{ stopColor: '#3730a3', stopOpacity: 1 }} />
          <stop offset="60%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#8b5cf6', stopOpacity: 1 }}
          />
        </linearGradient>

        {/* Text Gradients */}
        <linearGradient id="mainTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#1e1b4b', stopOpacity: 1 }} />
          <stop offset="25%" style={{ stopColor: '#3730a3', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
          <stop offset="75%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#6366f1', stopOpacity: 1 }}
          />
        </linearGradient>

        {/* Subtitle Gradient */}
        <linearGradient id="subTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#6b7280', stopOpacity: 1 }}
          />
        </linearGradient>

        {/* Drop shadow */}
        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="1"
            dy="2"
            stdDeviation="2"
            floodColor="#000000"
            floodOpacity="0.15"
          />
        </filter>
      </defs>

      {/* Simple EV Logo */}
      <g transform="translate(10, 20)">
        {/* Stylish background circle */}
        <circle
          cx="25"
          cy="20"
          r="22"
          fill="url(#evGradient)"
          filter="url(#logoShadow)"
        />

        {/* EV Text */}
        <text
          x="25"
          y="28"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="18"
          fontWeight="800"
          fill="white"
          textAnchor="middle"
          letterSpacing="1px"
        >
          EV
        </text>
      </g>

      {/* Main Company Name */}
      <text
        x="70"
        y="45"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#mainTextGradient)"
        letterSpacing="1.5px"
      >
        EVONNEXIS
      </text>

      {/* Tagline */}
      <text
        x="70"
        y="62"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="11"
        fontWeight="400"
        fill="url(#subTextGradient)"
        letterSpacing="0.8px"
      >
        Towards Infinity
      </text>
    </svg>
  )
}

export default EvonnexisLogo
