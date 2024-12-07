"use client"

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const airplaneRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const airplane = airplaneRef.current
    if (!airplane) return

    let progress = 0
    let animationId: number

    const animate = () => {
      progress += 0.001
      if (progress > 1) progress = 0

      const point = airplane.getPointAtLength(progress * airplane.getTotalLength())
      airplane.setAttribute('transform', `translate(${point.x}, ${point.y})`)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[200%] h-[200%] opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* Circular routes */}
        <path
          d="M500,100 A400,400 0 1,1 500,900 A400,400 0 1,1 500,100"
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
        />
        <path
          d="M300,300 A300,300 0 1,0 700,700 A300,300 0 1,0 300,300"
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
        />
        <path
          d="M400,200 A350,350 0 1,1 600,800 A350,350 0 1,1 400,200"
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
        />

        {/* Airplane icon */}
        <path
          ref={airplaneRef}
          d="M25,25 L31.7,19.3 Q32.8,18.5 32.2,17.3 L28.9,10 Q28.3,8.8 27.1,9.2 L21.5,11.1 L16.9,5.7 Q16.2,4.9 15.1,5.4 L12,7 Q10.9,7.5 11.4,8.6 L15.1,15.3 L9.9,17.8 L7.9,15.8 Q7.4,15.3 6.6,15.5 L5,16 Q4.2,16.2 4.3,17 L5.4,21.7 Q5.5,22.5 6.3,22.5 L11,21.9 L16.5,20.3 L24.5,26.2 Q25.4,26.8 26.2,26.2 Z"
          fill="#15803d"
        >
          <animateMotion
            dur="60s"
            repeatCount="indefinite"
            path="M500,100 A400,400 0 1,1 500,900 A400,400 0 1,1 500,100"
          />
        </path>
      </svg>
    </div>
  )
}

