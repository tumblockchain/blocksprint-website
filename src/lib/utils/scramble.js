export function getRandomChar() {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
	return chars[Math.floor(Math.random() * chars.length)];
}

export function scramble(elementID, originalText, iterations = 10, intervalTime = 30) {
	let hoverText = originalText;
	let scrambleTimeout;
	let totalIterations = iterations;
	const element = document.getElementById(elementID);

	if (element) {
		clearTimeout(scrambleTimeout);
		element.textContent = originalText;
	}

	function scrambleText(iteration = 0) {
		if (iteration >= totalIterations) {
			hoverText = originalText;
			if (element) element.textContent = hoverText;
			clearTimeout(scrambleTimeout);
			return;
		}
		let solidifiedCount = Math.floor(
			Math.sqrt(iteration) * (originalText.length / Math.sqrt(totalIterations))
		);
		let scrambled = originalText
			.split('')
			.map((char, index) => {
				if (index < solidifiedCount) {
					return originalText[index];
				}
				if (iteration % 2 === 0 && iteration > 2) {
					return Math.random() < 0.5 ? '_' : getRandomChar();
				}
				return getRandomChar();
			})
			.join('');

		hoverText = scrambled;
		if (element) element.textContent = hoverText;

		scrambleTimeout = setTimeout(() => scrambleText(iteration + 1), intervalTime);
	}

	scrambleText(0);
}
