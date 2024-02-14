function Checkboxes({ label = "", options = [], selectedValues = [] }) {
  return (
    <div>
      <label></label>
      {options.map((value, index) => {
        const isChecked = value === selectedValues[index];
        return (
          <input
            key={value}
            type="checkbox"
            value={value}
            isChecked={isChecked}
          />
        );
      })}
    </div>
  );
}
