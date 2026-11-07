"use client";

import { useEffect, useRef, useState } from "react";
import { ENV } from "@/config/env";

declare global {
  interface Window {
    paypal?: any;
  }
}

interface PayPalSubscriptionButtonProps {
  planId: string;
  clinicaId?: number | null;
  layout?: "vertical" | "horizontal";
  onApproveSuccess: (subscriptionId: string) => void;
  onError?: (error: any) => void;
}

const PAYPAL_CLIENT_ID = ENV.PAYPAL_CLIENT_ID;

export function PayPalSubscriptionButton({
  planId,
  clinicaId,
  layout = "vertical",
  onApproveSuccess,
  onError,
}: PayPalSubscriptionButtonProps) {
  const containerId = `paypal-button-container-${planId}`;
  const [sdkListo, setSdkListo] = useState(false);
  const renderizadoRef = useRef(false);

  useEffect(() => {
    const scriptId = "paypal-sdk-subscription-script";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    const onScriptLoaded = () => {
      setSdkListo(true);
    };

    if (window.paypal && window.paypal.Buttons) {
      setSdkListo(true);
      return;
    }

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`;
      script.setAttribute("data-sdk-integration-source", "button-factory");
      script.async = true;
      script.onload = onScriptLoaded;
      script.onerror = (e) => {
        if (onError) onError(e);
      };
      document.body.appendChild(script);
    } else {
      existingScript.addEventListener("load", onScriptLoaded);
      return () => {
        existingScript.removeEventListener("load", onScriptLoaded);
      };
    }
  }, [onError]);

  useEffect(() => {
    if (!sdkListo || !window.paypal) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    renderizadoRef.current = true;

    try {
      window.paypal
        .Buttons({
          style: {
            shape: "pill",
            color: "blue",
            layout: layout,
            label: "paypal",
          },
          createSubscription: function (_data: any, actions: any) {
            const config: any = {
              plan_id: planId,
            };
            if (clinicaId) {
              config.custom_id = String(clinicaId);
            }
            return actions.subscription.create(config);
          },
          onApprove: function (data: any) {
            if (data?.subscriptionID) {
              onApproveSuccess(data.subscriptionID);
            }
          },
          onError: function (err: any) {
            if (onError) onError(err);
          },
        })
        .render(`#${containerId}`);
    } catch (error) {
      if (onError) onError(error);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [sdkListo, planId, clinicaId, layout, containerId, onApproveSuccess, onError]);

  return (
    <div className="w-full my-3">
      {!sdkListo && (
        <div className="flex items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 text-sm">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          Cargando pasarela segura de PayPal...
        </div>
      )}
      <div id={containerId} className="w-full" />
    </div>
  );
}
