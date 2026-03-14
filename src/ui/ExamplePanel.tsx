/**
 * Example Panel Component
 * Demonstrates how to create React components for Subway Builder mods.
 *
 * Note: Floating panels provide their own container, so don't wrap in Card.
 */

import img from "./Mamdani.png"

export function MamdaniPanel() {
  return (
    <div>
      <img src={img} />
    </div>
  );
}
