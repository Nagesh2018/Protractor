describe("Chain Locators", function () {

    it("Chain Locators", function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');

        element(by.model("operator"))
        .element(by.css("option:nth-child(1)")).click();

        element(by.model('second')).sendKeys('2');
        element(by.id('gobutton')).click();
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
        element(by.repeater("result in memory"))
        .element(by.css("td:nth-child(3)")).getText().then(function(text) {
        console.log("Required Text " +text);   

        })
    });

});