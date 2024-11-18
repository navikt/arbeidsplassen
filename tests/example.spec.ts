import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Arbeidsplassen.no - alt av arbeid, samlet på én plass");
});

test("get started link", async ({ page }) => {
    await page.goto("/");

    // Click the get started link.
    await page.getByRole("link", { name: "Søk etter din neste jobb" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page).toHaveURL(`/stillinger`);
});
