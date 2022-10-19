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
    <nav>
      <div class='flex justify-between py-5 mb-12'>
        <div className='flex items-center gap-3'>
          <GoMarkGithub className='text-pink-700 text-3xl' />
          <p className='font-bold'>Adoption Center</p>
        </div>

        <ul className='gap-7 items-center tracking-wide hidden lg:flex'>
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

        <ul className='hidden lg:flex gap-3 order-2 md:order-3'>
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
        <label for='menu-toggle' class='cursor-pointer lg:hidden block'>
          <svg
            class='fill-current text-blue-600'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
          >
            <title>menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
