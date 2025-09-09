// @ts-check
import { test, expect } from '@playwright/test';


test('search', async ({ page }) => {
  await test.step('Open page', async () => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  });
  

  // Set search input value "ro" s
  await test.step('Search for "ro"', async () => {
    await page.fill('input.search-keyword', 'ro');
    await page.waitForTimeout(2000);
  });  

  //  Find a card with carrots and set quantity to 5
  let carrotCard = null;
  await test.step('Find a card with carrots and set quantity to 5', async () => {
    carrotCard = page.locator('.product').filter({hasText: 'Carrot - 1 Kg'});
    await carrotCard.locator('.quantity').fill('5');
    await page.waitForTimeout(2000);
  });
  
  
  
  // Find a card with mushrooms and set the number to three using the increment button
  let mushroomCard = null;
  await test.step('Find a card with mushrooms and set the number to three using the increment button', async () => {
    mushroomCard = page.locator('.product').filter({hasText: 'Mushroom - 1 Kg'});
    
    const qtyClick = 3; 
    for(let i=1; i<qtyClick; i++) {
      await mushroomCard.locator('a.increment').click();    
    }

    await page.waitForTimeout(2000);
  });

  
  
  //Add to cart carrot
  await test.step('Add to cart carrot', async () => {
    await carrotCard.locator('button').click();
    await page.waitForTimeout(2000);
  });
   

  //Add to cart mushroom
  await test.step('Add to cart mushroom', async () => {
      await mushroomCard.locator('button').click(); 
      await page.waitForTimeout(2000); 
  });


  //Open cart
  await test.step('Open cart', async () => {
    await page.locator('a.cart-icon').click(); 
    await page.waitForTimeout(2000);
  });
  
  //Delete carrot from the cart 
  await test.step('Delete carrot from the cart', async () => {
    const carrotItem = page.locator('ul.cart-items>li').filter({hasText: 'Carrot - 1 Kg'}).first();  
    await carrotItem.locator('a.product-remove').click();  
    await page.waitForTimeout(2000);
  });    
 
});