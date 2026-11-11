"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { toast } from "gooey-toast";
import { getPlans } from "@/data/plans";
import { PayPalSubscriptionButton } from "@/components/PayPalSubscriptionButton";
import { ENV } from "@/config/env";

function RegistroContent() {
  const searchParams = useSearchParams();
  const planIdParam = searchParams.get("plan_id") || "";
  const clinicaIdParam = searchParams.get("clinica_id") || "";
  const correoParam = searchParams.get("correo") || "";
  const nombreClinicaParam = searchParams.get("nombre_clinica") || "";
  const nombreAdminParam = searchParams.get("nombre_admin") || "";
  const modoParam = searchParams.get("modo") || "";

  const esModoUpgrade = modoParam === "upgrade" || Boolean(clinicaIdParam);

  const allPlans = getPlans();
  const selectedPlan =
    allPlans.find((p) => p.paypalPlanId === planIdParam) ||
    allPlans.find((p) => p.id === "clinica") ||
    allPlans[0];

  const [paso, setPaso] = useState<1 | 2 | 3>(1);
  const [nombreClinica, setNombreClinica] = useState("");
  const [nombreAdmin, setNombreAdmin] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verPassword, setVerPassword] = useState(false);
  const [verConfirmPassword, setVerConfirmPassword] = useState(false);
  const [esGoogle, setEsGoogle] = useState(false);
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [clinicaIdRegistrada, setClinicaIdRegistrada] = useState<number | null>(null);
  const [subscriptionIdFinal, setSubscriptionIdFinal] = useState<string>("");
  const [cargando, setCargando] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null);
  const [mensajeExito, setMensajeExito] = useState<string | null>(null);

  const apiUrl = ENV.API_URL;
  const googleClientId = ENV.GOOGLE_CLIENT_ID;

  const mostrarErrorToast = (mensaje: string) => {
    setErrorMensaje(mensaje);
    try {
      toast.error({
        title: "Atención",
        description: mensaje,
        duration: 5000,
      });
    } catch {}
  };

  const mostrarExitoToast = (titulo: string, mensaje: string) => {
    setMensajeExito(mensaje);
    try {
      toast.success({
        title: titulo,
        description: mensaje,
        duration: 5000,
      });
    } catch {}
  };

  useEffect(() => {
    if (nombreClinicaParam) setNombreClinica(nombreClinicaParam);
    if (nombreAdminParam) setNombreAdmin(nombreAdminParam);
    if (correoParam) setCorreo(correoParam);
    if (clinicaIdParam) setClinicaIdRegistrada(parseInt(clinicaIdParam, 10));

    if (esModoUpgrade) {
      setPaso(2);
      mostrarExitoToast(
        "Actualización Verificada",
        `Tu clínica (${nombreClinicaParam || "actual"}) está lista para activar el nuevo plan.`
      );
    }
  }, [clinicaIdParam, correoParam, esModoUpgrade, nombreAdminParam, nombreClinicaParam]);

  const procesarCredentialGoogle = (cred: string) => {
    try {
      const base64Url = cred.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      const data = JSON.parse(jsonPayload);
      const email = data.email || "";
      const name = data.name || `${data.given_name || ""} ${data.family_name || ""}`.trim() || "";

      setEsGoogle(true);
      setGoogleToken(cred);
      if (email) setCorreo(email);
      if (name) setNombreAdmin(name);
      setPassword("");
      setConfirmPassword("");
      mostrarExitoToast("Cuenta de Google vinculada", `Identificado como ${email}. Asigna el nombre comercial de tu clínica.`);
    } catch (e: any) {
      mostrarErrorToast("No se pudo procesar la respuesta de Google.");
    }
  };

  const handleGoogleClick = () => {
    if (typeof window === "undefined") return;

    const g = (window as any).google;
    if (g?.accounts?.id) {
      try {
        g.accounts.id.initialize({
          client_id: googleClientId,
          callback: (response: any) => {
            if (response?.credential) {
              procesarCredentialGoogle(response.credential);
            }
          },
        });
        g.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            try {
              const tokenClient = g.accounts.oauth2.initTokenClient({
                client_id: googleClientId,
                scope: "openid profile email",
                error_callback: () => {
                  mostrarErrorToast(
                    "Google no pudo autorizar este origen. Puedes completar el registro usando el formulario tradicional."
                  );
                },
                callback: async (resp: any) => {
                  if (resp?.access_token) {
                    try {
                      const uRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                        headers: { Authorization: `Bearer ${resp.access_token}` },
                      });
                      if (uRes.ok) {
                        const uData = await uRes.json();
                        setEsGoogle(true);
                        setGoogleToken(resp.access_token);
                        if (uData.email) setCorreo(uData.email);
                        if (uData.name) setNombreAdmin(uData.name);
                        setPassword("");
                        setConfirmPassword("");
                        mostrarExitoToast("Cuenta de Google vinculada", `Identificado como ${uData.email}.`);
                      }
                    } catch {
                      mostrarErrorToast("Error al obtener información de Google.");
                    }
                  }
                },
              });
              tokenClient.requestAccessToken();
            } catch {
              mostrarErrorToast(
                "No se pudo iniciar el selector de Google. Puedes continuar con el formulario manual."
              );
            }
          }
        });
      } catch {
        mostrarErrorToast(
          "Error al inicializar el servicio de Google. Por favor, llena el formulario manual."
        );
      }
    } else {
      mostrarErrorToast("El servicio de Google aún se está cargando. Por favor, intenta de nuevo.");
    }
  };

  const cancelarGoogle = () => {
    setEsGoogle(false);
    setGoogleToken(null);
    setCorreo("");
    setNombreAdmin("");
    setPassword("");
    setConfirmPassword("");
  };

  const passwordsCoinciden = esGoogle || (password.length > 0 && password === confirmPassword);
  const formularioValido = esGoogle
    ? Boolean(nombreClinica.trim() && nombreAdmin.trim() && correo.trim())
    : Boolean(
        nombreClinica.trim() &&
        nombreAdmin.trim() &&
        correo.trim() &&
        password &&
        confirmPassword &&
        password === confirmPassword
      );

  const botonBloqueado = cargando || !formularioValido;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMensaje(null);

    if (esGoogle) {
      if (!nombreClinica.trim() || !nombreAdmin.trim() || !correo.trim()) {
        mostrarErrorToast("El nombre de la clínica, el nombre del administrador y el correo son obligatorios.");
        return;
      }
    } else {
      if (!nombreClinica.trim() || !nombreAdmin.trim() || !correo.trim() || !password.trim() || !confirmPassword.trim()) {
        mostrarErrorToast("Todos los campos son obligatorios.");
        return;
      }

      if (password !== confirmPassword) {
        mostrarErrorToast("Las contraseñas no coinciden.");
        return;
      }
    }

    setCargando(true);

    try {
      const respuesta = await fetch(`${apiUrl}/api/suscripciones/pre-registro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_clinica: nombreClinica.trim(),
          nombre_admin: nombreAdmin.trim(),
          correo: correo.trim().toLowerCase(),
          password: esGoogle ? undefined : password,
          paypal_plan_id: selectedPlan.paypalPlanId,
          auth_provider: esGoogle ? "google" : "manual",
          google_token: googleToken,
        }),
      });

      if (!respuesta.ok) {
        const errorData = await respuesta.json().catch(() => ({}));
        throw new Error(
          errorData.detail || "Ocurrió un error al procesar el pre-registro."
        );
      }

      const datos = await respuesta.json();
      setClinicaIdRegistrada(datos.clinica_id);
      mostrarExitoToast("Pre-registro Exitoso", datos.mensaje || "Datos validados correctamente.");
      setPaso(2);
    } catch (err: any) {
      console.error("Error en pre-registro:", err.message);
      mostrarErrorToast(err.message || "Error al conectar con el servidor.");
    } finally {
      setCargando(false);
    }
  };

  const handleApproveSuccess = async (subscriptionId: string) => {
    setSubscriptionIdFinal(subscriptionId);
    setCargando(true);
    setErrorMensaje(null);

    const clinicaIdEfectivo =
      clinicaIdRegistrada ||
      (clinicaIdParam ? parseInt(clinicaIdParam, 10) : undefined);

    const correoEfectivo =
      correo.trim().toLowerCase() ||
      correoParam.trim().toLowerCase() ||
      undefined;

    const nombreClinicaEfectivo =
      nombreClinica.trim() ||
      nombreClinicaParam.trim() ||
      undefined;

    const nombreAdminEfectivo =
      nombreAdmin.trim() ||
      nombreAdminParam.trim() ||
      undefined;

    try {
      const res = await fetch(`${apiUrl}/api/suscripciones/confirmar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscription_id: subscriptionId,
          clinica_id: clinicaIdEfectivo,
          paypal_plan_id: selectedPlan.paypalPlanId,
          correo: correoEfectivo,
          nombre_clinica: nombreClinicaEfectivo,
          nombre_admin: nombreAdminEfectivo,
          modo: esModoUpgrade ? "upgrade" : "registro",
          es_upgrade: esModoUpgrade,
        }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.detail || "Error al confirmar la suscripción en el servidor.");
      }

      mostrarExitoToast(
        "Suscripción Confirmada",
        `Tu plan ${selectedPlan.name} ha sido activado exitosamente.`
      );
      setPaso(3);
    } catch (err: any) {
      console.error("Error al confirmar suscripción:", err);
      const msg =
        "El pago fue aprobado por PayPal (ID: " +
        subscriptionId +
        "), pero hubo un problema al sincronizar con el servidor: " +
        err.message;
      mostrarErrorToast(msg);
      setPaso(3);
    } finally {
      setCargando(false);
    }
  };

  const handlePaypalError = (err: any) => {
    console.error("Error en pasarela PayPal:", err);
    mostrarErrorToast("Ocurrió un error al procesar el pago con PayPal. Intenta de nuevo.");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between" suppressHydrationWarning>
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />

      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-teal-50 border border-teal-100 p-1">
              <Image
                src="/logo.png"
                alt="Vitalia"
                width={36}
                height={36}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              VITALIA
            </span>
          </Link>

          <Link
            href="/#planes"
            className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
          >
            ← Cambiar Plan
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
            {paso === 1 && (
              <>
                <div className="mb-8">
                  <span className="text-xs font-bold text-teal-800 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Paso 1 de 2: Datos de la Cuenta
                  </span>
                  <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Registra o Vincula tu Clínica
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">
                    Completa tus datos de acceso. Si ya tienes cuenta registrada en VITALIA, ingresa tu correo y contraseña actuales para actualizar el plan de tu clínica sin perder tu información.
                  </p>
                </div>

                {errorMensaje && (
                  <div
                    data-testid="error-banner"
                    className="sr-only"
                    aria-live="assertive"
                  />
                )}

                {!esGoogle && (
                  <div className="mb-6">
                    <button
                      type="button"
                      onClick={handleGoogleClick}
                      data-testid="btn-registro-google"
                      className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 text-sm font-semibold transition-all shadow-sm hover:shadow"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                      <span>Registro con Google</span>
                    </button>
                    <div className="relative my-4 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200" />
                      </div>
                      <span className="relative bg-white px-3 text-xs uppercase tracking-wider text-slate-400">
                        o completa el registro manual
                      </span>
                    </div>
                  </div>
                )}

                {esGoogle && (
                  <div className="mb-6 p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                          Registro con Google autorizado
                        </p>
                        <p className="text-xs text-teal-700">
                          {correo}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={cancelarGoogle}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
                    >
                      Usar otro correo
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" data-testid="formulario-registro">
                  <div>
                    <label
                      htmlFor="nombre_clinica"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Nombre Comercial de la Clínica
                    </label>
                    <input
                      id="nombre_clinica"
                      name="nombre_clinica"
                      type="text"
                      required
                      placeholder="Ej. Consultorio Médico San Rafael"
                      value={nombreClinica}
                      onChange={(e) => setNombreClinica(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nombre_admin"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Nombre del Administrador
                    </label>
                    <input
                      id="nombre_admin"
                      name="nombre_admin"
                      type="text"
                      required
                      placeholder="Ej. Dr. Alejandro Morales"
                      value={nombreAdmin}
                      onChange={(e) => setNombreAdmin(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="correo"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      required
                      readOnly={esGoogle}
                      placeholder="admin@tuclinica.com"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm transition-all ${
                        esGoogle ? "bg-slate-100 text-slate-500 cursor-not-allowed" : ""
                      }`}
                    />
                  </div>

                  {!esGoogle && (
                    <>
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Contraseña de Acceso
                        </label>
                        <div className="relative">
                          <input
                            id="password"
                            name="password"
                            type={verPassword ? "text" : "password"}
                            required
                            placeholder="••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 pr-11 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setVerPassword((v) => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                            aria-label={verPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                          >
                            {verPassword ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="confirm_password"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Confirmar Contraseña
                        </label>
                        <div className="relative">
                          <input
                            id="confirm_password"
                            name="confirm_password"
                            type={verConfirmPassword ? "text" : "password"}
                            required
                            placeholder="••••••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full px-4 py-3 pr-11 rounded-xl border ${
                              confirmPassword && password !== confirmPassword
                                ? "border-red-400 focus:ring-red-500"
                                : "border-slate-300 focus:ring-teal-600"
                            } focus:outline-none focus:ring-2 focus:border-transparent text-sm transition-all`}
                          />
                          <button
                            type="button"
                            onClick={() => setVerConfirmPassword((v) => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                            aria-label={verConfirmPassword ? "Ocultar confirmación de contraseña" : "Mostrar confirmación de contraseña"}
                          >
                            {verConfirmPassword ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            )}
                          </button>
                        </div>
                        {confirmPassword && password !== confirmPassword && (
                          <p className="text-xs text-red-600 font-medium mt-1.5">
                            Las contraseñas no coinciden.
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={botonBloqueado}
                    data-testid="btn-submit-registro"
                    className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-teal-700 text-white font-semibold text-base hover:bg-teal-800 active:bg-teal-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-teal-700/25"
                  >
                    {cargando ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Verificando cuenta...
                      </span>
                    ) : (
                      <>
                        <span>Continuar al Pago Seguro con PayPal</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setPaso(2)}
                      className="text-xs text-teal-700 hover:text-teal-800 font-semibold underline underline-offset-4"
                    >
                      ¿Ya te registraste previamente? Haz clic aquí para pagar directamente con PayPal
                    </button>
                  </div>
                </form>
              </>
            )}

            {paso === 2 && (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-teal-800 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    {esModoUpgrade ? "Actualización de Plan" : "Paso 2 de 2: Autorizar Suscripción"}
                  </span>
                  <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {esModoUpgrade ? `Mejora al Plan ${selectedPlan.name}` : "Pago Integrado con PayPal"}
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">
                    {esModoUpgrade
                      ? `Haz clic en el botón oficial de PayPal para autorizar la actualización al Plan ${selectedPlan.name} para tu clínica. La mejora se aplicará inmediatamente a tu cuenta.`
                      : "Haz clic en el botón oficial de PayPal para autorizar tu suscripción. Se abrirá una ventana emergente segura y no saldrás de este sitio."}
                  </p>
                </div>

                {errorMensaje && (
                  <div
                    data-testid="error-banner-paso2"
                    className="sr-only"
                    aria-live="assertive"
                  >
                    <span>{errorMensaje}</span>
                  </div>
                )}

                <div className="mb-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Plan Seleccionado:</span>
                    <span className="font-bold text-slate-900">{selectedPlan.name} (${selectedPlan.price} MXN/mes)</span>
                  </div>
                  {nombreClinica && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Clínica:</span>
                      <span className="font-semibold text-slate-800">{nombreClinica}</span>
                    </div>
                  )}
                  {correo && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Cuenta / Correo:</span>
                      <span className="font-semibold text-slate-800">{correo}</span>
                    </div>
                  )}
                </div>

                <div className="my-6">
                  <PayPalSubscriptionButton
                    planId={selectedPlan.paypalPlanId}
                    clinicaId={clinicaIdRegistrada}
                    layout={
                      selectedPlan.id === "profesional" || selectedPlan.id === "empresarial"
                        ? "horizontal"
                        : "vertical"
                    }
                    onApproveSuccess={handleApproveSuccess}
                    onError={handlePaypalError}
                  />
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  {!esModoUpgrade && (
                    <button
                      type="button"
                      onClick={() => setPaso(1)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      ← Modificar datos de la cuenta
                    </button>
                  )}
                  <span className="text-xs text-slate-400">Transacción segura 256-bit SSL</span>
                </div>
              </div>
            )}

            {paso === 3 && (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {esModoUpgrade ? "Plan Actualizado" : "Suscripción Activada"}
                </span>

                <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {esModoUpgrade ? `¡Plan ${selectedPlan.name} Activado!` : "¡Bienvenido a VITALIA!"}
                </h1>

                <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {esModoUpgrade
                    ? `Tu suscripción al Plan ${selectedPlan.name} ha sido confirmada con éxito para ${nombreClinica || "tu clínica"}. Ya puedes volver a tu panel para disfrutar de las nuevas capacidades.`
                    : `Tu suscripción al Plan ${selectedPlan.name} ha sido confirmada con éxito y tu clínica ya se encuentra plenamente activa en la plataforma.`}
                </p>

                {subscriptionIdFinal && (
                  <div className="mt-5 inline-block bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl text-xs text-slate-700 font-mono">
                    ID de Suscripción: {subscriptionIdFinal}
                  </div>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={ENV.APP_URL}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-700 text-white font-semibold text-sm hover:bg-teal-800 transition-all shadow-lg shadow-teal-700/25"
                  >
                    {esModoUpgrade ? "Volver a la Aplicación VITALIA" : "Iniciar Sesión en VITALIA"}
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all"
                  >
                    Volver al Inicio
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Resumen del Plan
            </span>
            <div className="mt-3 flex items-baseline justify-between border-b border-slate-800 pb-5">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Plan {selectedPlan.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Cobro recurrente mensual
                </p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-white">
                  ${selectedPlan.price.toLocaleString("es-MX")}
                </span>
                <span className="text-xs text-slate-400">/mes</span>
              </div>
            </div>

            <div className="py-6 border-b border-slate-800 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Cuentas de personal</span>
                <span className="font-semibold text-white">{selectedPlan.personalAccounts} usuarios</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Límite de pacientes</span>
                <span className="font-semibold text-white">{selectedPlan.patientLimit} registros</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Plan ID PayPal</span>
                <span className="font-mono text-xs text-teal-300">{selectedPlan.paypalPlanId}</span>
              </div>
            </div>

            <div className="py-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                Incluido en este plan:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {selectedPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed">
              Pago procesado directamente mediante los botones oficiales de PayPal Smart Payment Buttons. Tus datos y transacciones se encuentran cifrados bajo los estándares PCI-DSS.
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-200 bg-white">
        © 2026 VITALIA. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default function RegistroPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600">
          Cargando formulario de registro...
        </div>
      }
    >
      <RegistroContent />
    </Suspense>
  );
}
