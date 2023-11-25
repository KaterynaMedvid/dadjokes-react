import React, { useState } from 'react';
import Button from '@/src/components/Button';
import LikesCounter from '@/src/components/LikesCounter';

export const App = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const handleUpClick = () => {
    setUpLikes(upLikes + 1);
  };

  const handleDownClick = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div>
      <Button onClick={handleUpClick} label="Like Up" />
      <LikesCounter count={upLikes} />

      <Button onClick={handleDownClick} label="Like Down" />
      <LikesCounter count={downLikes} />
    </div>
  );
};
