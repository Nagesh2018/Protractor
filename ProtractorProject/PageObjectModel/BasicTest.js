
describe("Basic Testing Udemy", function () {
    var page1 = require("./commonFunction.js");
    var d = require("./data.js");
    var using = require('jasmine-data-provider');

    beforeEach(function () {
        page1.getUrl();
    });

    using(d.datadriven, function (data, description) {

        it("Check Calculator Operation-"+description, function () {
            page1.firstInput.sendKeys(data.firstInput);
            page1.secondInput.sendKeys(data.secondInput);
            page1.goBtn.click();
            expect((page1.result).getText()).toBe(data.result);
     
        });

    });
    afterEach(function () {
        console.log("Test Completed");
    });

});