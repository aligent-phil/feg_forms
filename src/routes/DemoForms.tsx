import FormikForm from "./Formik";
import InformedForm from "./Informed";
import ReactHookForm from "./HookForm";
import ReactFinalForm from "./FinalForm";
import "../index.css";

const DemoForms = () => {
  return (
    <>
      <h1>Formik</h1>
      <FormikForm />
      <h1>Informed</h1>
      <InformedForm />
      <h1>React Hook Form</h1>
      <ReactHookForm />
      <h1>React Final Form</h1>
      <ReactFinalForm />
    </>
  );
};

export default DemoForms;
