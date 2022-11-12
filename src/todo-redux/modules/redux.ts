const ADD_TODO = 'todo/ADD_TODO' as const;
const REMOVE_TODO = 'todo/REMOVE_TODO' as const;
const TOGGLE_TODO = 'todo/TOGGLE_TODO' as const;

export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    content
  }
})

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: {
    id: id,
  }
})

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: {
    id: id,
  }
})


export type Todo = {
  id: number;
  content: string;
  complete: boolean;
}

export type TodoState = Todo[]


type TodoAction = 
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>


let nextId = 0;

const initialState:TodoState = [{
  id: nextId++,
  content: '블라블라',
  complete : false
}]



const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        content: action.payload.content,
        complete: false
      })
    case REMOVE_TODO:
      return state.filter((x) => x.id !== action.payload.id)
    case TOGGLE_TODO:
      return state.map((x) => x.id === action.payload.id ? {...x, complete: !x.complete} : x)
  default:
      return state
  }
}

export default todoReducer;