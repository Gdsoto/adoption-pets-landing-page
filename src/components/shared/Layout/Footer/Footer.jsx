import React from 'react';

// Constants
import { lAYOUT_COPIES } from '../../../../utils/constants/layout.constants';

// Icons
import { GoMarkGithub } from 'react-icons/go';
import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <div class='py-16 mx-auto'>
        <div class='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <div className='flex items-center gap-3'>
              <GoMarkGithub className='text-pink-700 text-3xl' />
              <p className='font-bold'>Adoption Center</p>
            </div>
            <p class='max-w-xs mt-4 text-base sm:text-sm text-gray-600'>
              {lAYOUT_COPIES.FOOTER.LABEL}
            </p>
            <div class='flex mt-8 space-x-6 text-gray-600'>
              <a class='hover:opacity-75' href target='_blank' rel='noreferrer'>
                <SiFacebook />
              </a>
              <a class='hover:opacity-75' href target='_blank' rel='noreferrer'>
                <SiInstagram />
              </a>
              <a class='hover:opacity-75' href target='_blank' rel='noreferrer'>
                <SiTwitter />
              </a>
            </div>
          </div>
          <div class='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4'>
            <div>
              <p class='font-medium'>Inicio</p>
              <nav class='flex flex-col mt-4 space-y-2 text-base sm:text-sm text-gray-500'>
                <a class='hover:opacity-75' href>
                  Haz Parte
                </a>
                <a class='hover:opacity-75' href>
                  Sobre Nosotros
                </a>
                <a class='hover:opacity-75' href>
                  Iniciar Sesión
                </a>
                <a class='hover:opacity-75' href>
                  Registrarse
                </a>
              </nav>
            </div>
            <div>
              <p class='font-medium'>Servicios</p>
              <nav class='flex flex-col mt-4 space-y-2 text-base sm:text-sm text-gray-500'>
                <a class='hover:opacity-75' href>
                  Adopta
                </a>
                <a class='hover:opacity-75' href>
                  Contactenos
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p class='mt-8 text-xs text-gray-800'>© 2022 Adoption Center</p>
      </div>
    </footer>
  );
};

export default Footer;
