import { useState } from "react";
import styled from "styled-components";
import useMagicApi from "../../hooks/useMagicApi";

const FormPageItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  width: 500px;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 500px;
`;

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
      <FormPageItemContainer>
        <FormContainer>
          <form onSubmit={onFormSubmit} autoComplete="off" noValidate>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                className="form-input"
                value={formData.name}
                placeholder="Name:"
              />
            </div>
            <div className="form-group">
              <label htmlFor="type"></label>
              <input
                type="text"
                id="type"
                className="form-input"
                placeholder="Type:"
                value={formData.type}
              />
            </div>

            <div className="form-group">
              <label htmlFor="picture"> </label>
              <input
                type="url"
                id="picture"
                className="form-input"
                placeholder="Picture url:"
                value={formData.picture}
              />
            </div>
            <div className="form-group">
              <label htmlFor="text"></label>
              <input
                type="text"
                id="text"
                className="form-input"
                placeholder="Card text:"
                value={formData.text}
              />
            </div>

            <button type="submit" disabled={!isFilled}>
              Create
            </button>
          </form>
        </FormContainer>
      </FormPageItemContainer>
    </>
  );
};

export default CreateCardForm;
