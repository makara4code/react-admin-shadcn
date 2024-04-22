import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function usePathname() {
    const { pathname } = useLocation();

    return useMemo(() => pathname, [pathname]);
}