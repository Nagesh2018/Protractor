

describe("Synchronization-nonAngular", function () {

    it("Synchronization - nonAngular WebSite", function () {
        browser.waitForAngularEnabled(false);
             // browser.ignoreSynchronization = true;
        browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
        browser.driver.manage().window().maximize();
        element(by.css("a[href*='loadAjax']")).click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id("loader")),4000));
        element(by.id("results")).getText().then(function(text){
            console.log(text);

        })
       
        })

           
})