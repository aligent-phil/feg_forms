import { Form, Input, Debug, FormState } from 'informed';

const InformedForm = () => {
  const onSubmit = ({values}:FormState) => window.alert(`Hello ${values.firstName}`);

  return (
    <Form onSubmit={onSubmit} initialValues={{ phone: '1234567899' }}>
      <Input name="firstName" label="First Name" placeholder="Elon" required />
      <Input name="lastName" label="Last Name" required="Last name required" />
      <Input name="phone" label="Phone" formatter="+61 (###)-###-####" />
      <Input name="email" label="Email" required />
      <button type="submit">Submit</button>
      <Debug valid pristine dirty values errors />
    </Form>
  );
}

export default InformedForm;