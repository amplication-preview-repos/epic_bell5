import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";

export const InterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="applicant.id"
          reference="Applicant"
          label="applicant"
        >
          <SelectInput optionText={ApplicantTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="feedback" multiline source="feedback" />
        <TextInput label="interviewer" source="interviewer" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
