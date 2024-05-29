/*
 * Uncontrolled components
 * components that keep track of their own states and release data only when some event occurs.
 * ie: Submit event for HTML forms
 * 
 */

import { useState } from "react"

/*
 * Controlled components
 * components that do not keep track of their own states - all the state is passed as props.
 * ie: when we use useState hook with text inputs
 * 
 */

/*
 * We generally prefer controlled components. you can do validation before clicking submit button
 */

const ControlledComponent=({onSubmit}:{onSubmit:(data:any)=>void})=>{
    //NOTE: if we use createRef instead of useState hook it becomes uncontrolled component
   const [text,setText]= useState('')
   const [number,setNumber]= useState(0)
   function handleSubmit(e:any) {
    e.preventDefault()
    console.log({text,number})
    onSubmit(text)
    //Basically each of these inputs is just handling its own state until we submit the form. At which point we get all of the values.
   }
   return <form action="" onSubmit={handleSubmit}>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <input type="text" value={number} onChange={(e)=>setNumber(parseFloat(e.target.value))}/>
   </form> 
}

<ControlledComponent onSubmit={(data)=>{
    console.log({data})
    //post request to backend with data
}}/>