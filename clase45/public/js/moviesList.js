window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    // Clase45 - Microdesafio 1
    const logo = document.querySelector('figure img');

    logo.addEventListener('mouseover', () => {
        if (!modo) {
            body.style.backgroundColor = '#7f7f7f'
            body.classList.add('fondoMoviesList');
        } else {
            body.style.backgroundColor = '#fff';
            body.classList.remove('fondoMoviesList');
        }
        modo = !modo;
    });
}