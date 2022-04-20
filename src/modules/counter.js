// 파일: Ducks패턴 사용함. 액션타입, 액션 생성 함수, 리두서 작성 코드

// 1. action 타입 정하기
// 액션 타입은 무조건 대문자로 정의
// '모듈이름/액션이름' 형태로 저장
const INCREASE = 'counter/INCRESASE';
const DECREASE = 'counter/DECREASE';

// 2. action 생성 함수 만들기
// export를 붙임으로써 다른 파일에서 함수를 불러와 사용할 수 있게 한다
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
