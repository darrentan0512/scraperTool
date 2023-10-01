const puppeteer = require("puppeteer");
require('dotenv').config();


async function parseScr() {

    const browser = await puppeteer.launch({headless: false});

    // Open a new tab
    const page = await browser.newPage(); 


    await page.setJavaScriptEnabled(true);
    // Visit the page and wait until network connections are completed
    await page.goto('https://k111.918kiss.com/', { waitUntil: 'networkidle2' });

    // // Interact with the DOM to retrieve the titles
    const confirmButton = await page.$('[class="confirm"]')
    await confirmButton.click();

    await page.waitForSelector('input[name=userName]');
    await page.type('input[name=userName]', process.env.SCR_USERNAME);

    await page.waitForSelector('input[name=passWd]');
    await page.type('input[name=passWd]', process.env.SCR_PASSWORD);

    await page.$eval("button[id='loginButton']", elem => elem.click()); 

    await page.waitForSelector('input[id=txt_Password]');
    await page.type('input[id=txt_Password]', process.env.SCR_PASSWORD2);


    await page.waitForSelector("button[id='Button_OK']");
    await page.focus("button[id='Button_OK']")
    await page.click("button[id='Button_OK']");
   
}

parseScr();


// notes

// // not work
// await page.waitForSelector(mySelector);
// await page.click(mySelector);

// // not work 
// await page.waitForSelector(mySelector);
// await page.focus(mySelector);
// await page.click(mySelector);

// // work
// await page.$eval(mySelector, (elem) => elem.click());