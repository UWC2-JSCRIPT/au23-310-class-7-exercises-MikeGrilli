// TODO
const form = document.getElementById('connect-form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')

const validLength = (input, min) => {
	if (input.value.trim().length > min) { 
        input.parentElement.classList.remove("invalid");
	} 
    else {
		input.parentElement.classList.add("invalid");
	}
}

const validateEmail = (email) => {
	const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if(re.test(email.value.trim())) {
		email.parentElement.classList.remove('invalid')
		return true
	} 
	else {
		email.parentElement.classList.add('invalid')
		return false
	}
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validLength(firstName, 3)
    validLength(lastName, 3)
    validateEmail(email)
    console.log("submit")
})
