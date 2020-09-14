import React from 'react';
import { CoursePart } from './types';

const Content: React.FC<{ courseParts: Array<CoursePart> }> = ({
  courseParts,
}) => {
  return (
    <div>
      {courseParts.map((c) => (
        <p key={c.name}>
          {c.name} {c.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
