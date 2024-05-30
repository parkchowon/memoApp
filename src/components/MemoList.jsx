import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addMemo, deleteMemo } from "../redux/reducers/memo.reducer";
import MemoItem from "./MemoItem";

function MemoList() {
  const memoList = useSelector((state) => state.memo.memos);
  const selectedId = useSelector((state) => state.memo.selectedMemo);
  const dispatch = useDispatch();

  const handleAddMemo = () => {
    dispatch(addMemo());
  };

  const handleDeleteMemo = () => {
    if (memoList.length === 1) {
      alert("하나 이상의 메모는 남겨두어야 합니다.");
    } else {
      dispatch(deleteMemo(selectedId));
    }
  };

  return (
    <Wrapper>
      <div className="btn-div">
        <button onClick={handleAddMemo}>새 메모 작성하기</button>
        <button onClick={handleDeleteMemo}>삭제</button>
      </div>
      <div className="item-div">
        {memoList.map((memo) => {
          return <MemoItem key={memo.id} memo={memo} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 240px;
  min-width: 240px;
  border-right: 1px solid gainsboro;
  display: flex;
  flex-direction: column;

  .btn-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid gainsboro;
    padding: 15px 17px;
    height: fit-content;

    button {
      border: transparent;
      background: transparent;
      color: rgb(128, 128, 128);
      cursor: pointer;
      font-size: 13px;
      &:hover {
        font-weight: bold;
      }
    }
  }

  .item-div {
    padding: 20px 12px;
    overflow-y: auto;
    height: 100%;
  }
`;

export default MemoList;
