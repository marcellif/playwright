import test, {expect} from "@playwright/test";

test.describe("Página inicial", () =>{
    test("deve visitar a página inicial", async ({page}) =>{
      await page.goto("/");
      await expect(page).toHaveTitle("Jornada Milhas");

      const tituloPassagens = page.getByTestId('titulo-passagens');
      const tituloPromocoes = page.getByTestId('titulo-promocoes');
      const tituloDepoimentos = page.getByTestId('titulo-depoimentos');

      await expect(tituloPassagens)
            .toBeVisible();

      await expect(tituloPromocoes)
            .toBeVisible();

      await expect(tituloDepoimentos)
            .toBeVisible();

    })
})