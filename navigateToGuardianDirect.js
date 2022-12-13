const {chromium} = require('playwright');

const playwrightScript = async () => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://guardiandirect.com');
    await browser.close();
}

playwrightScript();