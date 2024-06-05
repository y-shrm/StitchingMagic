// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


    //// Initially disable the dark theme
    //document.getElementById('dark').disabled = true;

    //// Listen for changes on the checkbox
    //document.getElementById('darkModeToggle').addEventListener('change', function() {
    //    if (this.checked) {
    //    // If the checkbox is checked, enable the dark theme and disable the light theme
    //    document.getElementById('dark').disabled = false;
    //document.getElementById('light').disabled = true;
    //    } else {
    //    // If the checkbox is unchecked, enable the light theme and disable the dark theme
    //    document.getElementById('dark').disabled = true;
    //document.getElementById('light').disabled = false;
    //    }
    //});



// Check if a theme is saved in localStorage
if (localStorage.getItem('theme')) {
    // If a theme is saved, use it
    if (localStorage.getItem('theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.getElementById('darkModeToggle').checked = true;
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('darkModeToggle').checked = false;
    }
} else {
    // If no theme is saved, default to light theme
    document.documentElement.setAttribute('data-bs-theme', 'light');
}

// Listen for changes on the checkbox
document.getElementById('darkModeToggle').addEventListener('change', function () {
    if (this.checked) {
        // If the checkbox is checked, set the data-bs-theme attribute to dark
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');  // Save the theme in localStorage
    } else {
        // If the checkbox is unchecked, set the data-bs-theme attribute to light
        document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');  // Save the theme in localStorage
    }
});




