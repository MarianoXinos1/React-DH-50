import PropTypes from 'prop-types'; //ES6
import Stats from './Stats.jsx';


function Statistics(props) {
    return(
        
        <section className="content">
            <h2 className="mt-3">Estadísticas</h2>
            <div className="info-boxes">

                {props.metricsData.map((stats, i) => (       //metricsData es un array , stats= elemento actual que se esta usando del array, i= indice del elemento actual.
                    <Stats
                        key={stats.value+i}
                        icon={stats.icon}
                        icon_color={stats.icon_color}
                        value={stats.value}
                        title={stats.title}
                    />
                ))}

            </div>
        </section>
    )
}

    Statistics.propTypes= {
        metricsData: PropTypes.array.isRequired   // prop llamada metricsData que debería ser de tipo array + isRequired= Si metricsData no se proporciona o no es un array, se lanzará una advertencia.
    };
        


export default Statistics;
