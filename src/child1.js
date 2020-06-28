import React  from 'react';
import CounterContext from './CounterContext';


const Coder1 = ()=>{
    return(
        
        <CounterContext.Consumer>
           {
               (data)=>{
               return <h1>Hello {data}</h1>
            }
           }
        </CounterContext.Consumer>
    )
}
export default Coder1;