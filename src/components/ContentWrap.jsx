import MostPopular from "./MostPopular";
import Genres from "./Genres";
import NextReleases from "./NextReleases";
import PreSale from "./PreSale";
import Statistics from "./Statistics";


function ContentWrap() {
    const metricsData = [
        {
            icon: "bi bi-film",
            icon_color: "cornflowerblue",
            value: 15,
            title: "Cantidad de estrenos"
        },
        {
            icon: "bi bi-tags-fill",
            icon_color: "orange",
            value: 12,
            title: "Categorías"
        },
        {
            icon: "bi bi-currency-dollar",
            icon_color: "green",
            value: 489.567,
            title: "Total Ventas"
        },
    ]

    return(  
        <main className="content-wrap">
            <PreSale />
            <Statistics metricsData={metricsData}/>
            <NextReleases />
            <MostPopular />
            <Genres />
    </main> 
    )
}

export default ContentWrap;