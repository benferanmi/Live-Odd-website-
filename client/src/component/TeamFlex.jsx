import { useRef } from 'react';
import PropTypes from 'prop-types';

const TeamFlex = ({ children }) => {
  const teamflexRef = useRef(null);

  const handleScrollLeft = () => {
    teamflexRef.current.scrollBy({
      left: -300, 
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    teamflexRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="teamflex-container">
      <div className="teamflex" ref={teamflexRef}>
        {children}
      </div>
        <button className="teamflex-left-button teamflex-nav" onClick={handleScrollLeft}>
          Left
        </button>
        <button className="teamflex-right-button teamflex-nav" onClick={handleScrollRight}>
          Right
        </button>
    </div>
  );
};

TeamFlex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TeamFlex;
