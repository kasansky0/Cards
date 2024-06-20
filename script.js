const panels = document.querySelectorAll('.panel');

panels.forEach(ch => {
    ch.addEventListener('click', () => {
        removeActiveClasses(ch);
        ch.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(ch => {
        ch.classList.remove('active');
    })
}