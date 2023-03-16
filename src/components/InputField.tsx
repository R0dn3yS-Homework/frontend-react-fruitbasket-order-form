export default function InputField({ name, label, inputType, value, changeHandler }: { name: string, label: string, inputType: string, value: string|number, changeHandler: Function}) {
  return (
    <>
      <label htmlFor={`${name}-field`}>{label}</label>
      <input
        name={`${name}-field`}
        id={`${name}-field`}
        type={inputType}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </>
  )
}