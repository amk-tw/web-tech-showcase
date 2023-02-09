import { Page } from "./Page"

describe("<Page />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Page />)
  })
})
