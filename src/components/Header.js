// import React from 'react'
import { FaLaptop,FaTabletAlt,FaMobileAlt } from 'react-icons/fa'
import { useWindowSize } from '../hooks/useWindowSize';





export const Header = ({title}) => {
  const{width}=useWindowSize();
  return (
    <header className='bg-blue-400 text-black h-16 text-lg text-center content-center' ><h1>{title}</h1>
    {width<768?<FaMobileAlt/>:width<992?<FaTabletAlt/>:<FaLaptop/> }
    </header>
  )
}
