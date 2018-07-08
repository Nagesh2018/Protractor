describe("Chain Locators", function () {

    function add(a,b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    };

    it("Chain Locators", function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        add(4,5);add(5,5);add(6,5);add(7,5);add(8,5);

        element.all(by.repeater("result in memory")).count().then(function(count){
            console.log("Count is " +count + "\n");
        })

        element.all(by.repeater("result in memory")).each(function(items){
            items.element(by.css("td:nth-child(3)")).getText().then(function(text){
             console.log(text);   
            });
        })

    });
});