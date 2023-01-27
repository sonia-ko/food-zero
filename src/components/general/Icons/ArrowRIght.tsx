import React from 'react';
import classes from './Icons.module.css';

interface ArrowRightProps {
  onClick: () => void;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <svg className={classes.arrowIcon} xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_6790_1572)'>
          <path
            d='M34.0517 0.982422L31.3237 3.77048L39.6221 12.063H0.75V15.938H39.6221L31.3257 24.2324L34.0517 27.0185L47.0659 14.0005L34.0517 0.982422Z'
            // fill='#233000'
          />
        </g>
        <defs>
          <clipPath id='clip0_6790_1572'>
            <rect width='48' height='28' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default ArrowRight;
