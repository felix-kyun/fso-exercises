export function InputBox({ name, value, setValue, type, placeholder }) {
  return (
    <div>
      {name ? name + ": " : ""}
      <input
        type={type || "text"}
        onChange={({ target }) => setValue(target.value)}
        value={value}
        placeholder={placeholder || ""}
      />
    </div>
  );
}
