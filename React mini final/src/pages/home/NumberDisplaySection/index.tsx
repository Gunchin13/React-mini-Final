import React, { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';

const NumberDisplaySection = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true); 
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current); 
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div className="mx-30 pt-10">
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-center justify-center" ref={countRef}>
          <img
            src="https://dt-wine.myshopify.com/cdn/shop/files/icon1_4773b000-caeb-41a6-8379-27e6f4655902.png?v=1613700991"
            alt=""
          />
          <div className="text-center leading-12">
            {hasStarted && (
              <CountUp className='font-medium text-2xl' start={0} end={7254} duration={10} separator="," />
            )}
            <h1 className="text-[#c1001c] font-medium">HAPPY CUSTOMERS</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center" ref={countRef}>
          <img
            src="https://dt-wine.myshopify.com/cdn/shop/files/icon4_7c645993-4d87-4037-adf0-7e190322e884.png?v=1613700991"
            alt=""
          />
          <div className="text-center leading-12">
            {hasStarted && (
              <CountUp className='font-medium text-2xl' start={0} end={1276} duration={15} separator="," />
            )}
            <h1 className="text-[#c1001c] font-medium">AWARDS WON</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center" ref={countRef}>
          <img
            src="https://dt-wine.myshopify.com/cdn/shop/files/icon2_47e22c8c-7fc7-4cde-9cac-f36d891608d2.png?v=1613700991"
            alt=""
          />
          <div className="text-center leading-12">
            {hasStarted && (
              <CountUp className='font-medium text-2xl' start={0} end={386} duration={25} separator="," />
            )}
            <h1 className="text-[#c1001c] font-medium">WORKING MEMBERS</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center" ref={countRef}>
          <img
            src="https://dt-wine.myshopify.com/cdn/shop/files/icon3_c18d7414-50b3-4d04-a939-cd42a31081d4.png?v=1613700991"
            alt=""
          />
          <div className="text-center leading-12">
            {hasStarted && (
              <CountUp className='font-medium text-2xl' start={0} end={30} duration={15} separator="," />
            )}
            <h1 className="text-[#c1001c] font-medium">BRANCHES</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberDisplaySection;
