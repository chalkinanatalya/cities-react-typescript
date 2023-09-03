import { nanoid } from '@reduxjs/toolkit';
import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';

type PlaceListProps = {
  count: number;
  offer: Offer;
}

function PlaceList({count, offer}:PlaceListProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{count} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={Number('0')}>
          Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={Number('0')}>Popular</li>
            <li className="places__option" tabIndex={Number('0')}>Price: low to high</li>
            <li className="places__option" tabIndex={Number('0')}>Price: high to low</li>
            <li className="places__option" tabIndex={Number('0')}>Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {Array(5).fill(null).map(() => <PlaceCard isNearPlace={false} key={nanoid()} offer={offer}/>)}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}

export default PlaceList;
