import { test } from "@playwright/test";
import HomePage from "../services/page/home.page";
import HomePageSteps from "../services/steps/home.steps";

test.describe('Basic tests', () => {
    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto("", {
            waitUntil: "networkidle"
        });
    });

    test('Check google offered text @regression', async ({}) => {
        await homePageSteps.checkGooogleOfferedText();
    });
});