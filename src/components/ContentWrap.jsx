import MostPopular from "./MostPopular";
import Genres from "./Genres";
import NextReleases from "./NextReleases";
import PreSale from "./PreSale";
import Statistics from "./Statistics";


function ContentWrap() {
    return(  
        <main className="content-wrap">
            <PreSale />
            <Statistics />
            <NextReleases />
            <MostPopular />
            <Genres />
    </main> 
    )
}

export default ContentWrap;