interface InputProps {
  placeholder?: string;
  pattern?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  required?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  pattern,
  value,
  type = "text",
  onChange,
  disabled,
  required,
  label,
}) => {
  return (
    <div className="w-full">
      {label && (
        <p className="text-xl text-white font-semibold mb-2">{label}</p>
      )}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        pattern={pattern}
        type={type}
        required
        className="
          w-full
          p-4 
          text-lg 
          bg-black 
          border-2
          border-neutral-800 
          rounded-md
          outline-none
          text-white
          focus:border-sky-500
          focus:border-2
          transition
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      />
    </div>
  );
};

export default Input;
