//Test styles to make sure multiple .scss files are concatenated into one .css file
import './index.scss'

console.log('Hello friends at Zillow! This is my little test file for my build process.')

//Using code below to make sure ES6 features are transpiled to ES5
class Test {
    constructor() {
        console.log('Test constructor')
    }
}

new Test()