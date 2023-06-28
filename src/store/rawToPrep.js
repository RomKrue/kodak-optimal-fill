import { nanoid } from 'nanoid'

function rawToPrep(raw) {
  const prepForms = []
  raw.map((rawObj) => {
    const prepObj = {
      id: nanoid(3),
      order: rawObj.order,
      color: rawObj.color,
      width: rawObj.width,
      height: rawObj.height,
      space: (rawObj.width * rawObj.height) / 100, //площадь формы в см2
    }

    prepForms.push(prepObj)
  })

  return prepForms
}

export default rawToPrep
