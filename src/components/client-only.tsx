'use client';

import { useSyncExternalStore, type ReactNode } from 'react';

const emptySubscribe = () => () => {};

/**
 * Renders children only on the client after hydration.
 * Use this to wrap Radix UI and other browser-dependent components
 * that generate dynamic IDs (aria-controls, etc.) which differ between SSR and client.
 *
 * Uses useSyncExternalStore (React 18+/19 recommended pattern) to safely
 * detect client-side rendering without triggering effect-based re-renders.
 *
 * @param fallback - Optional server-side fallback (rendered during SSR & initial hydration)
 * @param children - Content rendered only after mount
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  // On server: getServerSnapshot returns false
  // On client: getSnapshot returns true
  // This causes no hydration mismatch because React handles the transition internally
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
