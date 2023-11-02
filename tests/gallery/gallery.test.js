import { test, expect } from '@playwright/test'

test('Has Title', async ({ page }) => {
  await page.goto('https://localhost:8080/')
  await expect(page).toHaveTitle('/^[Branch]$/')
})

test('Get Gallery Component', async ({ page }) => {
  await page.goto('https://localhost:8080/')
  await page.getByRole('image', { name: 'Gallery' }).click()
  await expect(page.getByRole('image', { name: 'Poster' })).toBeVisible()
})
