
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
		input.parentElement.classList.add("valid")
		return true
	} else {
		input.parentElement.classList.add("invalid")
		if(input.value.trim().length  < 3) {
			input.placeholder = `Input must be ${min} or more characters!`
			input.value = ''
		} else if(input.value.trim().length  < 10) {
			input.placeholder = `Input must be ${min} or more characters!`
			input.value = ''
		}
		return false
	}
}

const validateEmail = (emailField) => {
	const re =/\w+@\w+\.\w+/
	if(re.test(email.value.trim())) {
		emailField.parentElement.classList.remove('invalid')
		emailField.parentElement.classList.add('valid')
		return true
	} 
	else {
		emailField.parentElement.classList.add('invalid')
		emailField.placeholder = `Must be a valid email!`
		emailField.vlue = ''
		return false
	}
}


function handleSelect()  {
	const selectedValue = reasonForContacting.value
	if(selectedValue === 'Job Opportunity') {
		jobTitle.parentElement.classList.remove('hidden')
		website.parentElement.classList.remove('hidden')
		codingLanguage.parentElement.classList.add('hidden')

	} else if(selectedValue === 'Talk Code') {
		codingLanguage.parentElement.classList.remove('hidden')
		jobTitle.parentElement.classList.add('hidden')
		website.parentElement.classList.add('hidden')
	}
}

reasonForContacting.addEventListener("change", ( handleSelect ) )


connectForm.addEventListener('submit', (e) => {
    e.preventDefault()
    validLength(fname, 3)
	validLength(lname, 3)
	validateEmail(email)
	validLength(jobTitle, 3)
	validLength(website, 3)
	validLength(codingLanguage, 3)
	validLength(message, 10) 
})