import React from 'react';
import classes from './DishArticle.module.css';

import Button from '../../general/Button/Button';
import DishPicture from './DishPicture';

import getDateFunction from '../../../helpers/getDateFunction';

interface DishArticleProps {
  imageSrc: string;
  imageAlt?: string;
  articleAuthor: string;
  articleAuthorPhoto: string;
  articlePublishDate: Date;
  numberOfComments: number;
  articleTitle: string;
  text?: string;
  articleDescription: string;
}

const DishArticle: React.FC<DishArticleProps> = ({
  imageSrc,
  imageAlt = 'Photo of the dish',
  text,
  articleAuthor,
  articleAuthorPhoto,
  articlePublishDate,
  numberOfComments,
  articleTitle,
  articleDescription,
}) => {
  const articleTime = articlePublishDate
    .toLocaleString('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: '2-digit',
    })
    .toLowerCase();

  return (
    <div className={classes.container}>
      <DishPicture text={text} imageSrc={imageSrc} />
      <div className={classes.articleReview}>
        <div className={classes.generalInfo}>
          <img
            className={classes.avatar}
            src={articleAuthorPhoto}
            alt={articleAuthor}
          />
          <span className={classes.descriptionItem}>{articleAuthor}</span>
          <span className={classes.descriptionItem}>
            {getDateFunction(articlePublishDate)}
          </span>
          <span className={classes.descriptionItem}>{articleTime}</span>
          <span className={classes.descriptionItem}>
            {numberOfComments} comments
          </span>
        </div>
        <p className={classes.title}>{articleTitle}</p>
        <p className={classes.description}>{articleDescription}</p>
        <Button
          arrowAfter={true}
          btnStyle='transparent'
          btnText='Read More'
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default DishArticle;
