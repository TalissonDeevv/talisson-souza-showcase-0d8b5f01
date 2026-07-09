import type { StudioPermission, StudioRouteDefinition } from "../../types/core";

export interface StudioPluginManifest {
  key: string;
  name: string;
  version: string;
  description: string;
}

export interface StudioPluginWidget {
  key: string;
  title: string;
  moduleKey: string;
}

export interface StudioPluginHook {
  key: string;
  event: string;
  handlerName: string;
}

export interface StudioPluginRegistry {
  registerModule(moduleKey: string): void;
  registerRoute(route: StudioRouteDefinition): void;
  registerMenu(item: { key: string; label: string; path: string }): void;
  registerPermission(permission: StudioPermission): void;
  registerWidget(widget: StudioPluginWidget): void;
  registerHook(hook: StudioPluginHook): void;
  listPlugins(): readonly StudioPluginManifest[];
  install(manifest: StudioPluginManifest): void;
}

export function createStudioPluginRegistry(): StudioPluginRegistry {
  const plugins: StudioPluginManifest[] = [];
  const modules = new Set<string>();
  const routes: StudioRouteDefinition[] = [];
  const menus: { key: string; label: string; path: string }[] = [];
  const permissions: StudioPermission[] = [];
  const widgets: StudioPluginWidget[] = [];
  const hooks: StudioPluginHook[] = [];

  return {
    registerModule(moduleKey) {
      modules.add(moduleKey);
    },
    registerRoute(route) {
      routes.push(route);
    },
    registerMenu(item) {
      menus.push(item);
    },
    registerPermission(permission) {
      permissions.push(permission);
    },
    registerWidget(widget) {
      widgets.push(widget);
    },
    registerHook(hook) {
      hooks.push(hook);
    },
    listPlugins() {
      return [...plugins];
    },
    install(manifest) {
      plugins.push(manifest);
    },
  };
}
