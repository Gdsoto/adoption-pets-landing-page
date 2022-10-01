import React from 'react';

const Button = ({ type, icon = false, onClick, label }) => {
  const handleClick = () => {
    //onClick();
  };

  const getStyles = () => {
    const style = 'text-base rounded-md py-2 flex gap-2 items-center ';

    switch (type) {
      case 'primary':
        return (
          style +
          'px-5 bg-pink-500 border-2 border-pink-500 block hover:bg-pink-700 hover:border-pink-700 text-gray-500'
        );

      case 'secondary':
        return (
          style +
          'px-5 border-2 border-gray-500 block hover:border-pink-500 hover:text-pink-700'
        );

      default:
        return style + 'hover:text-pink-700';
    }
  };

  return (
    <button type='button' onClick={handleClick} className={getStyles()}>
      <p>{label}</p>
      {icon && icon}
    </button>
  );
};

export default Button;
