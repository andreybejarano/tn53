window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    
    const form = document.querySelector('form.form');
    form.title.focus();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.error-message');
        allErrorLabels.forEach(element => {
            element.innerHTML = '';
        });
        const errors = [];
        if (!form.title.value) {
            errors.push({ name: 'title', message: 'El campo Titulo no puede estar vacio' });
            form.title.classList.add('is-invalid');
        } else {
            form.title.classList.remove('is-invalid');
            form.title.classList.add('is-valid');
        }
        if (!form.rating.value) {
            errors.push({ name: 'rating', message: 'El campo Calificación no puede estar vacio' });
            form.rating.classList.add('is-invalid');
        } else {
            form.rating.classList.remove('is-invalid');
            form.rating.classList.add('is-valid');
        }
        if (!form.awards.value) {
            errors.push({ name: 'awards', message: 'El campo Premios no puede estar vacio' });
            form.awards.classList.add('is-invalid');
        } else {
            form.awards.classList.remove('is-invalid');
            form.awards.classList.add('is-valid');
        }
        if (!form.release_date.value) {
            errors.push({ name: 'release_date', message: 'El campo Fecha de creación no puede estar vacio' });
            form.release_date.classList.add('is-invalid');
        } else {
            form.release_date.classList.remove('is-invalid');
            form.release_date.classList.add('is-valid');
        }
        if (!form.length.value) {
            errors.push({ name: 'length', message: 'El campo Duración no puede estar vacio' });
            form.length.classList.add('is-invalid');
        } else {
            form.length.classList.remove('is-invalid');
            form.length.classList.add('is-valid');
        }
        if (!form.genre_id.value) {
            errors.push({ name: 'genre_id', message: 'El campo Genero no puede estar vacio' });
            form.genre_id.classList.add('is-invalid');
        } else {
            form.genre_id.classList.remove('is-invalid');
            form.genre_id.classList.add('is-valid');
        }
        errors.forEach(error => {
            const errorLabel = document.getElementById('error-' + error.name);
            errorLabel.innerHTML = error.message;
        });
        if (errors.length === 0) {
            form.submit();
        }
    });
}