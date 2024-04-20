describe ('My first test suite', function() {

    it ('My first test case', function()  {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)


        cy.get('.products').as('productLocator')
        cy.get(':nth-child(4) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()

            if (textVeg.includes('Cashews')) {
                $el.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('Place Order').click()


    })

})











