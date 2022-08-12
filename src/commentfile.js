/*import { getByTitle } from "@testing-library/react";

//props in JS
function Mycomponentwithprops(props) {
  return (
    <div className={props.nameforclass}> {props.name}</div>
  );
}

//destructuring in JS
function Mycomponent({ name, nameforclass, income = 0 }) {
return (
  <>
      <div className={nameforclass}> {name} : ${income}
      </div>
      <hr />
    </>
  );
}

//using component within component 
function App() {
  return (
    <div>s
    Hello <Mycomponent name={"haris"} nameforclass={"div1"} income="80" /><Mycomponent name={"hayat"} nameforclass={"div2"} /> guys.
    </div>
    );
  }

//increment and decrement buttons on home page
  const Home = () => {

    const btnStyle = { padding: 20, margin: 10, backgroundcolor: "#f1f1f1", };
  
    const [inputValue, setInputValue] = useState(0);
  
    const increment = () => {
      setInputValue(inputValue + 1);
    }
    const decrement = () => {
      setInputValue(inputValue - 1);
    }
    // const changehandler = (e) => {
    //   inputvalue = e.target.value;
    //   console.log(inputvalue);
    // }
    return (
      <div>
        <input
          style={{ padding: 20, border: "1px solid rgba(0,0,0,4)" }}
          type="number"
          placeholder='Enter Something'
          value={inputValue}
          readOnly
        />
        <button style={btnStyle} onClick={increment}>+</button>
        <button style={btnStyle} onClick={decrement}>-</button>
      </div>
    )
  
  }
  
*/