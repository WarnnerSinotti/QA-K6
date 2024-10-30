import http, { RefinedParams, RefinedResponse, ResponseType } from "k6/http";

const baseUrl: any | undefined = process.env.BASE_URL_TEST;

export function exemploGetFunction() {
  const url = `${baseUrl}/posts`; // Endpoint de exemplo

  const params: RefinedParams<ResponseType> = {
    headers: {
      "Content-Type": "application/json",
      // Não adicionamos o token, pois a API não exige autenticação
      // token: 'token',
    },
  };

  // Faz a requisição HTTP GET
  const response: RefinedResponse<ResponseType> = http.get(url, params);

  // Retorna a resposta completa, incluindo status e timings
  return {
    status: response.status,
    body: response.json(),
    timings: response.timings,
  };
}
