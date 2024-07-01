import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <TextInput label="outlookEventId" source="outlookEventId" />
        <SelectArrayInput
          label="participants"
          source="participants"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="time" source="time" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
