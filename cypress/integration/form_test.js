describe("Lambda Eats", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  /// HELPERS ///
  const specialInput = () => cy.get('input[name="name"]');
  const nameInput = () => cy.get('input[name="special"]');
  const checkBoxes = () => cy.get('input[type="checkbox"]');
  const submitButton = () => cy.get('form');

  describe("Filling out text inputs", () => {
    it("Can type inside text inputs and submit", () => {
      nameInput()
        .should("have.value", "")
        .type("Anhtuan")
        .should("have.value", "Anhtuan");

      specialInput()
        .should("have.value", "")
        .type("No onions please")
        .should("have.value", "No onions please");

      submitButton()
        .submit()
    });
  });

  describe("Selecting multiple checkboxes", () => {
    it("Can check multiple toppings", () => {
      checkBoxes().check();
    });
  });

  describe("Submitting the form", () => {
    it("Can submit form", () => {
      submitButton().submit();
    });
  });
});
