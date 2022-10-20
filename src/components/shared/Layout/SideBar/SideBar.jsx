import React from 'react';

// Components
import Button from '../../BaseComponents/Button/Button';
import Logo from '../../BaseComponents/Logo/Logo';

// Icons
import { BiKey } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

// Constants
import { lAYOUT_COPIES } from '../../../../utils/constants/layout.constants';

export const NavSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { NAV_BAR } = lAYOUT_COPIES;

  return (
    <React.Fragment>
      <section
        className={`fixed inset-y-0 left-0 z-30 w-full overflow-y-auto transition duration-300 ease-out transform translate-x-0 ${
          isSidebarOpen ? 'ease-out translate-x-0' : 'ease-in -translate-x-full'
        }`}
      >
        <ul className={`fixed inset-y-0 left-0 z-30 w-64 bg-white px-6 `}>
          <li className='py-5 mb-12'>
            <Logo />
          </li>
          <li className='mb-12'>
            <ul className='flex flex-col gap-3'>
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
          </li>
          <li className='w-full mb-5 absolute bottom-0'>
            <ul className='flex gap-3 flex-col'>
              <li className='box-border'>
                <Button
                  type='secondary'
                  label={NAV_BAR.LOG_IN}
                  icon={<BiKey size='1rem' />}
                />
              </li>
              <li className='box-border'>
                <Button
                  type='primary'
                  label={NAV_BAR.SIGN_IN}
                  icon={<BiChevronRight />}
                />
              </li>
            </ul>
          </li>
        </ul>
        <div
          className='bg-black fixed inset-y-0 w-full opacity-50'
          onClick={() => setIsSidebarOpen(false)}
        />
      </section>
    </React.Fragment>
  );
};
