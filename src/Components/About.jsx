import React, { useState } from "react";
import arrow from "../Assets/Images/icons/side.png";

function About() {
  const [toggle, setToggle] = useState(false);
  const togButton = () =>
    setToggle(() => {
      return !toggle;
    });
  return (
    <div className="px-20 pt-20 pb-10 bg-stone-100" id="about">
      <h1 className="text-4xl font-medium " style={{borderLeft:'7px solid var(--prime)',paddingLeft:'10px'}}>About Us</h1>
      <h1 className="text-4xl text-center no-visibile py-8 font-medium">
        Get to Know <span className="text-blue-700">Us</span>
      </h1>
      <div className="grid grid-cols-2 px-20">
        <h2 className="text-5xl text-left py-5 my-auto">
          A Little Bit
          <br />
          About <br />
          The History of <br />
          <b className="text-blue-700">
            the Magic <br /> Spice
          </b>
          <div
            className="cursor-pointer flex text-lg font-normal border rounded-md px-3 border-blue-600 w-fit gap-6 mt-10"
            onClick={togButton}>
            <button className="">{!toggle &&('Know More')} {toggle &&('Show Less')}</button>
            <img src={arrow} alt="" className="h-10 w-5 object-contain" />
          </div>
        </h2>

        <div className="">
          <p className="mr-5 text-[18px]">
            Welcome to The Magic Spice, a brand of Thomas and Thomas Enterprise,
            originating from the Kannur - Kerala, the land of Spices. We are a
            family-owned business with over 65 years of history, dedicated to
            delivering quality and authenticity in every spice we trade. Our
            spices are sourced, carefully selected, and graded from tropical
            forests and gardens, where they grow in harmony with nature. Our
            spice products come from various regions of India, such as the spice
            hills of Wayanad, the cardamom reserve of Idukki, the Nilgiri hills,
            Coorg, and the north eastern states, each offering a distinct flavor
            and aroma. Our concern have been supporting small farmers and local
            communities by providing them with fair prices and ethical
            practices. Our product range includes black pepper, cardamom,
            nutmeg, mace, clove, cinnamon, turmeric, ginger, and more.
          </p>
        </div>
        {toggle && (
          <p className="mt-5 mr-5 text-[18px]">
            The Magic Spice is led by Shaji Thomas and Annamma Thomas, who are
            not only business partners, but also life partners. They have a
            wealth of experience, passion, and dedication in the spice trade,
            and their shared vision and commitment have shaped The Magic Spice
            into a trusted and reputed brand. Their partnership goes beyond
            business, as they share a deep bond and understanding that is
            reflected in their work. Their values and principles guide every
            aspect of our operations, ensuring customer satisfaction and quality
            assurance. As a part of the Thomas and Thomas Enterprise, we also
            have interests in transport, biomass, food products, farming timber,
            and related products, under our sister brand, Guardian.
          </p>
        )}
        {toggle && (
          <p className="mt-5 mr-5 text-[18px]">
            Guardian represents our diverse portfolio and our commitment to
            providing a wide range of high-quality products and services to our
            customers. At The Magic Spice, we believe that spices are not just
            ingredients, but magic. They can transform any dish into a delicious
            and healthy experience. Our journey began over six decades ago, and
            since then, we have been bringing the magic of spices into your
            kitchen. With the advent of e-commerce, we have made our products
            more accessible and convenient for you. Whether you are a home cook,
            a restaurant owner, or a business, our online store caters to all
            your spice needs. We offer both retail and wholesale options,
            ensuring that no matter the size of your requirement, we have you
            covered. Explore our website to learn more about our products, our
            history, and our vision. Join us on this flavorful journey and
            experience the magic of spices with us. Thank you for choosing The
            Magic Spice, the spice of life.
          </p>
        )}
      </div>
    </div>
  );
}
export default About;
