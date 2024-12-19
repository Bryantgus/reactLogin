import "./MainPage.css"
import SideBar from "./SideBar";
/* eslint-disable react/prop-types */
const MainPage = ({role}) => {
    return (
        <div>
            <SideBar role={role} />          

        </div>
    )
}

export default MainPage;