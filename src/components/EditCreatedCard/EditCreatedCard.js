import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useMagicApi from "../../hooks/useMagicApi";
import ResultsContext from "../../store/contexts/ResultsContext";
import CardToEdit from "../CardToEdit/CardToEdit";

const FormPageItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 500px;
  padding-top: 100px;
  margin-top: 40px;
  & h1 {
    color: #fab827;
  }
`;
const FormAndInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 700px;
  gap: 10px;
  margin-top: 40px;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 200px;
  order: 1;
  margin-top: 200px;
  @media (min-width: 600px) {
    margin-top: 0px;

    order: 2;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
  width: 300px;
  order: 2;
  @media (min-width: 600px) {
    order: 1;
  }

  & {
    form input {
      margin-bottom: 5px;
      width: 320px;
      height: 25px;
      border-radius: 5px;
      border-style: none;
    }
    form button {
      background-color: #fab827;
      border: 4px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      color: #ffffff;
      font-size: 15px;
      cursor: pointer;
    }
    select {
      margin-bottom: 5px;
      width: 254px;
      border-radius: 5px;
      border-style: none;
    }
    .form-group__text {
      position: relative;
    }
    .form-text {
      height: 200px;
    }
  }
`;

const EditCreatedCard = () => {
  let { id } = useParams();
  const { loadCreatedCardToEditAPI } = useMagicApi();
  const { cardToEditInfo } = useContext(ResultsContext);

  useEffect(() => {
    loadCreatedCardToEditAPI(id);
  }, [loadCreatedCardToEditAPI, id]);

  const blankFields = {
    name: "",
    type: "",
    imageUrl: "",
    text: "",
    created: "yes",
    color: "",
    id: id,
  };

  const [formData, setFormData] = useState(blankFields);

  const { editCreatedCardAPI } = useMagicApi();

  const resetForm = () => {
    setFormData(blankFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    editCreatedCardAPI(formData);
    resetForm();
  };
  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const isFilled =
    formData.name !== "" &&
    formData.type !== "" &&
    formData.color !== "" &&
    formData.imageUrl !== "" &&
    formData.text !== "";
  return (
    <>
      <FormPageItemContainer>
        <h1>EDIT YOUR CARD:</h1>
        <FormAndInfoContainer>
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
                  onChange={changeData}
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
                  onChange={changeData}
                />
              </div>
              {/* <div className="form-group">
                <select value={formData.color} onChange={changeData} required>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                </select>
              </div> */}
              <div className="form-group">
                <label htmlFor="color"> </label>
                <input
                  type="text"
                  id="color"
                  className="form-input"
                  placeholder="Color:"
                  value={formData.color}
                  onChange={changeData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageUrl"> </label>
                <input
                  type="url"
                  id="imageUrl"
                  className="form-input"
                  placeholder="Picture url:"
                  value={formData.imageUrl}
                  onChange={changeData}
                />
              </div>
              <div className="form-group__text">
                <label
                  htmlFor="text"
                  className="form-text__placeholder"
                ></label>
                <input
                  type="text-box"
                  id="text"
                  placeholder="Card text:"
                  className="form-text"
                  value={formData.text}
                  onChange={changeData}
                />
              </div>
              <button type="submit" disabled={!isFilled}>
                EDIT
              </button>
            </form>
          </FormContainer>
          <CardContainer>
            <CardToEdit card={cardToEditInfo} />
          </CardContainer>
        </FormAndInfoContainer>
      </FormPageItemContainer>
    </>
  );
};

export default EditCreatedCard;
