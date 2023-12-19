import { test, expect } from '@playwright/test'

test('Has Title', async ({ page }) => {
  await page.goto('https://localhost:8080/')
  await expect(page).toHaveTitle('/^[Branch]$/')
})

test('Get SpiderChart Component', async ({ page }) => {
  await page.goto('https://localhost:8080/')
  await page.getByRole('svg', { name: 'RadarChart' }).click()
  await expect(page.getByRole('svg', { name: 'RadarChart' })).toBeVisible()
})
