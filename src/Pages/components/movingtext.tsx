import React from 'react';

const MovingText: React.FC = () => {
  return (
    <div className="relative bg-[#000] text-white py-4 px-3">
     <div className="absolute top-0 left-0 overflow-hidden w-full">
  <div className="whitespace-nowrap animate-marquee text-sm font-bold font-graffiti">
    <span className='text-sm'>
      <span className="text-green-500">MadeByGHL</span> — Grateful in Every Thread ✨ |
      Premium fashion crafted with gratitude • Shop the latest collection now!
    </span>
  </div>
</div>
    </div>
  );
};

export default MovingText;
