import 'react-app-polyfill/ie11';
import * as React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';


interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const ReactHookForm = () => {
  const {register, control, handleSubmit, formState: {isSubmitting}} = useForm({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<Values> = (data) => {
    setTimeout(() => {
      alert(JSON.stringify(data, null, 2));
    }, 500);
  };

  // @ts-ignore
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register('firstName')} placeholder="John"/>

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" {...register('lastName')} placeholder="Doe"/>

        <label htmlFor="email">Email</label>
        <input id="email" {...register('email')} placeholder="john@acme.com" type="email"/>

        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>

      <DevTool control={control}/>
    </div>
  );
};

export default ReactHookForm;