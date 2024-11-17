
document.querySelectorAll('.offcanvas-body .nav-link').forEach(link => {
link.addEventListener('click', () => {
    const offcanvasElement = document.querySelector('.offcanvas');
    const bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    bootstrapOffcanvas.hide();
    });
});
