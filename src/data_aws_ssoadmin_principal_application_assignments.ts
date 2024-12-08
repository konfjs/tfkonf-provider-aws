import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsoadminPrincipalApplicationAssignmentsArgsApplicationAssignments {
}

export interface DataAwsSsoadminPrincipalApplicationAssignmentsArgs {
  instance_arn: string;
  principal_id: string;
  principal_type: string;
  application_assignments?: DataAwsSsoadminPrincipalApplicationAssignmentsArgsApplicationAssignments[];
}

export class data_aws_ssoadmin_principal_application_assignments extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsoadminPrincipalApplicationAssignmentsArgs) {
    const meta = {application_assignments:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ssoadmin_principal_application_assignments", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get principal_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.principal_id`;
  }

  get principal_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.principal_type`;
  }
}
