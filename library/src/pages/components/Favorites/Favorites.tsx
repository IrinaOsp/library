import { useState } from 'react';
import BOOKS from '../../../data/data';
import './Favorites.css';

type IhandleRadio = (e: React.ChangeEvent<HTMLInputElement>) => void;
type TypeSeasons = 'winter' | 'spring' | 'summer' | 'autumn';
const SeasonButtons: TypeSeasons[] = ['winter', 'spring', 'summer', 'autumn'];

export default function Favorites() {
  const [season, setSeason] = useState<TypeSeasons>('winter');
  const handleRadio: IhandleRadio = (event) => {
    if (event.target instanceof HTMLInputElement) {
      setSeason(event.target.name as TypeSeasons);
    }
  };
  return (
    <section id="favorites">
      <div className="container">
        <h2 className="section-heading">Favorites</h2>
        <fieldset className="favorites__season-picker">
          <legend className="favorites__legend">
            Pick favorites of season
          </legend>
          <div className="favorites__buttons-container">
            {SeasonButtons.map((button) => (
              <div className="favorites__button-container" key={button}>
                <input
                  type="radio"
                  name={button.toString()}
                  id={button}
                  onChange={handleRadio}
                  checked={button === season}
                />
                <label htmlFor={button}>{button}</label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="favorites__books-container">
          {BOOKS[SeasonButtons.findIndex((btn) => btn === season)].map(
            (book) => (
              <div className="book-container" key={book.name}>
                <h3 className="book-card-heading">Staff Picks</h3>
                <hr className="book-card-line" />
                <p className="book-name">{book.name}</p>
                <p className="book-author">{`By ${book.author}`}</p>
                <p className="book-description">{book.description}</p>
                <div className="book-img-container">
                  <img src={book.img} alt="book" className="book-img" />
                </div>
                <button className="standart-button" type="button">
                  Buy
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
