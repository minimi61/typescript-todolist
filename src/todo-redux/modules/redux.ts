const ADD_TODO = 'todo/ADD_TODO' as const;

export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    content
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
    default:
      return state
  }
}

export default todoReducer;