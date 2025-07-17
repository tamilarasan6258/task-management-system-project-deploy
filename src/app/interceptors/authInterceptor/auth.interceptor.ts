//Purpose: Attach the JWT token to outgoing requests

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // const token = sessionStorage.getItem('token'); 
  const auth = inject(AuthService);
  const token = auth.getMemoryToken(); // Get token from memory

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};

