import React from 'react';

// Constants
import { HOME_COPIES } from '../../../utils/constants/home.constants';

// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const HelpUs = () => {
  return (
    <section className='relative mb-12'>
      <div className='w-full flex flex-col'>
        <h3 className='font-albertBold text-5xl lg:text-8xl text-pink-700 opacity-40 text-center'>
          {HOME_COPIES.HELP_US.TITLE}
        </h3>
        <p className='flex text-sm lg:text-base my-10 text-center px-12'>
          <RiDoubleQuotesL className='text-pink-700 text-6xl' />
          {HOME_COPIES.HELP_US.TEXT}
          <RiDoubleQuotesR className='text-pink-700 text-6xl' />
        </p>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {HOME_COPIES.HELP_US.CARDS.map((card, id) => (
          <li
            key={id}
            className={`p-8 bg-gray-200 rounded-xl text-center shadow-lg transition ease-in-out delay-1 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-green-700`}
          >
            <p className='mb-2 text-lg font-albertBold text-white'>
              {card.title}
            </p>
            <p className='text-sm lg:text-base text-white'>{card.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HelpUs;
