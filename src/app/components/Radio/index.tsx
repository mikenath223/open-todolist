import { ReactNode } from 'react';

interface $Props {
  onChange?: () => void;
  label?: string;
  value: string;
  isChecked?: boolean;
  children?: ReactNode | ReactNode[];
  id?: string;
  disabled?: boolean;
}

export default function Radio({
  onChange,
  label,
  value,
  isChecked = true,
  children,
  id,
  disabled = false,
}: $Props): JSX.Element {
  return (
    <label
      htmlFor={label}
      className="flex grow cursor-pointer items-center self-start"
    >
      <input
        id={id || label}
        type="radio"
        value={value}
        name={label}
        onChange={onChange}
        checked={isChecked}
        disabled={disabled}
        className="border-gray-300 bg-gray-100 text-light-primary-progress accent-light-primary-progress dark:border-gray-600 dark:bg-gray-700"
      />
      {children || (
        <span className="text-body2 ml-2 grow font-normal text-light-neutral-bodyText">
          {label}
        </span>
      )}
    </label>
  );
}
