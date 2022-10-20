import React from 'react';

// Icons
import { GoMarkGithub } from 'react-icons/go';

const Logo = () => {
  return (
    <div className='flex items-center gap-3'>
      <GoMarkGithub className='text-pink-700 text-3xl' />
      <p className='font-bold'>Adoption Center</p>
    </div>
  );
};

export default Logo;
