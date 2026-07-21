import { useEffect, useState } from 'react'

function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    if (value === '') {
      setIsValid(true)
      return
    }
    setIsValid(validationFunction(value))
  }, [value, validationFunction])

  return (
    <div className="validated-input">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={isValid ? '' : 'error'}
        placeholder="Type here..."
      />
      {!isValid && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default ValidatedInput
