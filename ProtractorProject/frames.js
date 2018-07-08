
describe("Working with Frames", function () {

    it("How to work with frames nonAngular WebSite", function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
       // browser.ignoreSynchronization = true;
        browser.get("http://www.qaclickacademy.com/practice.php");

        browser.switchTo().frame("courses-iframe");

        element(by.css("a[href*='sign_in']")).getText().then(function(text){
            console.log(text);
        })
       
        })

           
})