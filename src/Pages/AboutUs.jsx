import React from 'react'
import { asstes } from '../assets/assets'

function AboutUs() {
  return (
    <div>
         <div className='flex justify-center flex-wrap gap-8 my-10'>
        {/* left side */}
        <div>
            <img className='w-96' src={asstes.contact_image} alt="" />
        </div>

        {/* right side */}
        <div className='max-w-[700px] text-gray-600  '>
          <p className='mb-5'>
          MarketPlace Grocery Application is built with scalability in mind, designed to handle large volumes of products and user traffic. Features like product search, filtering, and an intuitive shopping cart offer a real-time and interactive shopping experience similar to other Apps.
          </p>
          <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, a. Perspiciatis consectetur beatae porro facilis, facere nesciunt quibusdam atque, at libero aperiam asperiores ullam, quae placeat corporis esse illum ducimus debitis error ut nihil voluptas? Harum impedit, itaque deserunt exercitationem aliquid nam animi earum id consectetur obcaecati excepturi quibusdam neque?</p>
          <p className='mb-5 font-medium text-gray-600'>Our Vision</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum officiis eveniet sunt fuga praesentium ut? Praesentium commodi ea doloribus tempora earum, ut vitae officiis recusandae, est eum, dolores provident!.</p>
        </div>

      </div>
    </div>
  )
}

export default AboutUs