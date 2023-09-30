const puppeteer = require("puppeteer");

async function parseScr() {
    // Launch the browser
    const browser = await puppeteer.launch({headless: false});

    // Open a new tab
    const page = await browser.newPage(); 


    await page.setJavaScriptEnabled(true);
    // Visit the page and wait until network connections are completed
    await page.goto('https://k111.918kiss.com/', { waitUntil: 'networkidle2' });

    // // Interact with the DOM to retrieve the titles
    const confirmButton = await page.$('[class="confirm"]')
    await confirmButton.click();

    

    await page.close();
    await browser.close(); 
}

parseScr();