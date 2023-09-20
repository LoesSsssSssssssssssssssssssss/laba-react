import { useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const poprikolyminus = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       {/* <button onClick={() => setCount((count) => count - 1)}>-</button>
//       {count}
//       <button onClick={() => setCount((count) => count + 1)}>+</button> */}
//       {/* <button className='btn1' onClick={poprikolyminus}>-</button>
//       <p className='cntr1'>{count}</p>
//       <button className='btn2' onClick={() => setCount((count) => count + 1)}>+</button> */}
//       {/* Текст внутри div`a */}
//       {/* <p className='abzac'>Несколько</p>
//       <p className='abzac'>Абзацев</p> */}
//       {/* <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul> */}
//     </>
//   )
// }

// return more tags 1

// function App() {
// 	return (
//   <div>
//     <ul>
// 		<li>text1</li>
// 		<li>text2</li>
// 		<li>text3</li>
// 	</ul>
// 	<ul>
// 		<li>text1</li>
// 		<li>text2</li>
// 		<li>text3</li>
// 	</ul>;
//   </div>
//   )
// }

// return more tags 2

function App() {

  const str1 = 'text1'
  const str2 = 'text2'

  const name = 'user';
	const age  = '30';

  const arr = [1, 2, 3, 4, 5];

  const obj = {name: 'john', surname: 'smit'};

  const attr = 'block';

  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;

  const items = (<>
    <li>text1</li><li>text2</li><li>text3</li>
  </>);

  const num1 = 3;
  const num2 = 2;

  const name1 = 'john';
	const surname2 = 'smit';

  const num3 = 4

  let text2
  const isAdult = true;

  if(isAdult) {
    text2 = 'Вам есть 18'
  } else {
    text2 = 'Вам нет 18'
  }

  let textadmin
  const isAdmin = true;

  const age2 = 19;

  if(isAdmin) {
    textadmin = <div>
      <p>Привет</p>
      <p>Админ</p>
    </div>
  }

  const isAuth = true;
  let number

  function getDigitsSum(number) {
    
    var figures = "" + number
    var sum = 0

    for (var i = 0; i < figures.length; i++) 
      sum += +figures[i]

    return sum
  }

	return (
  <>
   <ul>
		<li>text1</li>
		<li>text2</li>
		<li>text3</li>
	</ul>
	<ul>
		<li>text1</li>
		<li>text2</li>
		<li>text3</li>
	</ul>;
  <input type="text" />
  <input/><input/><input/>
  <div>
    <p>{str1}</p>
    <p>{str2}</p>
  </div>
  <div>
    name: {name}
    age: {age}
  </div>
  <div>
    <ul>
      <li>{arr[0]}</li>
      <li>{arr[1]}</li>
      <li>{arr[2]}</li>
      <li>{arr[3]}</li>
      <li>{arr[4]}</li>
    </ul>
  </div>
  <div>
    <p>
    name:    <span>{obj.name}</span>, <br/>
    surname: <span>{obj.surname}</span>,
    </p>
  </div>
  <div id={attr}>
    text
  </div>
  <ul>
    {li1}
    {li2}
    {li3}
  </ul>
  <ul>
    {items}
  </ul>
  <input type="text" /> <br />
  <input type="text" /> <br />
  <input type="text" />
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div className='table'>
    <table>
      <tbody>
        <tr>
          <td>2</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    result: {num1 ** num2} <br />
    result: {name1 + ' ' + surname2} <br />
    result: {Math.sqrt(num3)}
  </div>
  <div>
    {text2}
    {textadmin}
  </div>
  <div>
    {age2 > 18 ? <p>Вам больше 18</p> : <p>Вам меньше 18</p>}
  </div>
  <div>
    {isAuth && <p>вы авторизованы</p>}
    {!isAuth && <p>пожалуйста, авторизуйтесь</p>}
  </div>
  <div>
    сумма цифр числа: {getDigitsSum(123)}
  </div>
  </>
  )
}

export default App

// Закончил на 32
