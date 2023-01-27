import React from 'react';
import classes from './Icons.module.css';

interface ArrowLeftProps {
  onClick: () => void;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <svg className={classes.arrowIcon} xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_6790_1570)'>
          <path d='M13.7642 0.982422L16.4922 3.77048L8.19386 12.063H47.0659V15.938H8.19386L16.4902 24.2324L13.7642 27.0185L0.749981 14.0005L13.7642 0.982422Z' />
        </g>
        <defs>
          <clipPath id='clip0_6790_1570'>
            <rect width='48' height='28' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default ArrowLeft;
