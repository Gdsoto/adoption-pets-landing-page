import React from 'react';

// Next
import Image from 'next/image';

// Components
import Button from '../../shared/BaseComponents/Button/Button';

// Constants
import { HOME_COPIES } from '../../../utils/constants/home.constants';

// Images
import SmallDog from '../../../assets/img/small-dog.png';
import BigDog from '../../../assets/img/big-dog.png';
import SmallKitty from '../../../assets/img/small-kitty.png';

// Icons
import { BiHomeAlt } from 'react-icons/bi';

const Hero = () => {
  const { HERO } = HOME_COPIES;

  return (
    <section className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 lg:gap-20 mb-12'>
      <article className='self-center'>
        <h1 className='font-albertBold text-5xl lg:text-8xl max-w-xl text-gray-500 mb-5 '>
          {HERO.TITLE}
        </h1>
        <p className='max-w-sm text-sm lg:text-base text-left mb-5'>
          {HERO.TEXT}
        </p>
        <Button type='primary' label={HERO.BUTTON.label} icon={<BiHomeAlt />} />
      </article>
      <article className='grid grid-cols-2 gap-4 lg:gap-14'>
        <div className='row-span-2 flex items-center'>
          <div className='bg-yellow pt-9 rounded-2xl flex justify-center w-full overflow-hidden'>
            <Image src={SmallDog} alt='imagen de perro adorable' />
          </div>
        </div>
        <div className='bg-orange rounded-2xl flex justify-center w-full overflow-hidden'>
          <Image src={SmallKitty} alt='imagen de gato adorable' />
        </div>
        <div className='bg-blue rounded-2xl overflow-hidden flex h-fit'>
          <Image src={BigDog} alt='imagen de perro adorable' />
        </div>
      </article>
    </section>
  );
};

export default Hero;
