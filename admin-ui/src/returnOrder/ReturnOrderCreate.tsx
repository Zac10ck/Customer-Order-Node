import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReturnOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="order_id" source="orderId" />
      </SimpleForm>
    </Create>
  );
};
