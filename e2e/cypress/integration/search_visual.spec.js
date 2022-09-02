describe('Search for books - eyes', () => {
    beforeEach(() => {
      cy.visit('https://bookstoreglendyzulay.azurewebsites.net/')      
    })  
  
    it('eyes should return one book with title Agile Testing', () => {
      cy.eyesOpen()
      cy.get('#searchBar').type('Agile Testing', {delay:250})
      cy.eyesCheckWindow('Agile Testing')
      cy.eyesClose()
    })   
})