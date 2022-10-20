import React , {useState , useEffect} from 'react'
import Header from '../components/Header/Header'



export const Layout = (props:any) => {
  
  return (
    <>
    
    <div id="layout-wrapper">
        <Header/>
        <div className="main-content">{props.children}</div>
      </div>
    
     
    </>
  )
}