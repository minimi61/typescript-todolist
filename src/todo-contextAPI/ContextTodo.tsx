import React,{createContext, useContext, useReducer,Dispatch, Children, ReactNode} from 'react'

type State = {
  id: number;
  content: string;
  complete: boolean
}

type Action = 
  | { type: 'Add_Todo'; content: string }
  | { type: 'Remove_Todo'; content: string }
  | { type: 'Toggle_complete'; complete: boolean }

type todoDispatch = Dispatch<Action>

const stateContext = createContext<State | null>(null)
const dispatchContext = createContext<todoDispatch | null>(null)

function reducer(state: State, action: Action): any {
  switch (action.type) {
    case 'Add_Todo':
      return {
        ...state,
        content: action.content
      }
  }
}

export function ContextTodoProvider ({children} : {children : ReactNode})  {
  const [state, dispatch] = useReducer(reducer, {
    id: 0,
    content: '블라블라',
    complete: false
  })

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