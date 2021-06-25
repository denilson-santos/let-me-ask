import React, { ReactNode } from 'react';
import cn from 'classnames';

import '../styles/question.scss';

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export const Question: React.FC<QuestionsProps> = ({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}) => (
  <div
    className={cn(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered }
    )}
  >
    <p>{content}</p>
    <footer>
      <div className="user-info">
        <img src={author.avatar} alt={author.name} />
        <span>{author.name}</span>
      </div>

      <div>{children}</div>
    </footer>
  </div>
);
