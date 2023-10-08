import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'counter.app.with.state.management.context.api',
  appName: 'counter-app-with-state-management-context-api',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
