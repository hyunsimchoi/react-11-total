import { useState } from "react";

function Todo() {
    const [text, setText] = useState("");

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

            <button type="button">추가</button>

            <p>현재 입력한 내용: {text}</p>
        </div>
    );
}

export default Todo;
