document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.social-buttons a');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Navigating to: ${button.href}`);
        });
    });
});
