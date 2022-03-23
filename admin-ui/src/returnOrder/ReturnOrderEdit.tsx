import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReturnOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="order_id" source="orderId" />
      </SimpleForm>
    </Edit>
  );
};
