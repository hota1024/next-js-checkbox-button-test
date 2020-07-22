import { useState } from 'react'

/**
 * CheckboxProps type.
 */
export type CheckboxProps = {
  /**
   * Whether checked.
   */
  checked: boolean

  /**
   * On change callback.
   *
   * @param newValue New value of checked.
   */
  onChange?: (newValue: boolean) => void
}

/**
 * Checkbox component.
 */
export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [, setChecked] = useState(props.checked)

  const onClick = () => {
    setChecked(!props.checked)
    if (props.onChange) {
      props.onChange(!props.checked)
    }
  }

  return (
    <>
      <button className="checkbox" onClick={onClick}>
        <div className="checkbox-content">{props.checked ? '✔' : ' '}</div>
      </button>
      <style jsx>{`
        .checkbox {
          width: 16px;
          height: 16px;
          background: white;
          color: #202020;
          padding: 1em;
          margin: 4px;
          border: 2px solid #202020;
          border-radius: 4px;
          cursor: pointer;
        }

        .checkbox-content {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.6rem;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}
