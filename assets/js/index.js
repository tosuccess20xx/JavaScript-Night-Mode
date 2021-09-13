// values
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'
// Selectors
const themeButton = document.getElementById('theme-btn')

// Values from Local Storage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Check the values and Add/Remove theme color and icon
if(selectedIcon){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Click Event For Icon Theme Toggler
themeButton.addEventListener('click', function(){
    // Toggle the icon and theme class
    document.body.classList.toggle(darkTheme)
    this.classList.toggle(iconTheme)
    // store the values in local storage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// Functions returns the values of theme color and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : ''
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : iconTheme