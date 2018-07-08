describe("Drop Down", function () {

    function calc(arg1, arg2, oper) {
        element(by.model('first')).sendKeys(arg1);
        element(by.model('second')).sendKeys(arg2);
        // Using Chain Locators 
        
       element(by.model("operator")).all(by.css("option")).each(function(options) {
            options.getAttribute("value").then(function(text){
                //options.getText().then(function(child){
               
                if(text==oper) {
                    options.click();
                }
            });
            });
        

     
       
       // Using Elements All 
    //    element.all(by.tagName("option")).each(function(options){
    //        options.getAttribute("value").then(function(values) {
    //            if(values==oper) {
    //             options.click();
    //            }
            
    //               });
    //    });
        element(by.id('gobutton')).click();
    };

    it("Drop Down", function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        calc(4, 5,"MULTIPLICATION"); 
        calc(5, 5,"DIVISION");
        calc(6, 5,"MODULO"); 
        calc(7, 5,"ADDITION");

        element.all(by.repeater("result in memory")).each(function(items){
            items.element(by.css("td:nth-child(3)")).getText().then(function(text){
             console.log(text);   
            });
        })

    });
});