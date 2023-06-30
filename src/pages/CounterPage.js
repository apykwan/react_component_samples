import { useReducer } from 'react';

import Panel from '../components/Panel';
import Button from '../components/Button';


const reducer = (state, action) => {

};

export default function CounterPage({ initialCount = 1 }) {
  //  const [count, setCount] = useState(initialCount);
  //  const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valuetoAdd: 0
  })

   const increment = () => {
    // setCount(count + 1);
   };

   const decrement = () => {
    // setCount(count - 1);
   };

   const handleChange = e => {
    const value =parseInt(e.target.value) || 0;

    // setValueToAdd(value);
   };

   const handleSubmit = (e) => {

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
   };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex space-x-3">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add A lot</label>
        <input 
          type="number" 
          className="p-1 m-3 bg-gray-50 border border-gray-200 focus:bg-red-200" 
          value={valueToAdd || ""}
          onChange={handleChange}
        />
        <Button>Add</Button>
      </form>
    </Panel>
  );
}