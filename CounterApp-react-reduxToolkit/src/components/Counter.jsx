import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from "../redux/slices/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    // console.log(count);
    const dispatch = useDispatch();

  return (
    <div>       
        <h2>Counter is {count}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        {/* <button onClick={()=>dispatch(incrementByAmount())}>Increment by Amount</button> */}
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
}
export default Counter;