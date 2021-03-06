// 파일: Ducks패턴 사용함. 액션타입, 액션 생성 함수, 리듀서 작성 코드

// 1. 액션 타입 정하기
// '모듈이름/액션이름' 형태로 저장
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값을 변경함
const INSERT = 'todos/INSERT'; //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크를 해제함
const REMOVE = 'todos/ROMOVE'; // todo를 제거함

// 2. 액션 생성 함수 만들기
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3; // insert가 호출될때마다 1씩 더해진다. 초기상태 작성할 때 todo객체 두개를 사전에 미리 넣어둘 것이므로 id를 3으로 설정했다.
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

// 3.초기 상태 및 리듀서 함수만들기
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.input };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
