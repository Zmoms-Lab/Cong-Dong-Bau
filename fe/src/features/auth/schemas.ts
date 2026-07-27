import { z } from "zod";


export const registerSchema = z.object({

  key: z
    .string()
    .min(
      1,
      "Vui lòng nhập mã kích hoạt",
    ),


  name: z
    .string()
    .min(
      2,
      "Họ tên phải có ít nhất 2 ký tự",
    ),


  email: z
    .string()
    .email(
      "Email không hợp lệ",
    ),


  phone: z
    .string()
    .min(
      9,
      "Số điện thoại không hợp lệ",
    )
    .optional(),


  password: z
    .string()
    .min(
      6,
      "Mật khẩu tối thiểu 6 ký tự",
    ),


  confirmPassword: z
    .string(),


})
.refine(

  (data) =>
    data.password === data.confirmPassword,

  {
    message:
      "Mật khẩu nhập lại không đúng",

    path:[
      "confirmPassword",
    ],
  },

);



export const loginSchema = z.object({

  email: z
    .string()
    .email(
      "Email không hợp lệ",
    ),


  password: z
    .string()
    .min(
      6,
      "Mật khẩu tối thiểu 6 ký tự",
    ),

});