import React, {Component} from 'react';

class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdown">
                        <button className="dropdown-item" type="button">Profile</button>
                        <button className="dropdown-item" type="button">Manage Income</button>
                        <button className="dropdown-item" type="button">Manage Expenses</button>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;