(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const modalWindow = document.querySelector('.modal__window');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', openModal);

    close.addEventListener('click', closeModal);

    modal.addEventListener('click', closeModal);

    modalWindow.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    function closeModal() {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
    }

    function openModal() {
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
    }
})();