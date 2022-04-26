import { connect } from 'react-redux';
import Todos from 'components/Todos';
import {
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
} from '../modules/todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // store에 저장된 두개의 reducer중(count, todos) todos를 넘겨주는 것
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    // 액션 함수
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
