let name = "Aayush";
function CheckEvenOrOdd(num) {
  if (num % 2 == 0) {
    return <div> Even</div>;
  } else {
    return <div>Odd</div>;
  }
}
function SwitchCase(alpha) {
  switch (alpha) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return <div> Is a vowel </div>;
    default:
      return <div> Is a consonant </div>;
  }
}
let num = 4;
//let ch = 'b';
const users = [
  { name: "Aayush", age: 21 },
  { name: "Chandan", age: 24 },
  { name: "Saket", age: 24 },
  { name: "Alok", age: 24 },
];
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <div>
        <h3>If Else Statement</h3>
        {CheckEvenOrOdd(5)}
        <h3>Ternary operator</h3>
        {num % 2 == 0 ? <div> Even num</div> : <div> Odd num </div>}
        <h3>If Statement</h3>
        {num % 2 == 0 && <div> Even number</div>}
        {num % 2 > 0 && <div> Odd Number</div>}
      </div>
      <h3>LOOP</h3>
      {users.map((item, index) => {
        return (
          <div key={index}>
            {item.name}-{item.age}
          </div>
        );
      })}
      <h3>Switch Case</h3>
      {<div>{SwitchCase("u")}</div>}
    </div>
  );
}

export default Jsx;

export function Greet(){
  return <h1>Hello World</h1>
}