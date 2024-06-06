import SearchWrap from "./SearchWrap";
import logoDh from "../assets/img/logo-dh.png";

function Dashboard() {
    return(
        
        <div className= 'dashboard'> 
            <SearchWrap/>
            <div className="user-avatar">
					<img src={logoDh} alt="Logo Digital House	"/>
			</div>
        </div>
        
    )
}

export default Dashboard;