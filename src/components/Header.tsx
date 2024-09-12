"use client"
import React, {useState, useEffect} from 'react'
import { FizziLogo } from '@/components/FizziLogo'

type Props = {}

type childType = {
    children : React.ReactNode
}

const ColorTransitionComponent = ({ children}:childType) => {
    const colors = ['text-[#FE3489]', 'text-[#BE1347]', 'text-[#7EC025]', 'text-[#DDA2F2]', 'text-[#2BAD2F]'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 3000); 
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className={`transition-colors duration-1000 ease-in-out ${colors[currentColorIndex]}`}>
        {children}
      </div>
    );
  };

const Header = (props: Props) => {
  return (
    <div className='flex justify-center py-4 -mb-28'>
        <ColorTransitionComponent>
        <FizziLogo className='h-20 z-10 cursor-pointer' />
        </ColorTransitionComponent>
    </div>
  )
}

export default Header