import { nanoid } from 'nanoid'

function rawToPrep(raw) {
  const prepForms = []
  raw.forEach((rawObj) => {
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

  prepForms.sort((a, b) => a.width - b.width)

  return prepForms
}

export default rawToPrep
