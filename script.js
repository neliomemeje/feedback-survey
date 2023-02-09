const ratingsEl = document.querySelectorAll(".ratings");
const btnEl = document.getElementById("btn")
const ratingsContainer = document.getElementById("container")
let selectedRating = ""


ratingsEl.forEach(rating => {
	rating.addEventListener("click", (e) => {
		clearSelection()
		selectedRating = e.target.innerText || e.target.parentNode.innerText
		e.target.classList.add("active");
		e.target.parentNode.classList.add("active")
		
	})
})

btnEl.addEventListener("click", () => {
	if(selectedRating !== ""){
		ratingsContainer.innerHTML = `
		<strong>Thank you!</strong>
		<br>
		<p>We'll use your feedback to improve our customer service</p>
		<br>
		<strong>feedback: ${selectedRating}</strong>
		`
	}

})

function clearSelection () {
	ratingsEl.forEach(rating => {
		rating.classList.remove("active")
	})
}