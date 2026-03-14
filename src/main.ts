/**
 * My Subway Builder Mod
 * Entry point for the mod.
 */

import { MamdaniPanel } from './ui/ExamplePanel';

const MOD_ID = 'danield1909-imagetest';
const MOD_VERSION = '1.0.0';
const TAG = '[MamdaniPanel]';

const api = window.SubwayBuilderAPI;

if (!api) {
  console.error(`${TAG} SubwayBuilderAPI not found!`);
} else {
  console.log(`${TAG} v${MOD_VERSION} | API v${api.version}`);

  // Guard against double initialization (onMapReady can fire multiple times)
  let initialized = false;

  // Initialize mod when map is ready
  api.hooks.onMapReady((_map) => {
    if (initialized) return;
    initialized = true;

    try {
      // Example: Add a floating panel with a React component
      api.ui.addFloatingPanel({
        id: 'mamdani-panel',
        title: 'Zohran Mamdani',
        icon: 'Apple',
        render: MamdaniPanel,
      });

      console.log(`${TAG} Initialized successfully.`);
    } catch (err) {
      console.error(`${TAG} Failed to initialize:`, err);
      api.ui.showNotification(`${MOD_ID} failed to load. Check console for details.`, 'error');
    }
  });
}
