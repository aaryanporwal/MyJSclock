const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
 	const currentTime = new Date();
	const seconds = currentTime.getSeconds();
	const secondDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const mins = currentTime.getMinutes();
	const minsDeg = (mins / 60) * 360 + 90;
	minsHand.style.transform = `rotate(${minsDeg}deg)`;

	const hours = currentTime.getHours();
	const hourDeg = (hours / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;
	requestAnimationFrame(setDate);
}

setDate(); // Calling the function before requestAnimationFrame().
