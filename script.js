/*
Author: Mehmet Ali Unal
File: script.js
Date: 08/28/2024
*/

// Document Ready
$(document).ready(function () {
    console.log("Document is ready!");

    // Toggle Bootstrap Navbar
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
    });
});

// Hamburger menu function (for non-Bootstrap use)
function toggleMenu() {
    const nav = document.querySelector('.tab-desk');
    nav.classList.toggle('open');
}

// Global variables
let currentQuestion = null;
let answerVisible = false;

// Function to show/hide answer
function showAnswer(questionId) {
    const answerDiv = document.getElementById('answer');
    if (currentQuestion === questionId && answerVisible) {
        answerDiv.style.display = 'none';
        answerVisible = false;
    } else {
        answerDiv.style.display = 'block';
        answerVisible = true;
        currentQuestion = questionId;
    }
}

// Event listener for questions
document.getElementById('questions').addEventListener('click', (event) => {
    if (event.target.tagName === 'P') {
        showAnswer(event.target.id);
    }
});
