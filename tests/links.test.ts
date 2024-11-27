import { expect, test } from "@playwright/test";

async function testAllLinksOnPage(page) {
    const links: Array<string> = await page.evaluate(() => {
        // Apps that are not running in playwright container
        const exceptionList: string[] = [
            "/stillinger",
            "/cv",
            "/cv?v1",
            "/stillingsregistrering",
            "#",
            "mailto:",
            "/api",
            "/oauth",
            "/min-side",
            "../oauth2",
        ];

        return Array.from(document.links)
            .map((link) => link?.getAttribute("href"))
            .filter((link) => !exceptionList.some((exception) => link.startsWith(exception)));
    });

    const result = (
        await Promise.all(
            links.map(async (link) => {
                let tries = 0;
                while (tries < 5) {
                    tries += 1;
                    try {
                        // eslint-disable-next-line no-await-in-loop
                        const response = await page.request.head(link, {
                            headers: {
                                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                            },
                        }); // equivalent to command "curl -I <link>"
                        if (response?.status() < 400) {
                            return null;
                        }
                        console.error(`invalid response status ${link}, try ${tries} : ${response?.status()}`);
                    } catch (error) {
                        console.error(`error reaching ${link}, try ${tries} : ${error}`);
                    }
                }
                return link;
            }),
        )
    ).filter((item) => item !== null);
    return result;
}

const pagesToVisit = [
    "/",
    "/arbeidsgivertjenester",
    "/bedrift",
    "/enklere-a-skrive-gode-kvalifikasjoner",
    "/epost-verifisering-utgaatt",
    "/hvordan-fa-tilgang",
    "/introduksjon-til-ny-side-for-annonser",
    "/jobbe-i-utlandet",
    "/kontakt",
    "/nye-filtre",
    "/nytt-sokefelt",
    "/nyttige-artikler-for-bedrifter",
    "/om-arbeidsplassen",
    "/overforing-av-stillingsannonser",
    "/personvern",
    "/personvern-arbeidsgiver",
    "/personvern-ikke-under-oppfolging",
    "/personvern-superrask-soknad",
    "/personvern-under-oppfolging",
    "/rekruttere-flyktninger",
    "/retningslinjer-stillingsannonser",
    "/skikkelig-bra-stillingsannonse",
    "/slik-bruker-du-det-nye-soket",
    "/slik-fungerer-superrask-soknad",
    "/sommerjobb",
    "/sommerjobb-jobbsoker",
    "/sporsmal-og-svar",
    "/superrask-soknad-bedrift",
    "/superrask-soknad-person",
    "/thon-hotel-superrask",
    "/tilgang-som-arbeidsgiver",
    "/tilgangstyring-i-store-virksomheter",
    "/tilgjengelighet",
    "/tips-til-jobbsoknaden",
    "/utlogget",
    "/velg-rolle",
    "/verifisert-e-post",
    "/vilkar",
    "/vilkar-api",
    "/vilkar-api-gammel",
    "/vilkar-og-retningslinjer",
    "/vilkar-stillingsannonser",
    "/vilkar-superrask-soknad",
];

// const pagesToVisit = ["/vilkar-api", "/vilkar-api-gammel"];

pagesToVisit.forEach((page) => {
    test(`Test for broken links on ${page}`, async ({ browser }) => {
        const context = await browser.newContext();
        const browserPage = await context.newPage();
        await browserPage.goto(page, { timeout: 30000 });
        const result = await testAllLinksOnPage(browserPage);
        expect(result.length === 0, `${page} has broken links: ${result}`).toBe(true);
    });
});
