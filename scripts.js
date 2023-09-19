document.querySelectorAll('.opacity-slider').forEach(slider => {
    slider.addEventListener('input', function() {
        const parent = this.parentElement;
        const image = parent.querySelector('.test-image');
        image.style.opacity = this.value;
    });
});
