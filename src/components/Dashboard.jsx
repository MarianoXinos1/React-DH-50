import SearchWrap from "./SearchWrap";
import MenuWrap  from "./MenuWrap";
import ContentWrap from "./ContentWrap";


function Dashboard() {
    return(
        
        <div className= 'dashboard'> 
            <SearchWrap/>
            <MenuWrap/>
            <ContentWrap/>
        </div>
        
    )
}

export default Dashboard;