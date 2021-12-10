import { useEffect } from "react"

import { addLineNumbers } from "./utils"

const useLineNumbers = el => {
  useEffect(() => {
    if (!el.current) {
      return
    }

    const withLineNumbers = addLineNumbers(el.current)
    el.current.innerHTML = ""
    el.current.append(withLineNumbers)
  }, [el])
}

export default useLineNumbers
