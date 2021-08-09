import {choice, remove} from "./helper";
import foods from "./foods"

let food = choice(foods);

// ReactDOM.render(
//     <div>
//         <p>"I'd like one {food}, please</p>
//         <p> Here you go: {food}</p>
//         <p> Delicious! May I have another?</p>
//     </div>,
//     document.getElementById('root')
// );

console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another?`);
remove(foods, food);
console.log(`I'm sorry, we're all out. We have ${foods.length} left`);