import Select from "react-select";

const Controls = ({ onSortFieldChange, onSortDirectionChange, defaultSortField, defaultSortDirection }) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const defaultFieldOption = fieldOptions.find((option) => option.value === defaultSortField);
  const defaultDirectionOption = directionOptions.find((option) => option.value === defaultSortDirection);

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={onSortFieldChange}
          defaultValue={defaultFieldOption}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={onSortDirectionChange}
          defaultValue={defaultDirectionOption}
        />
      </div>
    </div>
  );
};

export default Controls;
