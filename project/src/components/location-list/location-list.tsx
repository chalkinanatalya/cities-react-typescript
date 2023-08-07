import { Link } from 'react-router-dom';
import { Locations } from '../../const';


function LocationList():JSX.Element {
  const locations = Locations;
  return (
    <ul className="locations__list tabs__list">
      {Object.values(locations).map((location) => (
        <li className="locations__item" key={location}>
          <Link to="/" className="locations__item-link tabs__item">
            <span>{location}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LocationList;
