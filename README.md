# Newsletter Sign-up Form with Success Message

This is a solution to the [Newsletter Sign-up Form with Success Message challenge on Frontend Mentor](https://www.frontendmentor.com/challenges/newsletter-signup-form-with-success-message-3FC1AZbN2). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents
- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:
- Add their email and submit the form.
- See a success message with their email after successfully submitting the form.
- See form validation messages if the email field is invalid or empty.
- View the optimal layout for the interface depending on their device's screen size (mobile, tablet, or desktop).
- See hover and focus states for all interactive elements on the page.

### Links

- **Solution URL:** [GitHub Repository](https://github.com/bmeinert8/newsletter-sign-up)  
- **Live Site URL:** [Live Demo](https://bmeinert8.github.io/newsletter-sign-up/)  

## My Process

### Built With

- **HTML5** - Semantic markup for structure.
- **CSS3** - Custom styling with variables, flexbox, and media queries for responsive design.
- **JavaScript** - Form validation, dynamic email insertion, and card toggling.
- **Roboto Font** - Imported via Google Fonts for typography.
- **Frontend Mentor Assets** - Images and design files provided by the challenge.

### What I Learned

This project was a great opportunity to deepen my understanding of front-end development. Key takeaways include:
- **Form Validation:** Implemented custom email validation using regex (`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`) and disabled HTML5 validation with `novalidate` to control the logic via JavaScript.
- **Dynamic DOM Manipulation:** Updated the success message dynamically by targeting a `<span>` element to display the user’s email.
- **Responsive Design:** Used media queries to adapt the layout from mobile-first (vertical stack) to desktop (side-by-side layout with a desktop-specific image).
- **Event Handling:** Managed form submission and button clicks with event listeners to toggle visibility of the newsletter and success cards.
- **CSS Best Practices:** Leveraged CSS variables (e.g., `--Blue800`, `--Red`) for consistent theming and class toggling for state changes.

### Continued Development

In future iterations, I’d like to:
- Add client-side email validation with more advanced regex or a library for edge cases.
- Implement a loading state during form submission to simulate a server request.
- Enhance accessibility with ARIA attributes and better keyboard navigation.
- Add animations for card transitions (e.g., fade-in/out) using CSS or JavaScript.

## Author

- **Name:** Brian Meinert
- **Frontend Mentor:** [@bmeinert8](https://www.frontendmentor.io/profile/bmeinert8) 
- **GitHub:** [yourusername](https://github.com/bmeinert8)
