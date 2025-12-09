import { test, expect } from '@playwright/test'

test.describe('Landing Page - CNH do Brasil', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  })

  test('homepage loads correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/Habilita/)
    await expect(page.locator('body')).toBeVisible()
  })

  test.describe('Header', () => {
    test('header is visible', async ({ page }) => {
      const header = page.locator('header')
      await expect(header).toBeVisible()
    })

    test('header has navigation links', async ({ page }) => {
      const header = page.locator('header')
      await expect(header).toBeVisible()
      // Verifica se há links no header
      const links = header.locator('a')
      const count = await links.count()
      expect(count).toBeGreaterThan(0)
    })
  })

  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.locator('section').first()
      await expect(hero).toBeVisible()
    })

    test('hero has main headline', async ({ page }) => {
      const heading = page.locator('h1').first()
      await expect(heading).toBeVisible()
      await expect(heading).toContainText(/CNH|barato|80%/)
    })

    test('hero has CTA buttons', async ({ page }) => {
      const ctaButtons = page.locator('button:has-text("Quero minha CNH")')
      await expect(ctaButtons.first()).toBeVisible()
    })

    test('hero badge shows new law date', async ({ page }) => {
      const badge = page.locator('text=/Nova Lei|09\\/12\\/2025/')
      await expect(badge.first()).toBeVisible()
    })

    test('hero stats are visible', async ({ page }) => {
      const stats = page.locator('text=/80%|2h|Grátis/')
      await expect(stats.first()).toBeVisible()
    })

    test('CTA button scrolls to form', async ({ page }) => {
      const ctaButton = page.locator('button:has-text("Quero minha CNH")').first()
      await ctaButton.click()
      
      // Aguarda o scroll
      await page.waitForTimeout(500)
      
      // Verifica se o formulário está visível na viewport
      const formSection = page.locator('#formulario')
      await expect(formSection).toBeVisible()
    })
  })

  test.describe('Sections Visibility', () => {
    test('all main sections are present', async ({ page }) => {
      const sections = [
        'section', // Hero
        '#formulario', // Lead Form
      ]

      for (const selector of sections) {
        const section = page.locator(selector).first()
        await expect(section).toBeVisible()
      }
    })

    test('form section has correct ID', async ({ page }) => {
      const formSection = page.locator('#formulario')
      await expect(formSection).toBeVisible()
    })
  })

  test.describe('Lead Form', () => {
    test('form is visible', async ({ page }) => {
      const form = page.locator('#formulario form')
      await expect(form).toBeVisible()
    })

    test('form has all required fields', async ({ page }) => {
      const form = page.locator('#formulario form')
      
      // Nome
      const nameInput = form.locator('input[id="name"], input[placeholder*="nome" i]')
      await expect(nameInput).toBeVisible()

      // WhatsApp
      const phoneInput = form.locator('input[id="phone"], input[type="tel"]')
      await expect(phoneInput).toBeVisible()

      // License type select
      const licenseSelect = form.locator('button:has-text("Selecione a categoria")')
      await expect(licenseSelect).toBeVisible()

      // Situation select
      const situationSelect = form.locator('button:has-text("Selecione sua situação")')
      await expect(situationSelect).toBeVisible()
    })

    test('form labels are visible', async ({ page }) => {
      const form = page.locator('#formulario form')
      
      await expect(form.locator('label:has-text("Nome completo")')).toBeVisible()
      await expect(form.locator('label:has-text("WhatsApp")')).toBeVisible()
      await expect(form.getByText(/habilitação/i).first()).toBeVisible()
      await expect(form.getByText(/situação/i).first()).toBeVisible()
    })

    test('form submit button is visible', async ({ page }) => {
      const submitButton = page.locator('button[type="submit"]:has-text("Quero minha CNH")')
      await expect(submitButton).toBeVisible()
    })

    test('form validation shows errors for empty fields', async ({ page }) => {
      const form = page.locator('#formulario form')
      const submitButton = form.locator('button[type="submit"]')
      
      await submitButton.click()
      
      // Aguarda validação
      await page.waitForTimeout(300)
      
      // Verifica se há mensagens de erro
      const errorMessages = form.locator('.text-red-500')
      const errorCount = await errorMessages.count()
      expect(errorCount).toBeGreaterThan(0)
    })

    test('form can fill name field', async ({ page }) => {
      const nameInput = page.locator('input[id="name"]')
      await nameInput.fill('João Silva')
      await expect(nameInput).toHaveValue('João Silva')
    })

    test('form can fill phone field', async ({ page }) => {
      const phoneInput = page.locator('input[id="phone"]')
      await phoneInput.fill('11999999999')
      // O campo formata automaticamente o telefone
      await expect(phoneInput).toHaveValue(/(\(11\)\s?)?99999-9999|11999999999/)
    })

    test('form can select license type', async ({ page }) => {
      const licenseSelect = page.locator('button:has-text("Selecione a categoria")')
      await licenseSelect.click()
      
      // Aguarda o dropdown abrir
      await page.waitForTimeout(300)
      
      // Seleciona uma opção
      const option = page.locator('text=/Categoria B|Carro/').first()
      if (await option.isVisible()) {
        await option.click()
      }
    })

    test('form can select situation', async ({ page }) => {
      const situationSelect = page.locator('button:has-text("Selecione sua situação")')
      await situationSelect.click()
      
      // Aguarda o dropdown abrir
      await page.waitForTimeout(300)
      
      // Seleciona uma opção
      const option = page.locator('text=/Primeira Habilitação/').first()
      if (await option.isVisible()) {
        await option.click()
      }
    })
  })

  test.describe('WhatsApp Button', () => {
    test('WhatsApp button is visible', async ({ page }) => {
      const whatsappButton = page.locator('a[href*="wa.me"], a[aria-label*="WhatsApp" i]')
      await expect(whatsappButton).toBeVisible()
    })

    test('WhatsApp button has correct link format', async ({ page }) => {
      const whatsappButton = page.locator('a[href*="wa.me"]')
      const href = await whatsappButton.getAttribute('href')
      expect(href).toContain('wa.me')
      expect(href).toContain('text=')
    })

    test('WhatsApp button opens in new tab', async ({ page }) => {
      const whatsappButton = page.locator('a[href*="wa.me"]')
      const target = await whatsappButton.getAttribute('target')
      expect(target).toBe('_blank')
    })
  })

  test.describe('Footer', () => {
    test('footer is visible', async ({ page }) => {
      const footer = page.locator('footer')
      await expect(footer).toBeVisible()
    })
  })

  test.describe('Responsive Design', () => {
    test('page is responsive on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      
      const hero = page.locator('h1').first()
      await expect(hero).toBeVisible()
      
      const form = page.locator('#formulario')
      await expect(form).toBeVisible()
    })

    test('page is responsive on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      
      const hero = page.locator('h1').first()
      await expect(hero).toBeVisible()
      
      const form = page.locator('#formulario')
      await expect(form).toBeVisible()
    })

    test('page is responsive on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 })
      
      const hero = page.locator('h1').first()
      await expect(hero).toBeVisible()
      
      const form = page.locator('#formulario')
      await expect(form).toBeVisible()
    })
  })

  test.describe('Navigation', () => {
    test('can scroll to form section', async ({ page }) => {
      // Scroll para o formulário
      await page.evaluate(() => {
        const form = document.getElementById('formulario')
        form?.scrollIntoView({ behavior: 'smooth' })
      })
      
      await page.waitForTimeout(500)
      
      const formSection = page.locator('#formulario')
      await expect(formSection).toBeVisible()
    })
  })

  test.describe('Accessibility', () => {
    test('page has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1')
      await expect(h1.first()).toBeVisible()
    })

    test('form inputs have labels', async ({ page }) => {
      const nameInput = page.locator('input[id="name"]')
      const nameLabel = page.locator('label[for="name"]')
      await expect(nameLabel).toBeVisible()
      
      const phoneInput = page.locator('input[id="phone"]')
      const phoneLabel = page.locator('label[for="phone"]')
      await expect(phoneLabel).toBeVisible()
    })

    test('WhatsApp button has aria-label', async ({ page }) => {
      const whatsappButton = page.locator('a[aria-label*="WhatsApp" i]')
      await expect(whatsappButton).toBeVisible()
    })
  })

  test.describe('Performance', () => {
    test('page loads within reasonable time', async ({ page }) => {
      const startTime = Date.now()
      await page.goto('http://localhost:3000')
      await page.waitForLoadState('networkidle')
      const loadTime = Date.now() - startTime
      
      // Página deve carregar em menos de 10 segundos
      expect(loadTime).toBeLessThan(10000)
    })

    test('images are loaded', async ({ page }) => {
      const images = page.locator('img')
      const imageCount = await images.count()
      
      if (imageCount > 0) {
        for (let i = 0; i < imageCount; i++) {
          const img = images.nth(i)
          await expect(img).toBeVisible()
        }
      }
    })
  })
})

