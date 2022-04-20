// 파일목적: 리덕스 스토어오 연동된 컴포넌트로 리덕스 스토어에 접근하여 상태를 받아오고 액션도 디스패치 함

import { connect } from 'react-redux';
import Counter from '../components/Counter';
import counter, { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </>
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToPros = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     },
//   }),
// )(CounterContainer);

export default connect(
  ({ counter }) => ({
    number: counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
