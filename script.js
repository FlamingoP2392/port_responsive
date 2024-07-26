document.querySelectorAll('.slideButton').forEach((button) => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        document.getElementById(`transcript${index}`).classList.toggle('active');
    });
});

document.querySelectorAll('.closeButton').forEach((button) => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        document.getElementById(`transcript${index}`).classList.remove('active');
    });
});
