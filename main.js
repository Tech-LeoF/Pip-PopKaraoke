// Conexión con HTMl (Seleccionar elementos)

const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

// Función para agregar una canción a la lista

function addSong(songName, artistName, songUrl) {
    const listSong = document.createElement('li');
    listSong.innerHTML = `
            <strong> ${songName} </strong> 
            - ${artistName}
            <a href="${songUrl}" target="_blank" >Reproducir</a>
            <button class="delete-btn bg-red-700" >Eliminar</button>
    `;
    //Agregar al html
    playList.appendChild(listSong);

    const deleteButton = listSong.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        listSong.remove();
    })

}

//Manejo de envio de formularios (Eventos)

songForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtener datos del formulario
    const songName = document.getElementById("song_name").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("url_song").value;

    addSong(songName, artistName, songUrl);

    songForm.reset();
})

const paragraph = document.getElementsByTagName("p")[0];
paragraph.innerHTML = "Sumérgete en la mejor experiencia de karaoke, donde puedes agregar tus canciones favoritas y disfrutarlas con amigos. Nuestro sistema te permite crear una lista de reproducción personalizada, añadir nuevas canciones fácilmente y eliminarlas cuando quieras."
