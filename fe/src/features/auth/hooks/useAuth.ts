import {
  useMutation,
} from "@tanstack/react-query";


import {
  authService,
} from "../services/auth.service";


import {
  useAuthStore,
} from "@/store/auth.store";


export const useLogin = () => {

  const setAuth =
    useAuthStore(
      (state) => state.setAuth,
    );


  return useMutation({

    mutationFn:
      authService.login,


    onSuccess(data) {

      setAuth(
        data.user,
        data.token,
      );

    },

  });

};


export const useRegister = () => {

  return useMutation({

    mutationFn:
      authService.register,

  });

};