// 1. action 타입 정하기
// '모듈이름/액션이름' 형태로 저장
const INCREASE = 'counter/INCRESASE';
const DECREASE = 'counter/DECREASE';

// 2. action 생성 함수 만들기
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

// 3. counter모듈의 초기 상태와 리듀서 함수 만들기

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
