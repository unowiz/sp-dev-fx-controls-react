import { AppInsights } from "applicationinsights-js";
import { version } from './version';
import {Environment,EnvironmentType} from "@microsoft/sp-core-library";

AppInsights.downloadAndSetup({ instrumentationKey: "9f59b81e-d2ed-411e-a961-8bcf3f7f04d0" });

// Remove operation name from the telemetry
if (AppInsights.context && AppInsights.context.operation && AppInsights.context.operation.name) {
  AppInsights.context.operation.name = null;
}

export function track(componentName: string, properties: any = {}): void {
  AppInsights.trackEvent(componentName, {
    version,
    debug: DEBUG ? "true" : "false",
    environment: EnvironmentType[Environment.type],
    ...properties
  });
}
