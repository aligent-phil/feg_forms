import { Form, Field } from 'react-final-form';

const ReactFinalForm = () => {
  const onSubmit = (values: any) => {
    console.log('Form Submitted:', values);
  };

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.mobile) {
      errors.mobile = 'Required';
    } else if (!/^\d{10}$/.test(values.mobile)) {
      errors.mobile = 'Invalid mobile number';
    }
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name="firstName">
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="First Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName">
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Last Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Email</label>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <input {...input} type="email" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Mobile Number</label>
            <Field name="mobile">
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Mobile Number" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

export default ReactFinalForm;