import { asyncGetQuotes, thenGetQuotes } from './services/promise-me';

export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  };
  
  
return (
  <>
  <button onClick={() => handleClick(asyncGetQuotes)}>
  Async Get Quotes
  </button>
  <button onClick={() => handleClick(thenGetQuotes)}>
  Then Get Quotes
  </button>
  </>
)
}
