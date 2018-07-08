
describe("Practice Exercise", function () {

    it("Practice on Angular WebSite", function () {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        browser.driver.manage().window().maximize();
        element(by.name("name")).sendKeys("User1");
        //element(by.name("email")).sendKeys("User1@test.com");
        element(by.css("input[name='email']")).sendKeys("User1@test.com");

        element(by.id("exampleInputPassword1")).sendKeys("TestingAng12!");
        element(by.id("exampleCheck1")).click();

        //*************************Select DropDown using Index*************************
        // element(by.id("exampleFormControlSelect1")).all(by.tagName("option")).then(function(options){
        //     options[0].click();
        //     browser.sleep(2000);
        // })


        //***********************Using cssContainingText() *************************
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();

        //********************Find All Elements and Click based on Index*********************
        element.all(by.css("input[name='inlineRadioOptions']")).get(1).click();
        browser.sleep(2000);

        element(by.name("bday")).sendKeys("12/12/2012");
        browser.sleep(2000);

        element(by.css("input[value='Submit']")).click().then(function(){
            element(by.css("div[class*='success alert']")).getText().then(function(text){
            console.log(text);
        })
                        
        })

        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("U").then(function(){
            element(by.css("div[class*='alert-danger']")).getText().then(function(text){
                console.log(text);
            })

        })

    })

       
});