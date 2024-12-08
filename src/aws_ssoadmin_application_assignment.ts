import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminApplicationAssignmentArgs {
  application_arn: string;
  principal_id: string;
  principal_type: string;
}

export class aws_ssoadmin_application_assignment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsoadminApplicationAssignmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_application_assignment", resourceName);
  }

  get application_arn(): string {
    return `${this.resourceType}.${this.resourceName}.application_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get principal_id(): string {
    return `${this.resourceType}.${this.resourceName}.principal_id`;
  }

  get principal_type(): string {
    return `${this.resourceType}.${this.resourceName}.principal_type`;
  }
}
