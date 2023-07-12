import { Modal } from './modal.js'
import { ErrorMessage } from './error-message.js';
import {calculateIMC, notaNumber } from './utils.js'

const form = document.querySelector('form')
let inputWeight = document.querySelector('#weight')
let inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()


    const weight = inputWeight.value 
    const height = inputHeight.value

    const weightorHeightIsNotANumber = notaNumber(weight) || notaNumber(height)

    if(weightorHeightIsNotANumber) {
        ErrorMessage.open()
        return
    }

    ErrorMessage.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
    inputWeight.value = ''
    inputHeight.value = ''
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}
inputWeight.oninput = () => ErrorMessage.close()
inputHeight.oninput = () => ErrorMessage.close()