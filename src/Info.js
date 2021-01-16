import React from 'react';
import {Link} from "react-router-dom";
import '../styles/app.css'

class Information extends React.Component {
    render() {
        console.log(this.props.allLists);
        if (this.props.allLists.length == 0) {
            return (<div></div>);
        }
        let item = this.props.allLists.filter(x => x.order ==  this.state.id);
        item = item[0];
        return (
            <div  className='container'>
                <button style={{backgroundColor: '#61dafb'}}><Link to="/">Back</Link></button>
                {Object.entries(item).map(function (x) {
                    console.log(x)
                    return (
                        <div key={x[0]}  className="list-projects">
                            <div className="col-md-12">
                                <ul>
                                    <li className="list-li">
                                        <div>
                                            {x[0]}: {x[1]}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Information;
