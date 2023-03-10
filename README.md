
# Text Decoder ![STATUS DONE](https://img.shields.io/badge/STATUS-DONE-green) [![Website](https://img.shields.io/website?url=https%3A%2F%2Fjonnata.github.io%2Fchallengeonedecodificador4%2F)](https://jonnata.github.io/challengeonedecodificador4/)

It's an application that encrypts texts, so you can exchange secret messages with other people who know the secret of the encryption used.

## Stacks used

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo"  />
</div>

###

## Overview

### Text Decoder - Alura Challenges Oracle ONE

The encryption "keys" I used are:
- The letter "e" is converted to "enter"
- The letter "i" is converted to "imes"
- The letter "a" is converted to "ai"
- The letter "o" is converted to "ober"
- The letter "u" is converted to "ufat"

Requirements:
- Should only work with lowercase letters
- Letters with accents or special characters must not be used
- It must be possible to convert a word to the encrypted version and also return an encrypted word to the original version.

For example:
#### "gato" => "gaitober"
#### gaitober" => "gato"

- The page has fields for entering the text to be encrypted or decrypted, and the user can choose between the two options
- The result is displayed on the screen.


## Functionalities

- Dark and light themes
- Encrypt text `button`
- Decrypt text `button`
- Copy `button`
- Clear `button`

## Screenshots

### Light Mode

<img src="public/images/light.PNG" alt="light theme" width="100%">

### Dark Mode

<img src="public/images/dark.PNG" alt="dark theme" width="100%">


## What I Learned

Blocking decoding with Uppercase words and with a direct accent in the input: onkeyup="this.value = this.value.toLowerCase();" causes decryption not to work. I learned to solve this problem by creating a function using Regex.:

```javascript
function checkTextParameters(text){
    if(text === text.toLowerCase()){
        const textChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return !(textChars.test(text))
    }
    else{
        return false;
    }
}
```
## Author

<img src="public/images/jonnataPhoto.PNG" width="100px;" alt="Jonnata Costa">

[![Linkedin Badge](https://img.shields.io/badge/-Jonnata-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonnata-costa-427779120/)](https://www.linkedin.com/in/jonnata-costa-427779120/)

Made with ?????? by <a href="https://github.com/Jonnata" target="_blank">Jonnata Costa</a> ???????? Get in touch!

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)