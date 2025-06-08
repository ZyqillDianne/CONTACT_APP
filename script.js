// Ini-initialize ang EmailJS gamit ang public key
// Kailangan ito para gumana ang mga EmailJS functions sa page
emailjs.init("8yUHra6o73b05s8Jw");

// Kapag fully loaded na ang buong HTML document, saka tatakbo ang code sa loob
document.addEventListener("DOMContentLoaded", () => {

    // Kinukuha ang form element gamit ang ID na "contact-form"
    const form = document.getElementById("contact-form");

    // Kapag sinubmit ang form, ito ang event na magti-trigger
    form.addEventListener("submit", (event) => {

        // Pinipigilan ang default behavior ng form (tulad ng pag-reload ng page)
        event.preventDefault();

        // Kinokolekta ang laman ng form fields at nilalagay sa isang object na tinatawag na formData
        const formData = {
            name: document.getElementById("name").value,       // Kukunin ang value mula sa input na may ID na 'name'
            email: document.getElementById("email").value,     // Kukunin ang value mula sa input na may ID na 'email'
            subject: document.getElementById("subject").value, // Kukunin ang value mula sa input na may ID na 'subject'
            message: document.getElementById("message").value  // Kukunin ang value mula sa textarea na may ID na 'message'
        };

        // (Optional) Muling pag-init ng EmailJS gamit ang ibang public key
        // Mainam na iwasan ang pag-ulit nito kung nauna nang ginamit sa taas
        emailjs.init("NOxETBOD96MZ9RUWU");
