'use client';

import React, { ReactNode, MouseEvent } from 'react';

interface $Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  textBefore?: string;
  textAfter?: string;
}

function IconButton(props: $Props): React.JSX.Element {
  const { icon, className = '', onClick, textBefore, textAfter } = props;

  return (
    <button
      type="button"
      className={`${className} flex items-center gap-1 active:brightness-75`}
      onClick={onClick}
    >
      {textBefore && textBefore}
      {icon}
      {textAfter && textAfter}
    </button>
  );
}

export default IconButton;
