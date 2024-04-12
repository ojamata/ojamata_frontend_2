import React from 'react'
import Image from '../../../assets/svg/groceries.svg'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-40">
      <h1 className="text-3xl font-bold mb-4">About Our Grocery Store</h1>

      {/* Introduction */}
      <section className="lg:flex col-span-1 mb-8">
       <div className='flex flex-col items-center justify-center lg:w-[700px]'>
          <h2 className="text-2xl font-bold mb-2">Welcome to Our Store</h2>
          <p className="text-lg">
            OjaMata is dedicated to providing the finest quality groceries to our customers at affordable prices. 
            With a wide selection of fresh produce, pantry staples, and household essentials, we aim to make grocery shopping 
            convenient and enjoyable for everyone.
          </p>
       </div>
       <div className='lg:w-[600px]'>
        <img src={Image} alt=''/>
       </div>
      </section>

      {/* Our Mission */}
      <section className="mb-8 bg-green-800 text-white px-10 py-10">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg">
          Our mission is to ensure convenience as well as quality for people who are unable or unwilling to visit the local market. 
          We strive to provide a seamless online shopping experience, offering a diverse range of products and exceptional customer service. 
          At OjaMata, we believe in fostering strong relationships with our customers and communities, and we are committed to 
          promoting sustainability and ethical practices in everything we do.
        </p>
      </section>

      {/* Our Team */}
      <section className="flex flex-col gap-6 mb-8">
        <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
        <p className="text-lg">
          As a startup, we at [Store Name] are a passionate team of innovators who identified a problem and set out to solve it. 
          Our mission is to revolutionize the grocery shopping experience by providing convenient access to top-quality products 
          for customers who are unable or unwilling to visit the local market.
        </p>
        <p className="text-lg">
          Get to know some of the key members of our startup team:
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>Harry Nwa - Co-founder & CEO</li>
          <li>King Eddie - Co-founder & CTO</li>
          <li>Esther - Co-founder & Head of Operations</li>
        </ul>
          <p className="text-lg">
            Each member of our startup team brings unique expertise and dedication to our mission. 
            We are committed to delivering innovative solutions and exceptional service to our customers, 
            and we take pride in the entrepreneurial spirit that drives us forward.
          </p>
      </section>

      {/* Our Story/History */}
      <section className=" flex flex-col mb-8 gap-4 bg-green-800 text-white px-10 py-10">
        <h2 className="text-2xl font-bold mb-2">Our Story</h2>
        <p className="text-lg">
          OjaMata is the brainchild of a group of passionate techpreneurs who identified a gap in the market and decided to take action. Founded in 2024, our startup was born out of a shared vision to revolutionize the way people access fresh groceries.
        </p>
        <p className="text-lg">
          Our journey began when Harry, Eddie and Esther realized the challenges faced by individuals who struggled to find time for grocery shopping or lacked access to quality products in their local area. Motivated by a desire to make a positive impact, our founders set out to create a solution that would empower customers to conveniently shop for groceries from the comfort of their homes.
        </p>
        <p className="text-lg">
          Despite the initial hurdles and uncertainties that come with starting a business, our startup persevered. We leveraged technology, forged partnerships with local suppliers, and fine-tuned our business model to meet the evolving needs of our customers.
        </p>
        <p className="text-lg">
          Today, OjaMata is proud to have made significant strides in our mission to provide convenient, high-quality groceries to our community. While our journey as a startup continues, we remain committed to innovation, customer satisfaction, and making a positive difference in the lives of our customers.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-lg mb-4">
          Have questions or feedback? We'd love to hear from you. Reach out to us at <a href='https://mail.google.com/mail'>ojamata@ojamata.com</a>.
        </p>
      </section>
    </div>
  )
}

export default About
