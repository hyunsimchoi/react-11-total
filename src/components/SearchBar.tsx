import { useNavigate } from "react-router";
import { useEffect, useState, type FormEvent } from "react";
import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";

// 검색창 전체
const Form = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
    max-width: 650px;
    margin: 24px 0;
`;

// 검색어 입력창
const Input = styled.input`
    flex: 1;
    min-width: 0;
    padding: 14px 16px;

    border: 1px solid #77764b;
    border-radius: 10px;
    background: #f4e9c9;
    color: #252b13;

    &::placeholder {
        color: #777765;
    }

    body.black-theme & {
        background: #252525;
        color: #ffffff;
        border-color: #505050;
    }
`;

// 검색 버튼
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 14px 22px;
    border: none;
    border-radius: 10px;
    background: #b9bd90;
    color: #252b13;
    cursor: pointer;

    &:hover {
        background: #d3d7a8;
    }

    body.black-theme & {
        background: #414141;
        color: #ffffff;
    }
`;

type SearchBarProps = {
    keyword: string | null;
};

function SearchBar({ keyword }: SearchBarProps) {
    const navigate = useNavigate();

    const [input, setInput] = useState(keyword ?? "");

    // 주소의 검색어가 변경되면 입력창에도 반영
    useEffect(() => {
        setInput(keyword ?? "");
    }, [keyword]);

    function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const k = input.trim();

        if (!k) return;

        navigate(`/movie?keyword=${encodeURIComponent(k)}`);
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Input
                type="text"
                placeholder="영화 제목을 입력하세요"
                value={input}
                onChange={event => setInput(event.target.value)}
            />

            <Button type="submit">
                <FaMagnifyingGlass />
                검색
            </Button>
        </Form>
    );
}

export default SearchBar;
