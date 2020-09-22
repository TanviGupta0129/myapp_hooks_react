

import React,{ Component, useState } from "react"

{/*import React,{Componenet,useState} from "react"

const MyComp=(props)=>{
{/*const[count,setCount]=useState(props.count)*/}
// const increment=()=>{
//   setCount(count+1)
// }

{/*count[state,setState]=useState({
  count:props.count,
  text:''
})
return(
<div><p>the current count is {count}</p>
{/*<button onClick={increment}>increment</button>
<button onClick={()=>setCount(count+1)}>increment</button>
<button onClick={()=>setCount(count+1)}>increment</button>
<button onClick={()=>setCount(count+-1)}>decrement</button>
<button onClick={()=>setCount(0)}>reset</button>
*/
}
{/*<p>the current {state.text||'count'}is {state.count}</p>
<button onClick={()=>setState({count:state.count+1})}>increment</button>
<button onClick={()=>setState({count:state.count+-1})}>decrement</button>
<button onClick={()=>setState({count:0})}>reset</button>
<input type="text" value={state.text} onChange={(e)=>setState({text:e.target.value})}/>

</div>


)
}
MyComp.defaultProps={
  count:0
}
export default MyComp
*/}



const MyComp =(props) =>{

    const [state, setState] = useState({
        count: props.count,
        text: ''
    })

    return (
        <div>
            <p>The current {state.text || 'count'} is {state.count}</p>
            <button onClick={() => setState({count: state.count - 1 })}>-1</button>
            <button onClick={() => setState({ count: props.count })}>reset</button>
            <button onClick={() => setState({ count: state.count + 1 })}>+1</button>
            <input value={state.text} onChange={(e) => setState({ text: e.target.value })} />
        </div>
    )
}

MyComp.defaultProps={
    count:0
}
export default  MyComp
