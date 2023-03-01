"use client"
import { useState,useEffect } from 'react'
import { useTheme } from 'next-themes'
import { CgDarkMode } from 'react-icons/cg';
const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const {systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])

      const themeMode=theme==="system"? systemTheme : theme
     

  return (
   
    <div>
        {
            mounted && (
                themeMode ==="dark" ?
                <CgDarkMode onClick={()=>setTheme('light')} className='cursor-pointer' size={25}/> :
                <CgDarkMode onClick={()=>setTheme('dark')} className='cursor-pointer' size={25}/> 
            )
           
        }
    
    </div>
  )
}

export default ThemeComp
