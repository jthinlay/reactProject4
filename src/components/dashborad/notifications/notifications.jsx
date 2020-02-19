import React from 'react';
import './notifications.styles.scss';
import moment from 'moment';


const Notifications = (props) => {
    const {notifications} = props;
    console.log('jt', notifications)
    return(
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className='card-title'>Notifications </span>
                    <ul className='notifications'>
                        {notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span><i>{item.user} </i></span>
                                    <span>{item.content} </span>
                                    <div className="notification-time">{moment(item.time.toDate()).fromNow()}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Notifications