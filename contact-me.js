
// TODO
const connectForm = document.getElementById('connect-form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const reasonForContacting = document.getElementById('reason-for-contacting')
const jobTitle = document.getElementById('job-title')
const website = document.getElementById('website')
const codingLanguage = document.getElementById('coding-language')
const message = document.getElementById('message')


const validLength = (input, min) => {
	// debugger
	if (input.value.trim().length >= min) { 
		input.parentElement.classList.remove("invalid")
		// input.parentElement.classList.add("valid")
		return true
	} else {
		input.parentElement.classList.add("invalid")
		e.preventDefault()
		return false
	}
}

const validateEmail = (emailField) => {
	const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if(re.test(email.value.trim())) {
		emailField.parentElement.classList.remove('invalid')
		emailField.parentElement.classList.add('valid')
		return true
	} 
	else {
		emailField.parentElement.classList.add('invalid')
		return false
	}
}

const handleSelect = (reasonForContacting) => {
	const selectedValue = reasonForContacting.value
	if(selectedValue === 'Job Opportunity') {
		jobTitle.parentElement.classList.remove('hidden')
		website.parentElement.classList.remove('hidden')
		codingLanguage.parentElement.classList.add('hidden')

	} else if(selectedValue === 'Scan Code') {
		codingLanguage.parentElement.classList.remove('hidden')
		jobTitle.parentElement.classList.add('hidden')
		website.parentElement.classList.add('hidden')
	}
}

connectForm.addEventListener('submit', (e) => {
    e.preventDefault()
    validLength(fname, 3)
	validLength(lname, 3)
	validateEmail(email)
	validLength(jobTitle, 3)
	validLength(website, 3)
	validLength(codingLanguage, 3)
	validLength(message, 10)
	handleSelect(reasonForContacting)
})

