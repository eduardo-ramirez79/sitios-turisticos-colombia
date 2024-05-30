import { CanActivateFn } from '@angular/router';

export const permissionsGuard: CanActivateFn = (route, state) => {
  alert('No tiene permisos')
  return false;
};
