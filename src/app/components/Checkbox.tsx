interface $Props {
  checked?: boolean;
  onChange: (val: boolean) => void;
  label?: string;
  variation?: 'check' | 'minus';
  id?: string;
  labelClassName?: string;
}

function Checkbox({
  checked,
  onChange,
  label = 'Checkbox',
  variation = 'check',
  id = '',
  labelClassName = '',
}: $Props): JSX.Element {
  const getVariation = (): string =>
    variation === 'check'
      ? `checked:after:absolute
     checked:after:mt-[1.5px] checked:after:ml-[5px] checked:after:block checked:after:h-[9px] checked:after:w-[5px] checked:after:rotate-45 checked:after:border-[2px]
     checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid  checked:after:bg-transparent checked:after:content-[''] focus:after:absolute focus:after:z-[1]
      focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:after:mt-[1.5px]
     checked:focus:after:ml-[5px] checked:focus:after:h-[9px] checked:focus:after:w-[5px] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem]
     checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-[#0E63F8] checked:focus:after:bg-transparent dark:border-neutral-600`
      : `checked:after:absolute
      checked:after:mt-[6px] checked:after:ml-[2px] checked:after:block checked:after:w-[10px] checked:after:border-[2px]
      checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid  checked:after:bg-transparent checked:after:content-[''] focus:after:absolute focus:after:z-[1]
       focus:after:block focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:after:mt-[6px]
      checked:focus:after:ml-[2px] checked:focus:after:w-[10px] checked:focus:after:rounded-none checked:focus:after:border-[0.125rem]
      checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-[#0E63F8] checked:focus:after:bg-transparent dark:border-neutral-600`;

  const className = `checked:border-[#0E63F8] bg-transparent checked:after:border-[#0E63F8] ${getVariation()} relative float-left -ml-[18px] h-[18px] w-[18px] border-[#979899] appearance-none rounded-md border-[2px] border-solid
   outline-none before:pointer-events-none before:absolute before:h-[14px] before:w-[14px] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0
    before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16]
     hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s]
     focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s]
     checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
      dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]}`;

  return (
    <label
      className="flex w-full select-none items-center gap-2 pl-[10px] text-body font-normal hover:cursor-pointer"
      htmlFor={id}
    >
      <input
        className={className}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        id={id}
        name={id}
      />
      <span className={`${labelClassName} truncate`} title={label}>
        {label}
      </span>
    </label>
  );
}

export default Checkbox;
