// animation item game, section
const items = document.querySelectorAll('.section--about, .section--experience, .section--skills, .section--projects, .section--contact, .section--content img');

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate');
			observer.unobserve(entry.target); // Stop observing once animated
		}
	});
}, {
	threshold: 0.01,
	rootMargin: "0px 0px -50px 0px"
});

items.forEach((item, index) => {
	// Optional: uncomment if you want staggered delays for each section
	// item.style.transitionDelay = `${index * 0.1}s`;
	observer.observe(item);
});
