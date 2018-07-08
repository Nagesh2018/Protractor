//import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe("Working with Actions", function () {

it("How to work with Actions", function () {
    browser.get("https://posse.com");
    element(by.model("userInputQuery")).sendKeys("river");
    browser.actions().
    mouseMove(element(by.model("locationQuery")).
    sendKeys("London")).perform();
    browser.actions().
    sendKeys(protractor.Key.ARROW_DOWN).
    sendKeys(protractor.Key.ENTER).perform().then(function() {
        browser.sleep(2000);
   
    //.then(function(totalfound) {
    //element(by.css("span[@ng-bind='searchResults.length']")).getText().then(function(text){
       // console.log(text);
   
    expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
  
  //});

    element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();  
    element(by.css("a[ng-href='/place/GB/London/River Island']")).click();
    browser.getTitle().then(function(pTitle){
        console.log("Parent Window Title is "+pTitle)
    })
    browser.getAllWindowHandles().then(function(allWindows){
        browser.switchTo().window(allWindows[1]);
        expect(browser.getTitle()).toContain("River");  
        browser.switchTo().window(allWindows[0]);
        browser.getTitle().then(function(title){
            console.log("parent wind title "+ title);
        })
    })
    
    })
}, 120000)

});