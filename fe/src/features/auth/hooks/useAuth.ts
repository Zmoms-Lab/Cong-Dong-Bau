"use client";


import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";


import {
  useRouter,
} from "next/navigation";


import {
  authService,
} from "../services/auth.service";


import {
  useAuthStore,
} from "@/store/auth.store";


import {
  ROUTES,
} from "@/constants/routes";



export const useLogin =()=>{


  const router = useRouter();


  const setAuth =
    useAuthStore(
      state=>state.setAuth
    );



  return useMutation({

    mutationFn:
      authService.login,


    onSuccess(data){


      setAuth(
        data.user,
        data.accessToken,
      );


      router.replace(
        ROUTES.DASHBOARD
      );


    },


  });


};





export const useRegister =()=>{


  const router = useRouter();



  return useMutation({

    mutationFn:
      authService.register,


    onSuccess(){


      router.replace(
        ROUTES.LOGIN
      );


    },


  });


};





export const useMe =()=>{


  return useQuery({

    queryKey:[
      "auth-me"
    ],


    queryFn:
      authService.me,


    retry:false,


  });


};