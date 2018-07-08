
describe("Practice Exercise2", function () {

    function addItem(product) {
        element.all(by.tagName("app-card")).each(function (items) {
            items.all(by.css("h4 a")).each(function (item) {
                item.getText().then(function (text) {
                    if (text == product) {
                        items.element(by.css("button[class='btn btn-info']")).click();

                    }
                })
            })
        })
    }

    it("Practice on Angular WebSite", function () {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        browser.driver.manage().window().maximize();
        element(by.linkText("Shop")).click();

        addItem("Nokia Edge");
        addItem("iphone X");

        element(by.partialLinkText("Checkout")).getText().then(function(text){
            expect(text.charAt(11)).toBe("2");
            })
        
    })

})





