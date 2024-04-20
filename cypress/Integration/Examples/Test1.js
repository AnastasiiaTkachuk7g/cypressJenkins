describe ('My first test suite', function() {

    it ('My first test case', function()  {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get(':nth-child(4) > .product-action > button')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()

            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

   сy.get('.brand').should('have.text,GREENKART')
   cy.get('.brand').then(function(logoelement){

    cy.log(logoelement.text())

    })
    
    })

    const logo = cy.get('.brand')
   // cy.log(cy.get('.brand').text())











    it ('My second test case', function()  {
        
    })
})

