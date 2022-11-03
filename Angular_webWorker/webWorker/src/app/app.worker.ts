/// <reference lib="webworker" />
import { PrimeCalculator } from './prime';
import { Factorial } from './factorial';
// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`;
//   postMessage(response);
// });


// addEventListener('message', ({ data }) => {
//   // const response = `worker response to ${data}`;
//   const response = PrimeCalculator.findNthPrimeNumber(parseInt(data));
  
//   postMessage(response);
// });


addEventListener('message', ({ data }) => {
  // const response = `worker response to ${data}`;
  const response1 = PrimeCalculator.findNthPrimeNumber(parseInt(data[1]));
  const response2 = Factorial.findfactofnum(data[0]);
  postMessage([response2,response1]);
});
