import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <div className="ui four column grid">
                <div className="two wide column" />
                <div className="column">
                    <NavLink exact to='/about'>
                        <div onClick={this.props.onAboutIconSelect}>
                            <i class="big info circle icon"  style={{padding: "5px 0px 0px 0px"}}/>
                        </div>
                    </NavLink>
                </div>
                <div className="column">
                    <NavLink exact to='/contact'>
                        <div onClick={this.props.onAboutIconSelect}>
                            <i class="big address card icon"  style={{padding: "5px 0px 0px 0px"}}/>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Navigation;