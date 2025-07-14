import { test, expect, Page ,Locator} from '@playwright/test';

test.use({ ignoreHTTPSErrors: true });
test('PepagoraTitle',async({page}:{page:Page})=>{
    await page.goto('https://staging.pepagora.com/',{waitUntil:'domcontentloaded'})
    // Wait for the popup and close button to appear
  const closeButton = page.locator('button', { hasText: '×' });
  await closeButton.waitFor();
  // Click the close (×) button
  await closeButton.click();
    //test.setTimeout(6000)
  // Optional: assert that popup is closed
  // For example, check that popup container is hidden or removed
  //await expect(page.locator('#your-popup-selector')).toBeHidden();
    const page_title = await page.title()
    console.log('page title ' + page_title)
    console.log(page.url())
    await expect(page).toHaveTitle('Manufacturers, Supplier, Exporters, Wholesaler & Traders at Pepagora B2B Portal')    
    await page.close()
})