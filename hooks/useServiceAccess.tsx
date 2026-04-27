"use client";

import { useSelector } from "react-redux";
import { useMemo, useCallback } from "react";

type Service = {
  ServiceAuthId: number | string;
  ServiceName: string;
  IsActive: boolean;
};

export const useServiceAccess = () => {
  const reduxData = useSelector((state: any) => state.responseData?.respDatat);

  const services: Service[] = useMemo(() => {
    try {
      if (!reduxData) return [];

      const parsed =
        typeof reduxData === "string" ? JSON.parse(reduxData) : reduxData;

      return parsed?.[0]?.Services ?? [];
    } catch {
      return [];
    }
  }, [reduxData]);

  const hasService = useCallback((serviceID: number | string) => {
    return services.some(
      (service) =>
        service.ServiceAuthId == serviceID && service.IsActive == true
    );
  }, [services]);

  return { services, hasService };
};