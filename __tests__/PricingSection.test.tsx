import { render, screen } from "@testing-library/react";
import PricingSection from "@/components/PricingSection";

describe("PricingSection", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_PAYPAL_BASE_URL: "https://www.sandbox.paypal.com/billing/plans",
      NEXT_PUBLIC_PAYPAL_PLAN_BASICO: "P-61L31376NX417651DNLWUKSQ",
      NEXT_PUBLIC_PAYPAL_PLAN_CLINICA: "P-5CC29855SK5899208NLWUMWI",
      NEXT_PUBLIC_PAYPAL_PLAN_PROFESIONAL: "P-5J121652NS326140HNLWUNNI",
      NEXT_PUBLIC_PAYPAL_PLAN_EMPRESARIAL: "P-64643939B6992035JNLWUOCY",
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test("renderiza exactamente las 4 tarjetas de los planes de VITALIA", () => {
    render(<PricingSection />);

    const planCards = screen.getAllByTestId("plan-card");
    expect(planCards).toHaveLength(4);

    expect(screen.getByText("Básico")).toBeInTheDocument();
    expect(screen.getByText("Clínica")).toBeInTheDocument();
    expect(screen.getByText("Profesional")).toBeInTheDocument();
    expect(screen.getByText("Empresarial")).toBeInTheDocument();
  });

  test("construye correctamente los enlaces de redireccion a PayPal con las variables de entorno", () => {
    render(<PricingSection />);

    const btnBasico = screen.getByTestId("btn-contratar-basico");
    const btnClinica = screen.getByTestId("btn-contratar-clinica");
    const btnProfesional = screen.getByTestId("btn-contratar-profesional");
    const btnEmpresarial = screen.getByTestId("btn-contratar-empresarial");

    expect(btnBasico).toHaveAttribute(
      "href",
      "https://www.sandbox.paypal.com/billing/plans/P-61L31376NX417651DNLWUKSQ"
    );
    expect(btnClinica).toHaveAttribute(
      "href",
      "https://www.sandbox.paypal.com/billing/plans/P-5CC29855SK5899208NLWUMWI"
    );
    expect(btnProfesional).toHaveAttribute(
      "href",
      "https://www.sandbox.paypal.com/billing/plans/P-5J121652NS326140HNLWUNNI"
    );
    expect(btnEmpresarial).toHaveAttribute(
      "href",
      "https://www.sandbox.paypal.com/billing/plans/P-64643939B6992035JNLWUOCY"
    );
  });

  test("los botones de contratacion abren la pasarela en una nueva pestana de forma segura", () => {
    render(<PricingSection />);

    const botones = [
      screen.getByTestId("btn-contratar-basico"),
      screen.getByTestId("btn-contratar-clinica"),
      screen.getByTestId("btn-contratar-profesional"),
      screen.getByTestId("btn-contratar-empresarial"),
    ];

    botones.forEach((boton) => {
      expect(boton).toHaveAttribute("target", "_blank");
      expect(boton).toHaveAttribute("rel", "noopener noreferrer");
      expect(boton).toHaveTextContent("Contratar");
    });
  });

  test("renderiza los limites de cuentas y pacientes requeridos para cada plan", () => {
    render(<PricingSection />);

    expect(screen.getByText("3 cuentas")).toBeInTheDocument();
    expect(screen.getByText("100 pacientes")).toBeInTheDocument();

    expect(screen.getByText("10 cuentas")).toBeInTheDocument();
    expect(screen.getByText("500 pacientes")).toBeInTheDocument();

    expect(screen.getByText("20 cuentas")).toBeInTheDocument();
    expect(screen.getByText("1500 pacientes")).toBeInTheDocument();

    expect(screen.getByText("30 cuentas")).toBeInTheDocument();
    expect(screen.getByText("5000 pacientes")).toBeInTheDocument();
  });
});
