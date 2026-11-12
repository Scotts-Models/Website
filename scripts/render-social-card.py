# Renders scripts/social-card.html to src/assets/img/social-card.png (1200x630). Needs Python Playwright + Chrome.
import asyncio, pathlib
from playwright.async_api import async_playwright
root = pathlib.Path(__file__).resolve().parent
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1200, "height": 630})
        await pg.goto((root / "social-card.html").as_uri()); await pg.wait_for_timeout(500)
        await pg.screenshot(path=str(root.parent / "src/assets/img/social-card.png"))
        await b.close()
asyncio.run(main())
