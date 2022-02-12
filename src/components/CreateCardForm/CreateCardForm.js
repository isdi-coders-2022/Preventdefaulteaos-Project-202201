import { useState } from "react";
import useMagicApi from "../../hooks/useMagicApi";

const CreateCardForm = () => {
  const blankFields = {};

  const [formData, setFormData] = useState(blankFields);

  const { addCardsAPI } = useMagicApi();

  const resetForm = () => {
    setFormData(blankFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addCardsAPI(formData);
    resetForm();
  };
  const isFilled =
    formData.name !== "" &&
    formData.type !== "" &&
    formData.picture !== "" &&
    formData.text !== "";

  return (
    <>
      <form onSubmit={onFormSubmit} autoComplete="off" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type: </label>
          <input
            type="text"
            id="type"
            className="form-input"
            value={formData.type}
          />
        </div>

        <div className="form-group">
          <label htmlFor="picture">Picture: </label>
          <input
            type="url"
            id="picture"
            className="form-input"
            value={formData.picture}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text: </label>
          <input
            type="text"
            id="text"
            className="form-input"
            value={formData.alt}
          />
        </div>

        <button type="submit" disabled={!isFilled}>
          Create
        </button>
      </form>
    </>
  );
};

export default CreateCardForm;
