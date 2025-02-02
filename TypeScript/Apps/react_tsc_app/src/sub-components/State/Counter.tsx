import  { useReducer } from 'react'
import MyButton from '../Test/MyButton';

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
const initialState = { count: 0 }

function reducer(state: CoutnerState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
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
              <MyButton title='increment 10' styles={'bg-green-300'}  handleClick={() => dispatch({ type: 'increment', payload: 10 })}/>
              <MyButton title='decrement 10' styles={'bg-red-300'}  handleClick={()=> dispatch({type: 'decrement', payload: 10})}/>
              <MyButton title='Reset' styles={'bg-yellow-300'}  handleClick={()=> dispatch({type: 'reset'})}/>
          </div>
      </>
  )
}

export default Counter