interface $Props {
  color?: string;
}

function Timer({ color }: $Props): JSX.Element {
  const colorHandler = (): string => color ?? '#292D32';

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
        stroke={colorHandler()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V13"
        stroke={colorHandler()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 2H15"
        stroke={colorHandler()}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Timer;
