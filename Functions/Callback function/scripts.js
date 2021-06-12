//callback function
function sayHemoglobin(hemoglobin) {
    console.log('before the callback')

    hemoglobin()

    console.log('after the callback')
}

sayHemoglobin(
    function hemoglobin() {
        console.log('hemoglobin')
    }
)