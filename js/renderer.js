import Highway from "@dogstudio/highway";

class renderer extends Highway.Renderer {
	onEnter() {
		let random = Math.floor(Math.random() * 3);
		newColor();

		function newColor() {
			let newRandom = random;
			while (random == newRandom) {
				random = Math.floor(Math.random() * 3);
			}

			switch (random) {
				case 0:
					document.querySelector('.background').style.backgroundImage = "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)";
					newRandom = random;
					break;

				case 1:
					document.querySelector('.background').style.backgroundImage = "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)";
					newRandom = random;
					break;

				case 2:
					document.querySelector('.background').style.backgroundImage = "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";
					newRandom = random;
					break;
			}
		}
	}
}

export default renderer;