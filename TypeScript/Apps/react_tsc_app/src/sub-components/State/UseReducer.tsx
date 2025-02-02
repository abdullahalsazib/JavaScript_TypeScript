import { useReducer } from 'react';

type CoutnerState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement';
    payload: number;
}
type ResetAction = {
    type: 'reset'
}
type CounterAction = UpdateAction | ResetAction
const initilezer = { count: 0 }

const reducer = ( state: CoutnerState, action:  CounterAction) => {
     switch (action.type) {
          case 'increment':
               return { count: state.count + action.payload }
          case 'decrement':
               return {count: state.count - action.payload}
          case 'reset':
               return initilezer
          default:
               throw new Error();
     }
}

const UseReducer = () => {
     const [state, dispatch] = useReducer(reducer, initilezer)
     return (
          <div className='flex gap-5 flex-col'>
               <div className='space-x-2'>
                    Use Reducre
               <h1>count: {state.count}</h1>
               <button className='my_btn' onClick={()=> dispatch({type: 'decrement', payload: 1})}>decrement</button>
               <button className='my_btn' onClick={()=> dispatch({type: 'increment', payload: 1})}>increment</button>
               <button className='my_btn' onClick={()=> dispatch({type: 'reset'})}>reset</button>
         
               </div>
                </div>
     );
}

export default UseReducer;
