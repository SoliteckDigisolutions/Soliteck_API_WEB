"use client";
import { useSelector } from "react-redux";

export const useServiceAccess = () => {
  const reduxData = useSelector((state: any) => state.responseData?.respDatat);

  let services: any[] = [];

  try {
    const parsed =
      typeof reduxData === "string" ? JSON.parse(reduxData) : reduxData;

      console.log(parsed);

    // Extract Services array
    services = parsed?.[0]?.Services || [];
  } catch {
    services = [];
  }

  const hasService = (serviceID: string) => {
    return services.some(
      (item: any) =>
        item.ServiceAuthId === serviceID && item.IsActive === true
    );
  };

  console.log(services);

  return { services, hasService };
};