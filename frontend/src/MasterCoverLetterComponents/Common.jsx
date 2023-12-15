export const Textarea = ({ name, value, onChange, rows }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      style={{
        width: "100%",
        height: "220px",
        padding: "5px",
        border: "1px solid #DEDEDE",
        borderRadius: "5px",
        boxSizing: "border-box",
        resize: "none",
      }}
    />
  );
};
