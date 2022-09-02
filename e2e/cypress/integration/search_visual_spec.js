describe('Search for books - eyes', () => {
    beforeEach(() => {
        cy.visit('https://bookstoreglendyzulay.azurewebsites.net/')        
    })   

    it('eyes should return one book with title Agile Testing', () => {
        cy.eyesOpen({
            testName: 'Test with Agile Testing Title!'
        })
        cy.get('#searchBar').type('Agile Testing', {delay:250})
        cy.eyesCheckWindow()
        cy.eyesClose()
    })

    it('eyes should return one book with title Test', () => {
        cy.eyesOpen({
            testName: 'Test with Test Title!'
        })
        cy.get('#searchBar').type('Test', {delay:250})
        cy.eyesCheckWindow()
        cy.eyesClose()
    })
})