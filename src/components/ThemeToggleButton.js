import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () =>{
    
    const [toggle,setToggle] = useState('Switch to dark theme');
    const {theme,setTheme} = useContext(ThemeContext);

    let global = () =>{
        if(toggle === 'Switch to dark theme'){
            setTheme('dark')
            setToggle('Switch to light theme');
        }else{
            setTheme('light');
            setToggle('Switch to dark theme');
        }
    }
    return (
       <>
       <button className={`btn btn-${theme} txt-${theme}`} id='global-theme-toggler' onClick={global}>{toggle}</button>
       </>
    )

}
export {ThemeToggleButton}
