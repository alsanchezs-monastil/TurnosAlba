import { getStore } from "@netlify/blobs";

const STORE_NAME = "turnos-alba-store";
const STATE_KEY = "cuadrante-principal-v1";

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate"
    }
  });
}

export default async (req) => {
  const envPin = process.env.APP_PIN;
  if (envPin) {
    const providedPin = req.headers.get("x-app-pin") || "";
    if (providedPin !== envPin) {
      return jsonResponse(401, { ok: false, error: "PIN incorrecto o no autorizado" });
    }
  }

  try {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });

    if (req.method === "GET") {
      const data = await store.get(STATE_KEY, { type: "json" });
      return jsonResponse(200, {
        ok: true,
        state: data || null,
        serverTime: new Date().toISOString()
      });
    }

    if (req.method === "POST" || req.method === "PUT") {
      const incoming = await req.json();
      if (!incoming || typeof incoming !== "object") {
        return jsonResponse(400, { ok: false, error: "Payload inválido" });
      }

      const current = await store.get(STATE_KEY, { type: "json" });
      if (
        current &&
        current.updatedAt &&
        incoming.updatedAt &&
        Number(incoming.updatedAt) < Number(current.updatedAt) &&
        !incoming.forceOverwrite
      ) {
        return jsonResponse(200, {
          ok: true,
          merged: true,
          state: current,
          serverTime: new Date().toISOString()
        });
      }

      const toSave = {
        ...incoming,
        updatedAt: incoming.updatedAt || Date.now(),
        syncedAt: new Date().toISOString()
      };
      delete toSave.forceOverwrite;

      await store.setJSON(STATE_KEY, toSave);
      return jsonResponse(200, {
        ok: true,
        state: toSave,
        serverTime: new Date().toISOString()
      });
    }

    return jsonResponse(405, { ok: false, error: "Método no permitido" });
  } catch (err) {
    return jsonResponse(500, {
      ok: false,
      error: err?.message || "Error interno en Netlify Blobs"
    });
  }
};
