window.addEventListener("DOMContentLoaded", () => {
	let button_f = document.querySelector(".button_eight"),
		first = document.querySelector(".first_card"),
		img = document.querySelector(".first_eight-img"),
		wrapper = document.querySelector(".first_wrapper"),
		button_v = document.querySelector(".button_video"),
		first_wrp = document.querySelector(".first_wrp "),
		video = document.querySelector(".first_video");
	button_f.addEventListener("click", () => {
		button_f.classList.add("hide_btn");
		const delay = (time) => {
			return new Promise((resolve, reject) => setTimeout(resolve, time));
		};
		delay(1000)
			.then(() => {
				(button_f.style.cssText = `display:none;`),
					first.classList.add("active");
				return delay(1000);
			})
			.then(() => {
				first.style.cssText = `display:block;
            min-height:420px`;

				return delay(1500);
			})

			.then(() => {
				img.style.cssText = `display:block;animation: opc 2s forwards ;`;
				return delay(1500);
			})

			.then(() => {
				wrapper.style.cssText = `display:block;animation: opc 2s forwards ;`;
				var myCarousel = document.querySelector("#myCarousel");
				var carousel = new bootstrap.Carousel(myCarousel, {
					interval: 2500,
					wrap: true,
					center: true,
				});
				return delay(8000);
			})
			.then(() => {
				button_v.style.cssText = `display:block;animation: active 2.5s forwards ;`;
			}).then;
	});
	button_v.addEventListener("click", () => {
		if (button_v.innerHTML !== "Закрити відео") {
			button_v.innerHTML = "Закрити відео";
			first_wrp.style.cssText = `animation: hide 2s forwards ;`;

			const delayTwo = (time) => {
				return new Promise((resolve, reject) => setTimeout(resolve, time));
			};
			delayTwo(2000)
				.then(() => {
					first_wrp.style.cssText = `display:none`;
					return delayTwo(100);
				})
				.then(() => {
					video.style.cssText = `animation: opc 2s forwards; display: block;`;
				});
		} else {
			const delayThree = (time) => {
				return new Promise((resolve, reject) => setTimeout(resolve, time));
			};
			delayThree(1000)
				.then(() => {
					video.style.cssText = `animation: hide 2s forwards ;`;
					return delayThree(1500);
				})
				.then(() => {
					video.style.cssText = `display:none`;
					return delayThree();
				})
				.then(() => {
					first_wrp.style.cssText = ` display: block;`;
					return delayThree();
				})
				.then(() => {
					first_wrp.style.cssText = `animation: opc 2s forwards; display: block;`;
					button_v.innerHTML = "Переглянути відео";
				});
		}
	});
	// button_v.addEventListener("click", () => {
	// 	if (button_v.innerHTML == "Закрити відео") {
	// 	}
	// });
});
