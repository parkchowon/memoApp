import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clickMemo } from "../redux/reducers/memo.reducer";

function MemoItem({ memo }) {
  const selectedId = useSelector((state) => state.memo.selectedMemo);
  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(clickMemo(memo.id));
  };

  return (
    <Wrapper $selectedId={selectedId} $id={memo.id} onClick={handleItemClick}>
      <p className="title">{memo.title}</p>
      <p className="time">{memo.time}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => {
    return props.$selectedId == props.$id ? "rgb(255, 224, 127)" : "white";
  }};
  border-radius: 5px;
  min-height: 60px;
  padding: 0 25px;
  margin-bottom: 10px;
  cursor: pointer;
  .title {
    font-size: 13px;
    font-weight: bold;
    padding-top: 12px;
    padding-bottom: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .time {
    font-size: 12px;
  }
`;
export default MemoItem;
