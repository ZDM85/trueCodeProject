    import React, { useState, useRef, useEffect } from 'react';
 


const SvgComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);
 
  const handleMouseMove = event => {
    setPosition({ x: event.pageX, y: event.pageY });
  };
 
  useEffect(() => {
    if (svgRef.current !== null) {
      svgRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);
 
  return (
    <svg width="100" height="100" onMouseMove={handleMouseMove} ref={svgRef}>
      <path d="M10 10 L90 90" />
    </svg>
  );
};
 
export default SvgComponent;
   
