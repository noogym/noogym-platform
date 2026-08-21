import { navSections, type DashboardNavItem, type DashboardNavSection } from "@/data/dashboard";
import type { NoogymUser } from "@/lib/auth";

export function hasDashboardAccess(user: NoogymUser | null | undefined, item: DashboardNavItem) {
  if (!item.roles?.length && !item.accesses?.length) {
    return true;
  }

  const role = user?.role;
  const accesses = user?.accesses ?? [];

  return Boolean(
    (role && item.roles?.includes(role)) ||
    item.accesses?.some((scope) => accesses.includes(scope)),
  );
}

export function getDashboardNavSections(user: NoogymUser | null | undefined): DashboardNavSection[] {
  return navSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => hasDashboardAccess(user, item)),
    }))
    .filter((section) => section.items.length > 0);
}

export function hasAdminAccess(user: NoogymUser | null | undefined) {
  return user?.role === "ADMIN" || user?.accesses?.includes("ADMIN_PANEL");
}

export function hasPartnerGymAccess(user: NoogymUser | null | undefined) {
  return user?.role === "GYM_OWNER" || user?.role === "GYM_STAFF" || user?.accesses?.includes("GYM_ERP");
}

export function hasPersonalAccess(user: NoogymUser | null | undefined) {
  return user?.accesses?.includes("PERSONAL_PANEL");
}

export function hasSellerAccess(user: NoogymUser | null | undefined) {
  return user?.accesses?.includes("MARKET_SELLER");
}
