const { sleep } = require('./browserHandler');

const login = async(page, username, password) => {
    await page.goto('https://kenshoo.net.hilan.co.il/login');
    await sleep(page, 4, 2);
    const [usernameInput] = await page.$$('.h-input-username');
    await usernameInput.type(username);
    await sleep(page, 4, 2);
    const [passwordInput] = await page.$$('.h-input-password');
    await passwordInput.type(password);
    await sleep(page, 4, 2);
    const [submit] = await page.$x('//button[@type="submit"]');
    submit.click();
    await sleep(page, 7, 5);
}

module.exports = login;