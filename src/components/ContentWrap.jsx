const iconStyleBlue = {
    "font-size": "2.5rem",
    "color": "cornflowerblue"
}

const iconStyleOrange = {
    "font-size": "2.5rem",
    "color": "orange"
}

const iconStyleGreen = {
    "font-size": "2.5rem",
    "color": "green"
}

function ContentWrap() {
    return(  
        <main className="content-wrap">
       
        <header className="preventa">
            <h2>Preventa</h2>
            <div>
                <img src="./img/banner.jpg" alt="Trolls 2"/>
            </div>
        
        </header>
       
        <section className="content">
            <h2 className="mt-3">Estadísticas</h2>
            <div className="info-boxes">

                <div className="info-box">
                    <div className="box-icon">
                        <i className="bi bi-film" style={iconStyleBlue}></i>
                    </div>

                    <div className="box-content">
                        <span className="big">15</span>
                        Cantidad de estrenos
                    </div>
                </div>

                <div className="info-box">
                    <div className="box-icon">
                        <i className="bi bi-tags-fill" style={iconStyleOrange}></i>
                    </div>

                    <div className="box-content">
                        <span className="big">12</span>
                        Categorías
                    </div>
                </div>

                <div className="info-box active">
                    <div className="box-icon">
                        <i className="bi bi-currency-dollar" style={iconStyleGreen}></i>
                    </div>

                    <div className="box-content">
                        <span className="big">$ 489.567</span>
                        Total ventas
                    </div>
                </div>
            </div>
        </section>
       
        <section className="content">
            <h2>Próximos estrenos</h2>
            <table className="table shadow p-3 mb-5 bg-body-tertiary rounded">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Director</th>
                        <th scope="col">Fecha de estreno</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>SUPER MARIO BROS</td>
                        <td> Aaron Horvath</td>
                        <td>09 ABR. 2023</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>PONYO Y EL SECRETO DE LA SIRENITA </td>
                        <td>Dan Fontain</td>
                        <td>11 MAY. 2023</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>THE MARVELS </td>
                        <td>Glor Medin</td>
                        <td>27 JUL. 2023</td>
                    </tr>
                </tbody>
            </table>
        </section>
   
        <section className="content">
            <h2>Más populares</h2>
            <article className="person-boxes">
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src="../img/avatar.jpg" alt="Avatar"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">Avatar: The Way of Water</h2>
                        <p className="bio-position">Ciencia Ficción</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src="../img/john-wick.jpg" alt="john-wick"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">John Wick: Chapter 4</h2>
                        <p className="bio-position">Acción</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src="../img/shazan.jpg" alt="shazan"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">Shazam! Fury of the Gods</h2>
                        <p className="bio-position">Fantasía</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src="../img/sayen.jpg" alt="sayen"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">Sayen</h2>
                        <p className="bio-position">Acción</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src="../img/the-magicians-elephant.jpg" alt="Avatar"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">The Magician Elephant</h2>
                        <p className="bio-position">Animación</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src="../img/sniper.jpg" alt="Avatar"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">Sniper: The White Raven</h2>
                        <p className="bio-position">Guerra</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
            </article>
        </section>
       
        <section className="content">
            <h2 className="mt-3">Géneros</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <button type="button" className="list-group-item list-group-item-action active text-center"
                    aria-current="true">
                    Listado de géneros de las películas
                </button>
                <button type="button" className="list-group-item list-group-item-action text-center">Acción</button>
                <button type="button" className="list-group-item list-group-item-action text-center">Avetura</button>
                <button type="button" className="list-group-item list-group-item-action text-center">Animación</button>
                <button type="button"
                    className="list-group-item list-group-item-action text-center">Documentales</button>
                <button type="button" className="list-group-item list-group-item-action text-center">Drama</button>
                <button type="button" className="list-group-item list-group-item-action text-center">Fantasía</button>
                <button type="button" className="list-group-item list-group-item-action text-center">Terror</button>
                <button type="button" className="list-group-item list-group-item-action text-center">Romance</button>
            </div>
        </section>
       
    </main>
        
    )
}

export default ContentWrap;