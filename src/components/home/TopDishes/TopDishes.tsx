import React from 'react';
import classes from './TopDishes.module.css';
import DishArticle from './DishArticle';

import avatar1 from '../../../assets/home/dianne-russel.png';
import avatar2 from '../../../assets/home/julie-christie-photo.png';
import fruitRolls from '../../../assets/home/fruit-rolls.png';
import asparagus from '../../../assets/home/asparagus.png';

const TopDishes: React.FC = () => {
  const today = new Date();
  return (
    <div className='container'>
      <div className={classes.container}>
        <DishArticle
          text='Fashion'
          imageSrc={fruitRolls}
          articleAuthor='Julie Christie'
          articleAuthorPhoto={avatar2}
          articlePublishDate={today}
          numberOfComments={3}
          articleTitle='Fruit and vegetables and protection against diseases'
          articleDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        />

        <DishArticle
          text='Fashion'
          imageSrc={asparagus}
          articleAuthor='Dianne Russell'
          articleAuthorPhoto={avatar2}
          articlePublishDate={today}
          numberOfComments={2}
          articleTitle='Asparagus Spring Salad with Rocket, Goats Cheese'
          articleDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        />
      </div>
    </div>
  );
};

export default TopDishes;
