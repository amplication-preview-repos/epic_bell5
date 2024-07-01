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

import { JOBPOSTING_TITLE_FIELD } from "./JobPostingTitle";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";

export const JobPostingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="closeDate" source="closeDate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="postedDate" source="postedDate" />
        <TextField label="requirements" source="requirements" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Applicant"
          target="jobPostingId"
          label="Applicants"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
