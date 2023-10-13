import './About.css';
import Image1 from '../../../assets/images/slider/image1.png';
import Image2 from '../../../assets/images/slider/image2.png';
import Image3 from '../../../assets/images/slider/image3-2.png';
import Image4 from '../../../assets/images/slider/image3-1.png';
import Image5 from '../../../assets/images/slider/image3.png';

const Images: string[] = [Image1, Image2, Image3, Image4, Image5];
const Buttons: number[] = [1, 2, 3, 4, 5];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-heading">About</h2>
        <p className="about__text">
          The Brooklyn Library is a free workspace, a large number of books and
          a cozy coffee shop inside
        </p>
        <div className="about__wrapper">
          <div className="about__slider">
            {Images.map((img) => (
              <div className="about__item" key={img}>
                <img className="about__img" src={img} alt="slider" />
              </div>
            ))}
          </div>
        </div>
        <div className="about__pagination-buttons">
          {Buttons.map((button) => (
            <div className="about__pagination-button-area" key={button}>
              <span className="about__pagination-button" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
