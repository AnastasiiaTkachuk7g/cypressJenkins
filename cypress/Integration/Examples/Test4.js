describe ('My first test suite', function() {

    it ('My first test case', function()  {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert',(str)=>
    {
    expect(str).to.equal('Hello, share this...')
    })


    cy.on('window:confirm',(str)=>
    {
    expect(str).to.equal('Hello, share this...')
    })
    

    })

})











