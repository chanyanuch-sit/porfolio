// animation item game, section
const items = document.querySelectorAll('.section--about, .section--experience, .section--skills, .section--contact');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
		entry.target.classList.add('animate');
		}
	});
	}, {
	threshold: 0.5
});

items.forEach((item, index) => {
	item.style.transitionDelay = `${index * 0.1}s`;
	observer.observe(item);
});
