import { check, sleep } from "k6";
import { Trend, Rate } from "k6/metrics";
import { Options } from "k6/options";
import { exemploGetFunction } from "../functions/exemploGetFunction";
import { getOptions } from "../config/configTest";

// Obtendo o tipo de teste da variável de ambiente
const testType = __ENV.K6_TEST_TYPE || "smoke"; // 'smoke' se não estiver definido
export const options: Options = getOptions(testType); // Usando a função global para definir as opções

// Métricas personalizadas
const getElementDurationTimeTrend = new Trend("PERSONALIZADO_Tempo_Duracao");
const getElementWaitingTimeTrend = new Trend("PERSONALIZADO_Tempo_Espera");
const getElementSuccessRate: Rate = new Rate("PERSONALIZADO_Percentual_Sucesso");

export default function () {
  try {
    // Chama a função exemploGetFunction para obter a resposta da API
    const apigetElement = exemploGetFunction();

    // Verificações para garantir que a resposta é 200 OK
    check(apigetElement, {
      "Get element API returned status 200": (res) => res.status === 200,
    });

    // Adiciona as métricas personalizadas
    getElementDurationTimeTrend.add(apigetElement.timings.duration);
    getElementWaitingTimeTrend.add(apigetElement.timings.waiting);
    getElementSuccessRate.add(apigetElement.status === 200);

    // Logs úteis para depuração
    console.log(`Status: ${apigetElement.status}`);
    console.log(`Response Body: ${JSON.stringify(apigetElement.body)}`);

    sleep(1);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
}
