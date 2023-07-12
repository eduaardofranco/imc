export const ErrorMessage = {
    errorBox: document.querySelector('.alert-error'),
    open() {
        ErrorMessage.errorBox.classList.add('open')
    },
    close() {
        ErrorMessage.errorBox.classList.remove('open')
    }
}