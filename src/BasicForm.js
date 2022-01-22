// import { useFormik } from ";


// const validateForm = (values) => {
//     const errors = {};
//     //email must 5charachters
//     if (values.email.length < 5) {
//         errors.email = "Please provide a longer email"
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     if (values.password.length < 8) {
//         errors.password = "please Provide Longer Password"
//     } else if (values.password.length > 12) {
//         errors.password = "please Provide Shorter Password"
//     }


//     console.log(errors)
//     return errors;
// }

// export function BasicForm() {
//     const = useFormik({
//         initialValues: {
//             email: "aniketsaste@gmail.com",
//             password: "abc"
//         },
//         validate: validateForm,
//         onSubmit: (values) => {
//             console.log(values)
//         }
//     })
//     console.log(touched)
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h1>Basic Form</h1>

//                 <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     placeholder="email" />
//                 {touched.email && errors.email ? errors.email : ""}
//                 {/* onBlur-> Touched. 
//   only if user touches the form and moves away then show error messsage
// */}

//                 <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     value={values.password}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     placeholder="password" />
//                 {touched.password && errors.password ? errors.password : ""}
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }




import { useFormik } from "formik";
import * as yup from 'yup';




// const validateForm = (values) => {
//     const errors = {};
//     //email must 5charachters
//     if (values.email.length < 5) {
//         errors.email = "Please provide a longer email"
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     if (values.password.length < 8) {
//         errors.password = "please Provide Longer Password"
//     } else if (values.password.length > 12) {
//         errors.password = "please Provide Shorter Password"
//     }


//     console.log(errors)
//     return errors;
// }


//code is more redable and maintanable
const formvalidateSchema = yup.object({
    email: yup
        .string()
        .min(5, "Need a longer email")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "pattern not matched").required("Why not fill this email"),
    password: yup
        .string()
        .min(8, "Need Longer password")
        .max(12, "Need shorter password"),
})





export function BasicForm() {
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            email: "aniketsaste96@gmail.com",
            password: "abc"
        },

        validationSchema: formvalidateSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    console.log(touched)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Basic Form</h1>

                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="email" />
                {touched.email && errors.email ? errors.email : ""}
                {/* onBlur-> Touched. 
  only if user touches the form and moves away then show error messsage
*/}

                <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="password" />
                {touched.password && errors.password ? errors.password : ""}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
