export function FormInput({ label, value, onChange, className }) {
  return (
    <>
      <label htmlFor={label}>{label}: </label>
      <input
        type="text"
        className={className}
        value={value}
        onChange={onChange}
      />
      <br />
    </>
  );
}
