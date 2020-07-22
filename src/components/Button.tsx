/**
 * ButtonProps type.
 */
export type ButtonProps = {
  onClick: () => void
}

/**
 * Button component.
 */
export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button className="button" onClick={props.onClick}>
        {props.children}
      </button>

      <style jsx>{`
        .button {
          border: 2px solid #202020;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          background: white;
          padding: 0.6em;
          margin: 4px;
          font-size: 0.8rem;
          color: #202020;
          transition: all 140ms;
        }

        .button:hover {
          background: #202020;
          color: white;
        }
      `}</style>
    </>
  )
}
