import Header from './components/Header'
import Display from './Display';
import { useState } from 'react';
import ButtonPanel from './ButtonPanel';

function App() {
  const [theme, setTheme] = useState<string>('0');
  const [currentOperand, setCurrentOperand] = useState('')
  const [prevOperand, setPrevOperand] = useState('')
  const [operation, setOperation] = useState<string|undefined>('')

  const handleThemeChange =(t:string)=>{
    setTheme(t);
    const linkElement = document.getElementById('theme-link') as HTMLLinkElement;
    if (linkElement) {
      linkElement.href = `./src/styles/theme${t}.css`; 
    }
    console.log(linkElement.href)
  }

  const reset = () => {
    setPrevOperand('');
    setCurrentOperand('');
    setOperation(undefined);
  };

  const deleteOperand = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  const addNumber = (number: string) => {
    if (number === '.' && currentOperand.includes('.')) return;
    setCurrentOperand(currentOperand + number);
  };

  const operationSelection = (operate: string) => {
    if (currentOperand === '') return;
    if (prevOperand !== '') {
      calculatorOperation();
    }
    setOperation(operate);
    setPrevOperand(currentOperand);
    setCurrentOperand('');
  };

  const calculatorOperation = () => {
    const prev = parseFloat(prevOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    let result;
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(result.toString());
    setOperation(undefined);
    setPrevOperand('');
  };

  return (
    <div className={`calculator theme${theme}`}>
        <Header themeChange={handleThemeChange}></Header>
        <Display currentOperand={currentOperand} prevOperand={prevOperand} operation={operation}></Display>
        <ButtonPanel addNumber={addNumber} deleteOperand={deleteOperand} calculatorOperation={calculatorOperation}
         operationSelection={operationSelection} reset={reset} ></ButtonPanel>
    </div>
  )
}

export default App
