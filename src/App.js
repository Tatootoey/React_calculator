import {useState} from 'react';
function App() {

  // const Calculate

        const [calc, setCalc] = useState("");
        const [result, setResult] = useState("");

        const ops = ['/','*','+','-','.'];

        const updateCalc = value =>  
        {
          if
          (
            ops.includes(value)&& calc === '' ||
            ops.includes(value)&& ops.includes(calc.slice(-1))
          )
          {
            return;
          }

          setCalc(calc + value);

          if (!ops.includes(value))
          {
            setResult(eval(calc+value).toString());
          }
        }

   //End const Calculate

//Button 1-9 /onCLick

        const createDigits = () => {
          const digits = [];
          
          for (let i = 1; i < 10; i++)
          {
            digits.push 
            (
              <button 
              onClick={() => updateCalc(i.toString())} 
              key={i}>
               {i} </button>
            )
          }
          return digits;
        }
//End Button 1-9/onCLick

// sum
        const calculate= () =>
        {
          setCalc(eval(calc).toString());
        }
//End Sum

// Delete
        const deleteLast = () => 
        {
          if(calc =='')
          {
            return;
          }
          const value = calc.slice(0, -1);
          setCalc(value);
          setResult("");
        }
// End Delete

// Clear app
const clear = () => 
{
  setResult("");
  setCalc("");
  
}
// End Clea app
  return (
    <div className="App">
      <div className="Calculator">

        <div className="Display">
        { result ? <span>({result})</span> :''} &nbsp;{calc || "0"}
        </div>

        <div className="Operators">
              <button onClick={() => updateCalc('/')}>/</button>
              <button onClick={() => updateCalc('*')}>*</button>
              <button onClick={() => updateCalc('+')}>+</button>
              <button onClick={() => updateCalc('-')}>-</button>

              
        </div>
        <div className="Operators2">
              <button onClick={deleteLast}>DEL</button>
              <button onClick={clear}>AC</button>

        </div>

        <div className="Digits">
              {createDigits () }
              <button onClick={() => updateCalc('0')}>0</button>
              <button onClick={() => updateCalc('.')}>.</button>
              <button onClick={calculate}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
