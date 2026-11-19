import { useState } from "react";

type TodoItem = {
    id: number;
    text: string;
    completed: boolean;
};

function Todo() {
    const [text, setText] = useState(""); // 1. 입력창의 글자
    const [todos, setTodos] = useState<TodoItem[]>([]); // 2. 할 일 목록

    // 3. 추가 버튼을 누르면 실행되는 함수(할 일 추가)
    function addTodo() {
        if (text.trim() === "") {
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setText("");
    }
    // 완료 여부 변경
    function toggleTodo(id: number) {
        setTodos(
            todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );
    }

    // 할 일 삭제
    function deleteTodo(id: number) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <h1>Todo 페이지</h1>
            <p>할 일을 관리하는 공간입니다.</p>

            <input
                type="text"
                placeholder="할 일을 입력하세요"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button type="button" onClick={addTodo}>
                추가
            </button>

            <h2>할 일 목록</h2>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />

                        {todo.text}

                        <button type="button" onClick={() => deleteTodo(todo.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
