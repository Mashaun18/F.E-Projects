function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
}
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode)


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault()
    const formData = new FormData(event.target);
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`)
    }
    event.target.reset()
  })
  
  
  
  
  
  