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
	if (input.value.trim().length >= min) { 
		input.parentElement.classList.remove("invalid");
	} else {
		input.parentElement.classList.add("valid");
	}
}

connectForm.addEventListener('submit', (e) => {
    e.preventDefault()
    validLength(fname, 3)
})

