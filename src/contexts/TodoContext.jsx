import { useContext, createContext } from "react";



export const TodoContext = createContext({
    Todos : [
        {
            id : 1,
            todo : "This is first todo",
            completed : false
        }
    ]
})

export default function useTodo(){
    return useContext(TodoContext);
}