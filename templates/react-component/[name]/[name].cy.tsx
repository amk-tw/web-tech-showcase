import React from "react"
import { {{ name | kebab_case }} } from "./{{ name | kebab_case }}"

describe("<{{ name | kebab_case }} />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<{{ name | kebab_case }} />)
  })
})
