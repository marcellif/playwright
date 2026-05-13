import test from "@playwright/test";
import PaginaLogin from "./page-objects/PaginaLogin";

test.describe("Página de Login", () => {
    test("Deve conseguir fazer login com email e senha válidos", async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitar();
        await paginaLogin.logar('danpen@mailinator.com', 'kinoplex')
        await paginaLogin.loginFeitoComSucesso();
    })


    test("Exibir mensagem erro ao logar com email inválido", async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitar();
        await paginaLogin.logar('email@mailinator.com', '12345')
        await paginaLogin.exibeMensagemErro('Você não está autorizado a acessar este recurso');
    })


    test("Exibir mensagem erro ao logar com email formato incorreto", async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitar();
        await paginaLogin.logar('esquecidomailinator.com', '12345');
        await paginaLogin.exibeMensagemErro('E-mail inválido');
    })
})