import React from "react";
import { AnimalTwoItem } from "./AnimalTwoItem";

const shopImg01 = "https://zgyzjjkhgnmlsokmxixj.supabase.co/storage/v1/object/public/np/shop_img01.jpg";
const shopImg02 = "https://zgyzjjkhgnmlsokmxixj.supabase.co/storage/v1/object/public/np/shop_img02.jpg";
const shopImg03 = "https://zgyzjjkhgnmlsokmxixj.supabase.co/storage/v1/object/public/np/shop_img03.jpg";
const shopImg04 = "https://zgyzjjkhgnmlsokmxixj.supabase.co/storage/v1/object/public/np/shop_img04.jpg";
const adoptionShape01 = "https://zgyzjjkhgnmlsokmxixj.supabase.co/storage/v1/object/public/np/adoption_shape01.png";
const adoptionShape02 = "https://zgyzjjkhgnmlsokmxixj.supabase.co/storage/v1/object/public/np/adoption_shape02.png";

const animalData = [
  {
    id: 1,
    image: shopImg01,
    name: "Cute French Bulldog",
    gender: "Male",
    breed: "French",
    location: "Bakersfield, California",
  },
  {
    id: 2,
    image: shopImg02,
    name: "purebred pussycat",
    gender: "Female",
    breed: "Germany",
    location: "Central Park, New York",
  },
  {
    id: 3,
    image: shopImg03,
    name: "Italian Rabbit",
    gender: "Male",
    breed: "Italy",
    location: "Birmingham, Alabama",
  },
  {
    id: 4,
    image: shopImg04,
    name: "Macaw Russian",
    gender: "Male",
    breed: "Canada",
    location: "Anchorage, Alaska",
  },
];

export const AnimalTwo = () => {
  return (
    <section className="animal__area-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section__title white-title text-center mb-40">
              <h2 className="title">Available Pets For Adoption</h2>
              <p>
                We will work with you to develop individualised care plans,
                including <br />
                management chronic diseases.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {animalData.map((animal) => (
            <AnimalTwoItem key={animal.id} {...animal} />
          ))}
        </div>
      </div>

      <div className="animal__shape-wrap">
        <img src={adoptionShape01} alt="shape" className="rotateme" />
        <img
          src={adoptionShape02}
          alt="shape"
          data-aos="fade-down-left"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};
