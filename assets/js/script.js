// Módulo para gestionar la reproducción de videos en iframes
const reproductor = (function () {
    // Función para establecer la URL de un iframe
    const setUrl = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    };

    return {
        // Exponemos la función setUrl como método público
        play: setUrl,
    };
})();

class Multimedia {
    constructor(url) {
        // Variable privada para almacenar la URL del video
        let _url = url;

        // Método público para obtener la URL
        this.getUrl = function () {
            return _url;
        };
    }
    // Método setInicio que retorna el mensaje solicitado
    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video.';
    }
}

// Clase que representa un reproductor de video, heredando de Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
        // Llamamos al constructor de la clase padre
        super(url);
        // Almacenamos el ID del elemento HTML donde se insertará el video
        this.id = id;
    }

    // Método para reproducir el video
    playMultimedia() {
        // llama a la función pública (play) de la IIFE 'reproductor' con la URL y el ID del video
        reproductor.play(`${this.getUrl()}`, this.id);
    }

    // Método setInicio para establecer el tiempo de inicio del video
    setInicio(tiempo) {
        // Modificamos la URL para iniciar en el segundo especificado
        this.url = `${this.getUrl()}?start=${tiempo}`;
        // Actualizamos la fuente del iframe con la nueva URL
        reproductor.play(this.url, this.id);
    }
}

// Creamos instancias de la clase Reproductor para cada video
const musica = new Reproductor('https://www.youtube.com/embed/6VBU2sghNf8', 'musica');
const peliculas = new Reproductor('https://www.youtube.com/embed/jXXBQpV6Gvw', 'peliculas');
const series = new Reproductor('https://www.youtube.com/embed/JluMdKGsiiI', 'series');

// Iniciamos la reproducción de los videos
musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();

// Establecemos el tiempo de inicio de los videos
musica.setInicio(29);
peliculas.setInicio(3062);
