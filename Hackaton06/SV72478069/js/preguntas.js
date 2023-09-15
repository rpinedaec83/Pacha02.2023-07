(function () {
    const titlePreguntas = [...document.querySelectorAll('.preguntas_title')];
    titlePreguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            let height = 0;
            let answer = pregunta.nextElementSibling;
            let addPadding = pregunta.parentElement.parentElement;

            addPadding.classList.toggle('preguntas_padding--add');
            pregunta.children[0].classList.toggle('preguntas_arrow--rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`
        })
    });

})();