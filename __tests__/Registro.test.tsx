import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegistroPage from "@/app/registro/page";
import { redirigirA } from "@/utils/navigation";

jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (param: string) =>
      param === "plan_id" ? "P-5CC29855SK5899208NLWUMWI" : null,
  }),
}));

jest.mock("@/utils/navigation", () => ({
  redirigirA: jest.fn(),
}));

describe("RegistroPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  test("renderiza los campos requeridos para el pre-registro", () => {
    render(<RegistroPage />);

    expect(
      screen.getByLabelText("Nombre Comercial de la Clínica")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Nombre del Administrador")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Correo Electrónico")).toBeInTheDocument();
    expect(screen.getByLabelText("Contraseña de Acceso")).toBeInTheDocument();
    expect(screen.getByTestId("btn-submit-registro")).toBeInTheDocument();
    expect(screen.getByText("Plan Clínica")).toBeInTheDocument();
  });

  test("captura los datos, llama al endpoint de pre-registro y redirige a PayPal con custom_id", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        clinica_id: 88,
        mensaje: "Pre-registro completado exitosamente",
      }),
    });

    render(<RegistroPage />);

    fireEvent.change(screen.getByLabelText("Nombre Comercial de la Clínica"), {
      target: { value: "Centro Médico Aurora" },
    });
    fireEvent.change(screen.getByLabelText("Nombre del Administrador"), {
      target: { value: "Dra. Aurora Treviño" },
    });
    fireEvent.change(screen.getByLabelText("Correo Electrónico"), {
      target: { value: "aurora@centromedico.com" },
    });
    fireEvent.change(screen.getByLabelText("Contraseña de Acceso"), {
      target: { value: "PasswordSegura789!" },
    });

    fireEvent.click(screen.getByTestId("btn-submit-registro"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    const [url, options] = (global.fetch as jest.Mock).mock.calls[0];
    expect(url).toContain("/api/suscripciones/pre-registro");
    expect(options.method).toBe("POST");

    const parsedBody = JSON.parse(options.body);
    expect(parsedBody.nombre_clinica).toBe("Centro Médico Aurora");
    expect(parsedBody.nombre_admin).toBe("Dra. Aurora Treviño");
    expect(parsedBody.correo).toBe("aurora@centromedico.com");
    expect(parsedBody.password).toBe("PasswordSegura789!");
    expect(parsedBody.paypal_plan_id).toBe("P-5CC29855SK5899208NLWUMWI");

    await waitFor(() => {
      expect(redirigirA).toHaveBeenCalledWith(
        "https://www.sandbox.paypal.com/billing/plans/P-5CC29855SK5899208NLWUMWI?custom_id=88"
      );
    });
  });

  test("muestra mensaje de error si el endpoint responde con fallo", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        detail: "Ya existe un usuario registrado y activo con este correo electrónico",
      }),
    });

    render(<RegistroPage />);

    fireEvent.change(screen.getByLabelText("Nombre Comercial de la Clínica"), {
      target: { value: "Clínica Duplicada" },
    });
    fireEvent.change(screen.getByLabelText("Nombre del Administrador"), {
      target: { value: "Admin Duplicado" },
    });
    fireEvent.change(screen.getByLabelText("Correo Electrónico"), {
      target: { value: "existente@vitalia.com" },
    });
    fireEvent.change(screen.getByLabelText("Contraseña de Acceso"), {
      target: { value: "Pass12345!" },
    });

    fireEvent.click(screen.getByTestId("btn-submit-registro"));

    await waitFor(() => {
      expect(screen.getByTestId("error-banner")).toBeInTheDocument();
      expect(
        screen.getByText(
          "Ya existe un usuario registrado y activo con este correo electrónico"
        )
      ).toBeInTheDocument();
    });
  });
});
