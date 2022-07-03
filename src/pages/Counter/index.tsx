import { useReducer } from "react";

type State = {
  value: number;
};

const initialState: State = { value: 0 };

enum ActionKind {
  Increase = "increment",
  Decrease = "decrement",
}

type Action = {
  type: ActionKind;
  payload: number;
};

const increaseAction: Action = {
  type: ActionKind.Increase,
  payload: 1,
};

const decreaseAction: Action = {
  type: ActionKind.Decrease,
  payload: 1,
};

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.Increase:
      return { ...state, value: state.value + action.payload };
    case ActionKind.Decrease:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="center">
        Count: {state.value}
        <button onClick={() => dispatch(decreaseAction)} className="btn indigo">
          -
        </button>
        <button onClick={() => dispatch(increaseAction)} className="btn indigo">
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
