import { useTodo } from '../state/useTodo';

export default function Count() {
  const { increment, count } = useTodo();

  return <button onClick={increment}>{count}</button>;
}
