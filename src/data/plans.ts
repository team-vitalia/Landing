import { Plan } from "@/types/plan";

export const getPaypalBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_PAYPAL_BASE_URL ||
    "https://www.sandbox.paypal.com/billing/plans"
  );
};

export const getPlans = (): Plan[] => {
  const baseUrl = getPaypalBaseUrl();

  const basicoPlanId =
    process.env.NEXT_PUBLIC_PAYPAL_PLAN_BASICO || "P-61L31376NX417651DNLWUKSQ";
  const clinicaPlanId =
    process.env.NEXT_PUBLIC_PAYPAL_PLAN_CLINICA || "P-5CC29855SK5899208NLWUMWI";
  const profesionalPlanId =
    process.env.NEXT_PUBLIC_PAYPAL_PLAN_PROFESIONAL || "P-5J121652NS326140HNLWUNNI";
  const empresarialPlanId =
    process.env.NEXT_PUBLIC_PAYPAL_PLAN_EMPRESARIAL || "P-64643939B6992035JNLWUOCY";

  return [
    {
      id: "basico",
      name: "Básico",
      tagline: "Ideal para consultorios independientes y médicos particulares.",
      price: 599,
      period: "mes",
      personalAccounts: 3,
      patientLimit: 100,
      paypalPlanId: basicoPlanId,
      paypalUrl: `${baseUrl}/${basicoPlanId}`,
      features: [
        "3 cuentas de personal",
        "100 pacientes registrados",
        "Expedientes clínicos digitales",
        "Agenda de citas básica",
        "Control de accesos por roles"
      ]
    },
    {
      id: "clinica",
      name: "Clínica",
      tagline: "Diseñado para clínicas en crecimiento que requieren coordinación ágil.",
      price: 1199,
      period: "mes",
      personalAccounts: 10,
      patientLimit: 500,
      paypalPlanId: clinicaPlanId,
      paypalUrl: `${baseUrl}/${clinicaPlanId}`,
      popular: true,
      features: [
        "10 cuentas de personal",
        "500 pacientes registrados",
        "Sincronización con Google Calendar",
        "Notificaciones y correos automatizados",
        "Gestión de salas y equipamiento",
        "Módulo de almacén e inventario"
      ]
    },
    {
      id: "profesional",
      name: "Profesional",
      tagline: "Potencia tu centro médico con automatización clínica e inteligencia artificial.",
      price: 2199,
      period: "mes",
      personalAccounts: 20,
      patientLimit: 1500,
      paypalPlanId: profesionalPlanId,
      paypalUrl: `${baseUrl}/${profesionalPlanId}`,
      features: [
        "20 cuentas de personal",
        "1500 pacientes registrados",
        "Asistente IA (100 consultas/mes)",
        "Sincronización con Google Calendar",
        "Notificaciones y correos automatizados",
        "Control de medicamentos e interacciones",
        "Historial médico y recetas electrónicas"
      ]
    },
    {
      id: "empresarial",
      name: "Empresarial",
      tagline: "Solución integral para redes de clínicas, policlínicos y hospitales.",
      price: 4499,
      period: "mes",
      personalAccounts: 30,
      patientLimit: 5000,
      paypalPlanId: empresarialPlanId,
      paypalUrl: `${baseUrl}/${empresarialPlanId}`,
      features: [
        "30 cuentas de personal",
        "5000 pacientes registrados",
        "Asistente IA (500 consultas/mes)",
        "Soporte para múltiples sucursales",
        "Google Calendar y correos ilimitados",
        "Auditoría clínica y reportes avanzados",
        "Gestión de contratos",
        "Soporte técnico prioritario 24/7"
      ]
    }
  ];
};
