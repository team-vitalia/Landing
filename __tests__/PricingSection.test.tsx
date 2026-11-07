import { render, screen } from "@testing-library/react";
import PricingSection from "@/components/PricingSection";

describe("PricingSection", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_PAYPAL_PLAN_BASICO: "P-9JA53339DW996433FNLXJMJA",
      NEXT_PUBLIC_PAYPAL_PLAN_CLINICA: "P-18S21614P2665104JNLXJNKI",
      NEXT_PUBLIC_PAYPAL_PLAN_PROFESIONAL: "P-32342459V8640593NNLXJN7A",
      NEXT_PUBLIC_PAYPAL_PLAN_EMPRESARIAL: "P-3BM73023B1884583RNLXJOSQ",
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

  test("los botones de contratacion redirigen al formulario de registro con el plan_id correspondiente", () => {
    render(<PricingSection />);

    const btnBasico = screen.getByTestId("btn-contratar-basico");
    const btnClinica = screen.getByTestId("btn-contratar-clinica");
    const btnProfesional = screen.getByTestId("btn-contratar-profesional");
    const btnEmpresarial = screen.getByTestId("btn-contratar-empresarial");

    expect(btnBasico).toHaveAttribute("href", "/registro?plan_id=P-9JA53339DW996433FNLXJMJA");
    expect(btnClinica).toHaveAttribute("href", "/registro?plan_id=P-18S21614P2665104JNLXJNKI");
    expect(btnProfesional).toHaveAttribute("href", "/registro?plan_id=P-32342459V8640593NNLXJN7A");
    expect(btnEmpresarial).toHaveAttribute("href", "/registro?plan_id=P-3BM73023B1884583RNLXJOSQ");
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
