import { useState, useEffect } from "react";

type TodoItem = {
    id: number;
    text: string;
    completed: boolean;
};

function Todo() {
    const [text, setText] = useState("");             // 1. 입력창의 글자
    const [todos, setTodos] = useState<TodoItem[]>(() => {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            return JSON.parse(savedTodos);
        }

        return [];
    });

    // 2. 할 일 목록 자동 저장
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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

    // Enter 키 또는 추가버튼 눌렀을 때
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        addTodo();
    }

    // 4. 완료 상태 변경
    function toggleTodo(id: number) {
        setTodos(
            todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );
    }

    // 5. 할 일 삭제
    function deleteTodo(id: number) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="todo-page">
            <h1>Todo 페이지</h1>
            <p>할 일을 관리하는 공간입니다.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

                <button type="submit">추가</button>
            </form>
            <h2>할 일 목록</h2>

            <ul className="todo-list">
                {todos.map(todo => (
                    <li className="todo-item" key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />

                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                opacity: todo.completed ? 0.6 : 1,
                            }}>
                            {todo.text}
                        </span>

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
