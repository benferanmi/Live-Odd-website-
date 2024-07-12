import PropTypes from 'prop-types';
import './css/bookmaker.css'
const Bookmakers = ({ bookmakers }) => {
    return (
        <div className="grid-container bookmaker-head">
            <div className="grid-item"></div>
            {bookmakers.map((bookmaker, index) => (
                <div key={index} className="grid-item">
                    <h3>{bookmaker.title}</h3>
                </div>
            ))}
        </div>
    );
};

Bookmakers.propTypes = {
    bookmakers: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired
        })
    ).isRequired
};


export default Bookmakers;
