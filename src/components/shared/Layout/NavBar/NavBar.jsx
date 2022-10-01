import React from 'react';

// Components
import Button from '../../BaseComponents/Button/Button';

// Icons
import { BiKey } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { GoMarkGithub } from 'react-icons/go';

// Constants
import { lAYOUT_COPIES } from '../../../../utils/constants/layout.constants';

const NavBar = () => {
  const { NAV_BAR } = lAYOUT_COPIES;

  return (
    <nav className='flex justify-between py-5 mb-12'>
      <div className='flex items-center gap-3'>
        <GoMarkGithub className='text-pink-700 text-3xl' />
        <p className='font-bold'>Adoption Center</p>
      </div>
      <ul className='flex gap-7 items-center tracking-wide'>
        <li>
          <Button label={NAV_BAR.HOME} />
        </li>
        <li>
          <Button label={NAV_BAR.ABOUT} />
        </li>
        <li>
          <Button label={NAV_BAR.ADOPT} />
        </li>
        <li>
          <Button label={NAV_BAR.CONTACT} />
        </li>
      </ul>
      <ul className='flex gap-3'>
        <li className='box-border'>
          <Button
            type='secondary'
            label={NAV_BAR.LOG_IN}
            icon={<BiKey size='1rem' />}
          />
        </li>
        <li>
          <Button
            type='primary'
            label={NAV_BAR.SIGN_IN}
            icon={<BiChevronRight />}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
