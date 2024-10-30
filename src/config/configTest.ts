import { Options } from "k6/options";

// Mapeando cada tipo de teste para suas configurações
const testOptions: Record<string, Options> = {
  spike: {
    stages: [
      { duration: "2m", target: 2000 }, // Ramp-up rápido para um ponto alto
      { duration: "1m", target: 0 }, // Desaceleração rápida para 0 usuários
    ],
    thresholds: {
      http_req_failed: ["rate<0.1"], // Menos de 10% de falhas permitidas
    },
  },
  stress: {
    stages: [
      { duration: "10m", target: 20 }, // Aumento de tráfego de 1 a 20 usuários em 10 minutos
      { duration: "30m", target: 20 }, // Mantém 20 usuários por 30 minutos
      { duration: "5m", target: 0 }, // Desaceleração para 0 usuários
    ],
    thresholds: {
      http_req_failed: ["rate<0.1"], // Menos de 10% de falhas permitidas
    },
  },
  smoke: {
    vus: 1, // Key para Smoke test
    duration: "25s", // Duração padrão

    thresholds: {
      http_req_failed: ["rate<0.1"], // Menos de 10% de falhas permitidas
    },
  },
  break: {
    stages: [
      { duration: "2h", target: 20000 }, // Aumento lento para uma carga enorme
    ],
    thresholds: {
      http_req_failed: ["rate<0.1"], // Menos de 10% de falhas permitidas
    },
  },
  averageLoad: {
    stages: [
      { duration: "5m", target: 30 }, // Aumento de tráfego de 1 a 30 usuários em 5 minutos
      { duration: "30m", target: 30 }, // Mantém 30 usuários por 30 minutos
      { duration: "5m", target: 0 }, // Desaceleração para 0 usuários
    ],
    thresholds: {
      http_req_failed: ["rate<0.1"], // Menos de 10% de falhas permitidas
    },
  },
};

// Função para obter as opções com base no tipo de teste
export function getOptions(testType: string): Options {
  return testOptions[testType] || testOptions.smoke; // Retorna a configuração do smoke se o tipo não existir
}
