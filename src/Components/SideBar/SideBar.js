import { NavLink } from "react-router-dom";

const SideBar = ({ contactListCount, friendsCount, familyCount, privateCount, workCount, otherCount }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="contacts-labels">
                <div className="title">All contacts<span>{contactListCount}</span></div>
                <div className="list">
                    <div className="input-group">
                        <input type="text" className="contacts-search" placeholder="Search" />
                    </div>
                    <div className="head">Labels</div>
                    <div className="unit">
                        <div className="lab lab-success">Work</div><span>{workCount}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-primary">Family</div><span>{familyCount}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-danger">Private</div><span>{privateCount}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-warning">Friends</div><span>{friendsCount}</span>
                    </div>
                    <div className="unit">
                        <div className="lab other-color">Other</div><span>{otherCount}</span>
                    </div>
                    <button type="button" className="btn btn-primary font-weight-700">Add new label</button>
                </div>
            </div>
            <div>
                <NavLink className="_404-button" to="/404">404 Button</NavLink>
            </div>
        </div>
    )
}

export default SideBar;