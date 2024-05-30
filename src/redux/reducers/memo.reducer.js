import { v4 } from "uuid";

//생성시 랜덤 id
const initialId = v4();
//생성시 시간
const today = new Date();
const time = `${
  today.getHours() < 12 ? "오전" : "오후"
} ${today.getHours()}:${today.getMinutes()}`;

//action type name
export const ADD_MEMO = "memo/ADD_MEMO";
export const UPDATE_MEMO = "memo/UPDATE_MEMO";
export const CLICK_MEMO = "memo/CLICK_MEMO";
export const DELETE_MEMO = "memo/DELETE_MEMO";

//초기값
const initialState = {
  memos: [
    {
      id: initialId,
      title: "새로운 메모",
      context: "",
      time: time,
    },
  ],
  selectedMemo: initialId,
};

/** action creator */

//새 메모 생성
export const addMemo = () => {
  const today = new Date();
  const time = `${
    today.getHours() < 12 ? "오전" : "오후"
  } ${today.getHours()}:${today.getMinutes()}`;

  const newMemo = {
    id: v4(),
    title: "새로운 메모",
    context: "",
    time: time,
  };

  return {
    type: ADD_MEMO,
    payload: newMemo,
  };
};

//메모 내용 갱신
export const updateMemo = (changeMemo, memoId) => {
  const updateMemo = {
    context: changeMemo,
    memoId: memoId,
  };
  return {
    type: UPDATE_MEMO,
    payload: updateMemo,
  };
};

//메모 클릭 시 focus 이동
export const clickMemo = (id) => {
  return {
    type: CLICK_MEMO,
    payload: id,
  };
};

//메모 삭제
export const deleteMemo = (id) => {
  return {
    type: DELETE_MEMO,
    payload: id,
  };
};

/** Reducer */
function memoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMO:
      return {
        ...state,
        memos: [action.payload, ...state.memos],
        selectedMemo: action.payload.id,
      };
    case CLICK_MEMO:
      return {
        ...state,
        selectedMemo: action.payload,
      };
    case UPDATE_MEMO:
      return {
        ...state,
        memos: state.memos.map((memo) => {
          return memo.id === action.payload.memoId
            ? {
                ...memo,
                title: action.payload.context,
                context: action.payload.context,
              }
            : memo;
        }),
      };
    case DELETE_MEMO:
      const deleteMemos = state.memos.filter((memo) => {
        return memo.id !== action.payload;
      });
      return {
        ...state,
        memos: deleteMemos,
        selectedMemo: deleteMemos[0].id,
      };
    default:
      return state;
  }
}

export default memoReducer;
