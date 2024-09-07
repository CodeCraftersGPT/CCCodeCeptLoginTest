Feature('Login Test');

Scenario('Login with valid credentials', ({ I }) => {
    I.amOnPage('/login');
    I.fillField('username', 'tomsmith');
    I.fillField('password', 'SuperSecretPassword!');
    I.click('Login');
    I.see('You logged into a secure area!');
});
