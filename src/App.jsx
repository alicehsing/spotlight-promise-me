import { asyncFinallyGetQuotes, asyncGetQuotes, asyncTryGetQuotes, thenGetQuotes, thenTryGetQuotes } from './services/promise-me';

export default function App() {
  // const handleClick = (callback) => {
  //   const result = callback();
  //   console.log(result);
  // };
  
  
return (
  <>
  <button onClick={async () => console.log(await asyncGetQuotes())}>
  Async Get Quotes
  </button>
  <button onClick={async () => console.log(await thenGetQuotes())}>
  .then() Get Quotes
  </button>
  <button onClick={async () => console.log(await asyncTryGetQuotes())}>
  Async TryGet Quotes
  </button>
  <button onClick={async () => console.log(await thenTryGetQuotes())}>
  .then Try Get Quotes
  </button>
  <button onClick={async () => console.log(await asyncFinallyGetQuotes())}>
  Async Finally Get Quotes
  </button>
  
  </>
);
}
