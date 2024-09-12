"use client"
import React, {useState, useEffect} from 'react'
import { FizziLogo } from '@/components/FizziLogo'

type Props = {}

type childType = {
    children : React.ReactNode
}

const Header = (props: Props) => {
  const colors = ['text-[#FE3489]', 'text-[#BE1347]', 'text-[#7EC025]', 'text-[#DDA2F2]', 'text-[#2BAD2F]'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 3000); 
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className='flex justify-center py-4 -mb-28'>

      <FizziLogo className={`z-10 h-20 cursor-pointer transition-colors duration-1000 ease-in-out ${colors[currentColorIndex]}`} />

    </div>
  )
}

export default Header