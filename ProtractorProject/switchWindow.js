describe("Working with Actions", function () {

    it("How to work with Actions", function () {
        browser.get("https://www.posse.com");
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
        
        });


    }, 120000);
});
