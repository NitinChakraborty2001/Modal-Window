/*
	🖥️Full-Stack Developer 🎨Graphic Designer 💸Freelancer

	👨‍💻Author : Nitin Chakraborty.

	🔗Facebook : https://www.facebook.com/NitinChakraborty2001/
	🔗Instagram : https://www.instagram.com/NitinChakraborty2001/
	🔗YouTube : http://www.youtube.com/c/NitinChakraborty2001/
	🔗LinkedIn : https://www.linkedin.com/in/NitinChakraborty2001/
	🔗Twitter : https://www.twitter.com/NitinCB2001/

	📧eMail : nitin.chakraborty13@gmail.com
*/

"use strict";

// Selecting Elements
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const closeModalButton = document.querySelector(".close-modal");
const showModalButton = document.querySelectorAll(".show-modal");

// Open Modal Functionality
const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

// Close Modal Functionality
const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let index = 0; index < showModalButton.length; index++)
	showModalButton[index].addEventListener("click", openModal);

closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
	// console.log(event.key);

	if (event.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});
