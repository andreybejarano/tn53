window.onload = () => {
    const form = document.querySelector('form.card.formulario');
    const btnCreate = document.getElementById('botonAgregar');
    btnCreate.addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            const body = {
                title: form.title.value,
                rating: form.rating.value,
                awards: form.awards.value,
                release_date: form.release_date.value,
                length: form.length.value
            };
            const res = await fetch('http://localhost:3031/api/movies/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            await res.json();
            location.href = '/home.html';
        } catch (error) {
            console.log(error);
        }
    })
}