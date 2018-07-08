
describe("Working with Alerts", function () {

    it("How to work with Alerts nonAngular WebSite", function () {
        browser.waitForAngularEnabled(false);
       // browser.ignoreSynchronization = true;
        browser.get("http://www.qaclickacademy.com/practice.php");
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().dismiss().then(function(){
            browser.sleep(3000);
        })

        });


    
});