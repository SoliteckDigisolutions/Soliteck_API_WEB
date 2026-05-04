"use client";

import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { useEffect, useState } from "react";

const PersistGate = dynamic(
  () => import("redux-persist/integration/react").then((mod) => mod.PersistGate),
  {
    loading: () => null,
    ssr: false,
  }
);

export default function StoreProvider({ children }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Provider store={store}>{children}</Provider>;
  }

  return (
    <Provider store={store}>
      {persistor ? (
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      ) : (
        children
      )}
    </Provider>
  );
}