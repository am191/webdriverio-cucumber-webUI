// World object setup (optional)
const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.sharedData = {}; // Initialize any shared state here
    }
}

setWorldConstructor(CustomWorld);

// Step definitions
Given('I note down the first article year', async function() {
    const year = await someMethodToGetYear();
    this.sharedData.firstArticleYear = year; // Store it in the World object
});

Then('I compare the year with the sorted first article year', async function() {
    const year = await anotherMethodToGetYear();
    expect(year).to.be.below(this.sharedData.firstArticleYear); // Access it from the World object
});
