import React from 'react';

// Components
import Button from '../../BaseComponents/Button/Button';
import Logo from '../../BaseComponents/Logo/Logo';

// Icons
import { BiKey } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

// Constants
import { lAYOUT_COPIES } from '../../../../utils/constants/layout.constants';

const NavBar = ({ setIsSidebarOpen }) => {
  const { NAV_BAR } = lAYOUT_COPIES;

  return (
    <>
      <nav>
        <div className='flex justify-between py-5 mb-12'>
          <Logo />
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
          <button
            onClick={() => setIsSidebarOpen(true)}
            className='cursor-pointer lg:hidden block'
          >
            <label htmlFor='menu-toggle'>
              <svg
                className='fill-current text-blue-600'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
              >
                <title>menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </label>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
