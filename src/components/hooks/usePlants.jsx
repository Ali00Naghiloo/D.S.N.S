const usePlants = () => {
  const plants = [
    {
      system: "Qom1",
      power: "120,000KWp",
    },
    {
      system: "Qom2",
      power: "140,000KWp",
    },
  ];

  const callback = plants.map((a, index) => {
    return `getItem(${a.system}, ${index}, <SettingOutlined />);`;
  });

  const exports = {
    callback,
  };
  return exports;
};

export default usePlants;

// import { useFormik } from "formik";
// import * as yup from "yup";

// const useFormController = () => {
//   const validationSchema = yup.object({
//     name: yup.string().required("Name is required"),
//     email: yup
//       .string()
//       .email("Enter a valid email")
//       .required("Email is required"),
//     password: yup
//       .string()
//       .min(8, "Password should be of minimum 8 characters length")
//       .required("Password is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   const exports = {
//     formik,
//   };
//   return exports;
// };

// export default useFormController;
