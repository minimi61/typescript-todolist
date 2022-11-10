import React,{createContext, useContext, useReducer,Dispatch, Children, ReactNode} from 'react'

type State = {
  id: number;
  content: string;
  complete: boolean
}
type ArrayState = State[]

type Action = 
  | { type: 'Add_Todo'; content: string }
  | { type: 'Remove_Todo'; id: number }
  | { type: 'Toggle_complete'; id: number }

type todoDispatch = Dispatch<Action>

const stateContext = createContext<ArrayState | null>(null)
const dispatchContext = createContext<todoDispatch | null>(null)

function reducer(state: ArrayState, action: Action): any {
  switch (action.type) {
    case 'Add_Todo':
      return state.concat({
        id: Math.random(),
        content: action.content,
        complete: false
      })
    case 'Remove_Todo':
        return state.filter((x)=> x.id !== action.id)
    case 'Toggle_complete':  
        return state.map((x) => x.id === action.id ? {...x, complete: !x.complete } : x )
  }
}

export function ContextTodoProvider ({children} : {children : ReactNode})  {
  const [state, dispatch] = useReducer(reducer, [{
    id: 0,
    content: '블라블라',
    complete: false
  }])

  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
   </stateContext.Provider>
  )
}


export function useTodo() {
  const state = useContext(stateContext)
  if(!state) throw new Error('Cannot find sampleProvider')
  return state
}

export function useTodoDispatch() {
  const dispatch = useContext(dispatchContext)
  if(!dispatch) throw new Error('Cannot find sampleProvider')
  return dispatch
}