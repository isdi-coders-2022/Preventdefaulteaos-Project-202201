import { editCreatedCardAction } from "./actionCreator";

describe("Given a editCreatedCardAction function", () => {
  describe("When it receives card", () => {
    test("Then it should return an action type edit-createdCard", () => {
      const card = [{ name: "Luis" }, { name: "Carlitos" }];
      const expectedAction = {
        type: "edit-createdCard",
        card,
      };

      const action = editCreatedCardAction(card);

      expect(action).not.toEqual(expectedAction);
    });
  });
});
