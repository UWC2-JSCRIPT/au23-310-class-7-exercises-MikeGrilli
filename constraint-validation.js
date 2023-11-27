// TODO
const form = document.getElementById('connect-form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')

const validLength = (input, min) => {
	if (input.value.trim().length > min) { 
        input.parentElement.classList.remove("invalid");
	} 
    else {
		input.parentElement.classList.add("valid");
	}
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validLength(firstName, 3)
    console.log("submit")
})
