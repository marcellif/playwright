import test, {expect} from "@playwright/test";
import PaginaPrincipal from "./page-objects/PaginaPrincipal";

test.describe("Buscar passagens", () =>{
    test(" Buscar passagem para 2 adultos, uma criança e um bebê", async ({page}) =>{
        
        const paginaPrincipal = new PaginaPrincipal(page);
        
        await paginaPrincipal.visitar();
        await paginaPrincipal.clicarSomenteIda();

        await paginaPrincipal.clicarSelecionarPassageiros();
        await paginaPrincipal.adicionarQuantidadeAdultos(3);
        await paginaPrincipal.adicionarQuantidadeCriancas(1);
        await paginaPrincipal.adicionarQuantidadeBebes(1);
        await paginaPrincipal.fecharModalPassageiros();

        await paginaPrincipal.definirOrigemEDestino('minas gerais', 'rio de janeiro');
        await paginaPrincipal.definirData(new Date());
        await paginaPrincipal.buscarPassagens();

        await paginaPrincipal.estaMostrandoPassagem('Somente ida', 'Minas Gerais', 'Rio de Janeiro');
      
    })
})