import React from 'react';
import classes from './HomeFeedbacks.module.css';
import FeedbackSlide from './FeedbackSlide';
import { useState } from 'react';
import { topFeedbacks } from '../../../static/websiteData';

const HomeFeedbacks: React.FC = () => {
  const [activeFeedback, setActiveFeedback] = useState(0);

  const handleArrowRightClick = () => {
    const newFeedback = activeFeedback + 1;
    newFeedback === topFeedbacks.length
      ? setActiveFeedback(0)
      : setActiveFeedback(newFeedback);
  };

  const handleArrowLeftClick = () => {
    const newFeedback = activeFeedback - 1;
    newFeedback === -1
      ? setActiveFeedback(topFeedbacks.length - 1)
      : setActiveFeedback(newFeedback);
  };

  return (
    <div className={classes.container}>
      <FeedbackSlide
        onArrowLeftClick={handleArrowLeftClick}
        onArrowRightClick={handleArrowRightClick}
        feedbackText={topFeedbacks[activeFeedback].feedbackText}
        feedbackAvatar={topFeedbacks[activeFeedback].picture}
        authourName={topFeedbacks[activeFeedback].authorName}
        authorJobTitle={topFeedbacks[activeFeedback].authorTitle}
        slideNumber={activeFeedback + 1}
        totalFeedbacks={topFeedbacks.length}
      />
    </div>
  );
};

export default HomeFeedbacks;
