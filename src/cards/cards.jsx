import PropTypes from 'prop-types'
import Clip from '../assets/clip.png'
import Comente from '../assets/comente.png'
import User from '../assets/user.png'
import '../cards/cards.css'

function Cards({ colorPriority, priority, review }) {
    return (
        <div className="kanban-card" draggable="true">
            <div className={`badge ${colorPriority}`}>
                <span>
                    {priority}
                </span>
            </div>

            <p className="card-title">
                {review}
            </p>

            <div className="cards-infos">
                <div className="card-icons">
                    <p>
                        <img src={Comente} alt="coment" />
                    </p>

                    <p>
                        <img src={Clip} alt="clip" />
                    </p>
                </div>

                <div className="user">
                    <img src={User} alt="avatar" />
                </div>
            </div>
        </div>
    )
}

Cards.propTypes = {
    priority: PropTypes.string,
    review: PropTypes.string,
    colorPriority: PropTypes.string,
}

export default Cards