// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppAlert: typeof import('./src/components/app/AppAlert.vue')['default'];
    AppCard: typeof import('./src/components/app/AppCard.vue')['default'];
    AppGrid: typeof import('./src/components/app/AppGrid.vue')['default'];
    AppModal: typeof import('./src/components/app/AppModal.vue')['default'];
    AppPagination: typeof import('./src/components/app/AppPagination.vue')['default'];
    RouterLink: typeof import('vue-router')['RouterLink'];
    RouterView: typeof import('vue-router')['RouterView'];
  }
}

export {};