
describe("Basic Testing Udemy", function () {

    it("Locate WebElement", function () {

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('3');
        // element(by.model('operator')).then(function(options) {
        // options[0].click();
        // });
        element(by.model('second')).sendKeys('2');
        element(by.id('gobutton')).click();

        // element(by.css("h2[class='ng-binding']")).getText().then(function (text) {
        //     console.log("Result is " +text);
        // });
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");

    });


});