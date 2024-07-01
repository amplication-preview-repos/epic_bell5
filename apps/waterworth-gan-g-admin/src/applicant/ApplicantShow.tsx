import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPLICANT_TITLE_FIELD } from "./ApplicantTitle";
import { JOBPOSTING_TITLE_FIELD } from "../jobPosting/JobPostingTitle";

export const ApplicantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="appliedDate" source="appliedDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="jobPosting"
          source="jobposting.id"
          reference="JobPosting"
        >
          <TextField source={JOBPOSTING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="resume" source="resume" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Interview"
          target="applicantId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="applicant"
              source="applicant.id"
              reference="Applicant"
            >
              <TextField source={APPLICANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <TextField label="interviewer" source="interviewer" />
            <TextField label="status" source="status" />
            <TextField label="time" source="time" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
