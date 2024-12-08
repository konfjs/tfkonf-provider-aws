import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsoadminApplicationAssignmentsArgsApplicationAssignments {
}

export interface DataAwsSsoadminApplicationAssignmentsArgs {
  application_arn: string;
  application_assignments?: DataAwsSsoadminApplicationAssignmentsArgsApplicationAssignments[];
}

export class data_aws_ssoadmin_application_assignments extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsoadminApplicationAssignmentsArgs) {
    const meta = {application_assignments:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ssoadmin_application_assignments", resourceName);
  }

  get application_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
