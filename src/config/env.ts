export const ENV = {
  get API_URL(): string {
    const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    return raw.trim().replace(/\/+$/, "");
  },
  get APP_URL(): string {
    const raw = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:8081";
    return raw.trim().replace(/\/+$/, "");
  },
  get PAYPAL_CLIENT_ID(): string {
    return (
      process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID?.trim() ||
      "AQIJ1n0NzO11pUp0DDzNjCFkHqsD39gEY3XnvemKwOV_B11fWKI64PnjnaSMmT24s3sJBpxldoXwjxzy"
    );
  },
  get PAYPAL_BASE_URL(): string {
    const raw =
      process.env.NEXT_PUBLIC_PAYPAL_BASE_URL ||
      "https://www.sandbox.paypal.com/billing/plans";
    return raw.trim().replace(/\/+$/, "");
  },
  get PLAN_BASICO_ID(): string {
    return (
      process.env.NEXT_PUBLIC_PAYPAL_PLAN_BASICO?.trim() || "P-61L31376NX417651DNLWUKSQ"
    );
  },
  get PLAN_CLINICA_ID(): string {
    return (
      process.env.NEXT_PUBLIC_PAYPAL_PLAN_CLINICA?.trim() || "P-5CC29855SK5899208NLWUMWI"
    );
  },
  get PLAN_PROFESIONAL_ID(): string {
    return (
      process.env.NEXT_PUBLIC_PAYPAL_PLAN_PROFESIONAL?.trim() ||
      "P-5J121652NS326140HNLWUNNI"
    );
  },
  get PLAN_EMPRESARIAL_ID(): string {
    return (
      process.env.NEXT_PUBLIC_PAYPAL_PLAN_EMPRESARIAL?.trim() ||
      "P-64643939B6992035JNLWUOCY"
    );
  },
};
