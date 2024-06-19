import PropTypes from 'prop-types'; //ES6
import GenresData from './GenresData';


function Genres() {

    const genresList = [
        {name:'Accion'},
        {name:'Aventura'},
        {name:'Animación'},
        {name:'Documentales'},
        {name:'Drama'},
        {name:'Fantasía'},
        {name:'Terror'},
        {name:'Romance'}
    ]


    return(
        <section className="content">
            <h2 className="mt-3">Géneros</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <button type="button" className="list-group-item list-group-item-action active text-center"
                    aria-current="true">
                    Listado de géneros de las películas
                </button>

                {genresList.map((genre, i) => (
                    <GenresData
                        key={genre.name+i}
                        genreName={genre.name}
                    />
                ))}
               
            </div>
        </section>
        
    )
}

Genres.propTypes= {
    genresList: PropTypes.string.isRequired   // 
};
    

export default Genres;
