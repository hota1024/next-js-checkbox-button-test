import { Checkbox } from '../components/Checkbox'
import { useState } from 'react'
import { Button } from '../components/Button'

export default function Home() {
  const checkboxes = []

  // Initialize checkboxes state.
  for (let i = 0; i < 10; ++i) {
    checkboxes.push(useState(Math.random() < 0.5 ? false : true))
  }

  const setAllChecked = (checked: boolean) => () => {
    for (const [, setChecked] of checkboxes) {
      setChecked(checked)
    }
  }

  return (
    <div>
      <Button onClick={setAllChecked(true)}>Check all</Button>
      <Button onClick={setAllChecked(false)}>Uncheck all</Button>
      <br />
      {checkboxes.map(([checked, setChecked], key) => (
        <div key={key}>
          <Checkbox checked={checked} onChange={setChecked} />
          <br />
        </div>
      ))}
      <style jsx global>{`
        html,
        body {
          padding: 16px;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
