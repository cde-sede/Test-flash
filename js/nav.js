const bloc = document.querySelector('body');
if (bloc) {
    document.addEventListener('scroll', (e) => {
        const header = document.querySelector('header');
        if (header === null) return ;

        if (window.scrollY > 10)
            header.classList.add('scrolled');
        else
            header.classList.remove('scrolled');
    });
}










