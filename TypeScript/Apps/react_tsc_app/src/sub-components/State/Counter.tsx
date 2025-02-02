import React, { useReducer } from 'react'
import MyButton from '../MyButton';

type CoutnerState = {
    count: number
}
type CounterAction = {
    type: 'increment' | 'decrement' ;
    payload: number
}
const initialState = { count: 0 }

function reducer(state: CoutnerState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <>
          <div className='py-10'>
              Count: {state.count}
              <MyButton title='increment 10' styles={'bg-green-500'}  handleClick={() => dispatch({ type: 'increment', payload: 10 })}/>
              <MyButton title='decrement 10' styles={'bg-red-500'}  handleClick={()=> dispatch({type: 'decrement', payload: 10})}/>
          </div>
      </>
  )
}

export default Counter