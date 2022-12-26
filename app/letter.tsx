'use client'

import Image from 'next/image'
import oakHill from '../public/oakhillfront.jpeg'
import Logo from './logo'
import { motion } from 'framer-motion'

export default function Letter() {
  return (
    <motion.article
      className="max-w-xl mx-auto md:mt-16 mt-3 px-3"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 2, type: 'spring' }}
    >
      <div className="relative flex items-center justify-center w-full h-72 rounded-2xl overflow-hidden mb-12 bg-black">
        <Image
          className="object-cover w-full h-full opacity-50"
          src={oakHill}
          alt="Front of oak hill"
        />
        <Logo className="text-white w-full absolute md:p-16 p-8" />
      </div>
      <div className="prose prose-lg prose-h1:text-3xl prose-h1:font-bold pb-16">
        <h1>Dear Friends,</h1>
        <p>
          The holidays are upon us and we have much for which to be thankful and
          celebrate. We so appreciate your support of Oak Hill Cafe and Farm and
          its vision over the years. However, it is with great sadness that we
          are announcing that we are ending this part of our journey. We will be
          closing our doors on December 18th.
        </p>
        <p>
          When we opened 3 1/2 years ago, we had no idea what challenges lay
          ahead. We are proud of what we accomplished in that time. We are proud
          to have pushed the boundaries of creativity and excellence in the
          Greenville food scene. We are proud of the James Beard nomination for
          Best New Restaurant. We are proud of the many publications we were in,
          both locally and nationally. We are proud to have turned a family home
          and clay backyard into a beautiful restaurant and farm. We hope our
          legacy will be remembered fondly by the community we served.
        </p>
        <p>
          In January, we will be launching Oakfire Handcrafted Pizza and
          offering wood fired pizzas and our famous OHC burgers. To start, this
          will be to go and delivery only. We are very committed to make the
          best pizzas possible for Greenville and we hope you'll give us a try.
        </p>
        <p>With Warmest Thanks,</p>
        <i className="text-gray-500">
          — Lori, David and the Oak Hill Café Team.
        </i>
      </div>
    </motion.article>
  )
}
