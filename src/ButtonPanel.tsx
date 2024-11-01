interface ButtonPanelProps {
    addNumber: (num: string) => void;
    deleteOperand: () => void;
    reset: () => void;
    operationSelection: (operator: string) => void;
    calculatorOperation: () => void;
  }
  
  const ButtonPanel: React.FC<ButtonPanelProps> = ({
    addNumber,
    deleteOperand,
    reset,
    operationSelection,
    calculatorOperation,
  }) => (
    <div className="grid-container">
      {['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', '×', 'RESET', '='].map((symbol, index) => (
        <button
          key={index}
          onClick={() => {
            if (symbol === 'DEL') return deleteOperand();
            if (symbol === 'RESET') return reset();
            if (symbol === '=') return calculatorOperation();
            if (['+', '-', '/', '×'].includes(symbol)) return operationSelection(symbol);
            return addNumber(symbol);
          }}
        >
          {symbol}
        </button>
      ))}
    </div>
  );
  
  export default ButtonPanel;