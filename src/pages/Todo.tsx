import { useState, useEffect } from "react";
import styled from "styled-components";

type TodoItem = {
    id: number;
    text: string;
    completed: boolean;
};

// Todo 페이지 전체
const TodoPage = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h1 {
    color: #f5ecd2;
    font-size: 28px;
  }

  body.black-theme & h1 {
    color: #ffffff;
  }
`;

// 할 일 입력 영역
const TodoForm = styled.form`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

// 할 일 입력창
const TodoInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 12px;
  border: 1px solid #77764b;
  border-radius: 8px;

  body.black-theme & {
    background: #202020;
    color: #ffffff;
    border-color: #505050;
  }
`;

// 추가 버튼
const AddButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #b9bd90;
  color: #252b13;
  cursor: pointer;

  body.black-theme & {
    background: #444444;
    color: #ffffff;
  }
`;

// 할 일 목록
const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

// 할 일 하나
const TodoRow = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  margin-bottom: 10px;
  background: #f4e9c9;
  color: #252b13;
  border-radius: 8px;

  body.black-theme & {
    background: #252525;
    color: #ffffff;
  }
`;

// 체크박스
const TodoCheckbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #777d48;
  cursor: pointer;
`;

// 삭제 버튼
const DeleteButton = styled.button`
  margin-left: auto;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: #777d48;
  color: #ffffff;
  cursor: pointer;

  body.black-theme & {
    background: #333333;
    color: #ffffff;
  }
`;

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
        <TodoPage>
            <h1>Todo 페이지</h1>
            <p>할 일을 관리하는 공간입니다.</p>

            <TodoForm onSubmit={handleSubmit}>
                <TodoInput
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

                <AddButton type="submit">추가</AddButton>
            </TodoForm>

            <h2>할 일 목록</h2>

            <TodoList>
                {todos.map(todo => (
                    <TodoRow key={todo.id}>
                        <TodoCheckbox
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

                        <DeleteButton type="button" onClick={() => deleteTodo(todo.id)}>
                            삭제
                        </DeleteButton>
                    </TodoRow>
                ))}
            </TodoList>
        </TodoPage>
    );
}

export default Todo;
