//Test styles to make sure multiple .scss files are concatenated into one .css file
import './index.scss'
import './button.scss'
//Test file loading for images
import breadCat from './imgs/bread-cat.jpg'

console.log("Here's a link to an image of a breadcat:", breadCat)
console.log('Hello friends at Zillow! This is my little test file for my build process.')

//Using code below to make sure ES6 features are transpiled to ES5
class Test {
    constructor() {
        console.log('Test constructor')
    }
}

new Test()