describe('Search for books - eyes', () => {
    beforeEach(() => {
      cy.visit('https://bookstoreglendyzulay.azurewebsites.net/')      
    })  
  
    it('eyes should return one book with title Agile Testing', () => {
      cy.eyesOpen({
        appName: 'Automation Bookstore'       
      })
      cy.get('#searchBar').type('Agile Testing', {delay:250})
      cy.eyesCheckWindow('Agile Testing')
      cy.eyesClose()
    })
  
    it('eyes should return multiple books with title Test', () => {
      cy.eyesOpen({
        appName: 'Automation Bookstore'
      })
      cy.get('#searchBar').type('Test', {delay:250})
      cy.eyesCheckWindow('Test')
      cy.eyesClose()
    })
})