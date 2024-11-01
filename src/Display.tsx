
type displayProps={
    prevOperand: string,
    currentOperand:string,
    operation:string|undefined,
}

const Display = (props:displayProps) => {
  return (
    <div className="user-input">
        <div className="previous-operand">
            {props.prevOperand} {props.operation}
        </div>
        <div className="current-operand">
            {props.currentOperand}
        </div>
    </div>
  )
}

export default Display