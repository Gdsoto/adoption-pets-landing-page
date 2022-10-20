import React from 'react';

// Components
import Logo from '../../BaseComponents/Logo/Logo';

// Constants
import { lAYOUT_COPIES } from '../../../../utils/constants/layout.constants';

// Icons
import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <div className='py-16 mx-auto'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <Logo />
            <p className='max-w-xs mt-4 text-base sm:text-sm text-gray-600'>
              {lAYOUT_COPIES.FOOTER.LABEL}
            </p>
            <div className='flex mt-8 space-x-6 text-gray-600'>
              <a
                className='hover:opacity-75'
                href='#'
                target='_blank'
                rel='noreferrer'
              >
                <SiFacebook />
              </a>
              <a
                className='hover:opacity-75'
                href='#'
                target='_blank'
                rel='noreferrer'
              >
                <SiInstagram />
              </a>
              <a
                className='hover:opacity-75'
                href='#'
                target='_blank'
                rel='noreferrer'
              >
                <SiTwitter />
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4'>
            <div>
              <p className='font-medium'>Inicio</p>
              <nav className='flex flex-col mt-4 space-y-2 text-base sm:text-sm text-gray-500'>
                <a className='hover:opacity-75' href='#'>
                  Haz Parte
                </a>
                <a className='hover:opacity-75' href='#'>
                  Sobre Nosotros
                </a>
                <a className='hover:opacity-75' href='#'>
                  Iniciar Sesión
                </a>
                <a className='hover:opacity-75' href='#'>
                  Registrarse
                </a>
              </nav>
            </div>
            <div>
              <p className='font-medium'>Servicios</p>
              <nav className='flex flex-col mt-4 space-y-2 text-base sm:text-sm text-gray-500'>
                <a className='hover:opacity-75' href='#'>
                  Adopta
                </a>
                <a className='hover:opacity-75' href='#'>
                  Contactenos
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className='mt-8 text-xs text-gray-800'>© 2022 Adoption Center</p>
      </div>
    </footer>
  );
};

export default Footer;
