import { STUDIO_MODULES } from "../modules/registry";
import type { StudioPermission, StudioRoleDefinition, StudioRoleKey } from "../types/core";

const rolePermissionMap: Record<StudioRoleKey, readonly string[]> = {
  owner: ["*"],
  admin: [
    "dashboard.read",
    "content.read",
    "content.write",
    "content.publish",
    "articles.read",
    "articles.write",
    "articles.publish",
    "taxonomy.read",
    "taxonomy.write",
    "authors.read",
    "authors.write",
    "seo.read",
    "seo.write",
    "seo.manage",
    "media.read",
    "media.write",
    "media.manage",
    "discord.read",
    "discord.moderate",
    "forms.read",
    "forms.manage",
    "newsletter.read",
    "newsletter.write",
    "newsletter.manage",
    "analytics.read",
    "monitoring.read",
    "security.read",
    "integrations.read",
    "system.read",
  ],
  editor: [
    "dashboard.read",
    "content.read",
    "content.write",
    "content.publish",
    "articles.read",
    "articles.write",
    "articles.publish",
    "taxonomy.read",
    "taxonomy.write",
    "authors.read",
    "authors.write",
    "seo.read",
    "seo.write",
    "media.read",
    "media.write",
    "analytics.read",
  ],
  moderator: [
    "dashboard.read",
    "content.read",
    "articles.read",
    "discord.read",
    "discord.moderate",
  ],
  analyst: [
    "dashboard.read",
    "content.read",
    "articles.read",
    "taxonomy.read",
    "authors.read",
    "seo.read",
    "media.read",
    "discord.read",
    "forms.read",
    "newsletter.read",
    "analytics.read",
    "monitoring.read",
    "security.read",
    "integrations.read",
  ],
  viewer: [
    "dashboard.read",
    "content.read",
    "articles.read",
    "seo.read",
    "media.read",
    "analytics.read",
  ],
};

export const STUDIO_ROLES: Record<StudioRoleKey, StudioRoleDefinition> = {
  owner: {
    key: "owner",
    name: "Owner",
    rank: 100,
    description: "Full control over TS Studio, security, infrastructure and access policy.",
    permissions: rolePermissionMap.owner,
  },
  admin: {
    key: "admin",
    name: "Administrator",
    rank: 80,
    description: "Operational CMS administration without ownership transfer controls.",
    permissions: rolePermissionMap.admin,
  },
  editor: {
    key: "editor",
    name: "Editor",
    rank: 60,
    description: "Content, SEO and media workflow.",
    permissions: rolePermissionMap.editor,
  },
  moderator: {
    key: "moderator",
    name: "Moderator",
    rank: 50,
    description: "Comments and community moderation.",
    permissions: rolePermissionMap.moderator,
  },
  analyst: {
    key: "analyst",
    name: "Analyst",
    rank: 30,
    description: "Read-only analytics, monitoring and reporting.",
    permissions: rolePermissionMap.analyst,
  },
  viewer: {
    key: "viewer",
    name: "Viewer",
    rank: 10,
    description: "Read-only CMS overview.",
    permissions: rolePermissionMap.viewer,
  },
};

export const STUDIO_PERMISSIONS: readonly StudioPermission[] = STUDIO_MODULES.flatMap((moduleDefinition) =>
  moduleDefinition.permissions.map((action) => ({
    key: `${moduleDefinition.key}.${action}`,
    moduleKey: moduleDefinition.key,
    action,
    description: `${action} access for ${moduleDefinition.name}.`,
  })),
);

export function hasStudioPermission(
  roleKeys: readonly StudioRoleKey[],
  permissionKey: string,
): boolean {
  return roleKeys.some((roleKey) => {
    const role = STUDIO_ROLES[roleKey];
    return role.permissions.includes("*") || role.permissions.includes(permissionKey);
  });
}

export function highestStudioRole(roleKeys: readonly StudioRoleKey[]): StudioRoleDefinition | null {
  return roleKeys
    .map((roleKey) => STUDIO_ROLES[roleKey])
    .filter(Boolean)
    .sort((a, b) => b.rank - a.rank)[0] ?? null;
}

export function canAccessStudioModule(
  roleKeys: readonly StudioRoleKey[],
  moduleKey: string,
): boolean {
  return hasStudioPermission(roleKeys, `${moduleKey}.read`)
    || hasStudioPermission(roleKeys, `${moduleKey}.manage`)
    || hasStudioPermission(roleKeys, `${moduleKey}.audit`);
}
