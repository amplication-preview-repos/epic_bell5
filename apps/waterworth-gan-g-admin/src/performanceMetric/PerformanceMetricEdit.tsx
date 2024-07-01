import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const PerformanceMetricEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="callsMade" source="callsMade" />
        <NumberInput label="conversionRate" source="conversionRate" />
        <NumberInput step={1} label="emailsSent" source="emailsSent" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="meetingsBooked" source="meetingsBooked" />
        <SelectInput
          source="metricType"
          label="metricType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="recordedDate" source="recordedDate" />
      </SimpleForm>
    </Edit>
  );
};
