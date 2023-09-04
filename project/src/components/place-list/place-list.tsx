import { nanoid } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import PlaceCardInfo from '../place-card-info/place-card-info';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type PlaceListProps = {
  count: number;
  offer: Offer;
}

function PlaceList({ count, offer }: PlaceListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer|null>(null);
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
          {Array(5).fill(null).map(() => (<article className="cities__card place-card" key={nanoid()} onMouseEnter={() => setActiveCard(offer)} onMouseLeave={() => setActiveCard(null)}> {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}<div className="cities__image-wrapper place-card__image-wrapper"><Link to='/'><img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="" /></Link></div><PlaceCardInfo offer={offer} /></article>)
          )}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map" data-active-offer-id={activeCard ? activeCard.id : ''}></section>
      </div>
    </div>
  );
}

export default PlaceList;
