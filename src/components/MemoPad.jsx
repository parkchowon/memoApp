import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateMemo } from "../redux/reducers/memo.reducer";
import MemoList from "./MemoList";

function MemoPad() {
  const selectedId = useSelector((state) => state.memo.selectedMemo);
  const memos = useSelector((state) => state.memo.memos);

  const memo = memos.filter((memo) => {
    return memo.id === selectedId;
  })[0].context;

  const dispatch = useDispatch();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();

  const handleTextOnChange = (text) => {
    text
      ? dispatch(updateMemo(text, selectedId))
      : dispatch(updateMemo("새로운 메모", selectedId));
  };

  return (
    <Wrapper>
      <MemoList />
      <div className="pad">
        <p>
          {year}년 {month + 1}월 {day}일, {hour > 12 ? "오후" : "오전"} {hour}:
          {minute}
        </p>
        <textarea
          value={memo === "새로운 메모" ? "" : memo}
          onChange={(e) => handleTextOnChange(e.target.value)}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1020px;
  height: 500px;
  display: flex;
  border: 1px solid gainsboro;
  box-shadow: 0 0 10px gainsboro;
  border-radius: 10px;

  .pad {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      text-align: center;
      padding: 18px 0;
      font-size: 10px;
      color: gray;
    }

    textarea {
      height: 100%;
      border: transparent;
      font-family: inherit;
      background-color: transparent;
      resize: none;
      font-size: 15px;
      padding: 10px 16px;
      &:focus {
        outline: none;
      }
    }
  }
`;

export default MemoPad;
