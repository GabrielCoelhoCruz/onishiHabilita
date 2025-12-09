import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle(/Habilita/)
})

test('page has main heading', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const heading = page.locator('h1')
  await expect(heading).toBeVisible()
})
