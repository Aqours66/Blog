document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const commentForm = document.getElementById('commentForm');
    const commentSection = document.getElementById('commentSection');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been received.`);

        contactForm.reset();
    });

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('newsletterEmail').value;

        alert(`Thank you for subscribing!`);

        newsletterForm.reset();
    });

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('commentName').value;
            const text = document.getElementById('commentText').value;

            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `<p><strong>${name}</strong>: ${text}</p>`;

            commentSection.appendChild(commentDiv);

            commentForm.reset();
        });
    }
});