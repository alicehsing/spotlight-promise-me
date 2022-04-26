import { asyncFinallyGetQuotes, asyncGetQuotes, asyncThenGetQuotes, asyncTryGetQuotes, thenAsyncGetQuotes, thenFinallyGetQuotes, thenGetQuotes, thenTryGetQuotes } from './services/promise-me';

export default function App() {
  
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
  <button onClick={async () => console.log(await thenFinallyGetQuotes())}>
  .then Finally Get Quotes
  </button>
  <button onClick={async () => console.log(await thenAsyncGetQuotes())}>
  Then Async Get Quotes
  </button>
  <button onClick={async () => console.log(await asyncThenGetQuotes())}>
  Async Then Get Quotes
  </button>
  </>
);
}
