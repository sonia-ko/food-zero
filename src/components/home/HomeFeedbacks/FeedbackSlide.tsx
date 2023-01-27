import React from 'react';
import classes from './FeedbackSlide.module.css';

import ArrowLeft from '../../general/Icons/ArrowLeft';
import ArrowRight from '../../general/Icons/ArrowRIght';
import quote from '../../../assets/home/quotes.png';

interface FeedbackSlideProps {
  feedbackText: string;
  feedbackAvatar: string;
  authourName: string;
  authorJobTitle: string;
  totalFeedbacks: number;
  slideNumber: number;
  onArrowRightClick: () => void;
  onArrowLeftClick: () => void;
}

const FeedbackSlide: React.FC<FeedbackSlideProps> = ({
  feedbackText,
  feedbackAvatar,
  authourName,
  authorJobTitle,
  totalFeedbacks,
  slideNumber,
  onArrowRightClick,
  onArrowLeftClick,
}) => {
  return (
    <div className={`${classes.container} container`}>
      <div className={classes.innerContainer}>
        <p className={classes.feedbackText}>"{feedbackText}</p>
        <img className={classes.quote} src={quote} alt='quote' />
        <div className={classes.authorBlock}>
          <img
            className={classes.avatar}
            src={feedbackAvatar}
            alt={authourName}
          />
          <p className={classes.authorInfo}>
            <span>{authourName}</span>
            <span className={classes.jobTitle}>{authorJobTitle}</span>
          </p>
          <p className={classes.arrows}>
            <ArrowLeft onClick={onArrowLeftClick} /> {slideNumber} /
            {totalFeedbacks} <ArrowRight onClick={onArrowRightClick} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlide;
