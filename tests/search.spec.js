// @ts-check
import { test, expect } from '@playwright/test';

test('search', async ({ page }) => {
  
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  // Set search input value "ro" 
  await page.fill('input.search-keyword', 'ro');

  //  Find a card with carrots
  const carrotCard = page.locator('.product').filter({hasText: 'Carrot - 1 Kg'});
  // Set quantity to 3
  await carrotCard.locator('.quantity').fill('3');
  
  // Find a card with mushrooms
  const mushroomCard = page.locator('.product').filter({hasText: 'Mushroom - 1 Kg'});
  
  //Set the number to three using the increment button
  const qtyClick = 3; 
  for(let i=1; i<qtyClick; i++) {
    await mushroomCard.locator('a.increment').click();    
  }
  
  //Add to cart carrot
  await carrotCard.locator('button').click(); 

  //Add to cart mushroom
  await mushroomCard.locator('button').click();  

  //Open cart
  await page.locator('a.cart-icon').click(); 

  //Delete carrot from the cart     
  const carrotItem = page.locator('ul.cart-items>li').filter({hasText: 'Carrot - 1 Kg'}).first();  
  await carrotItem.locator('a.product-remove').click();  

  await page.pause();
});