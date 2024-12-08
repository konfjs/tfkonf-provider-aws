import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminApplicationAssignmentConfigurationArgs {
  application_arn: string;
  assignment_required: boolean;
}

export class aws_ssoadmin_application_assignment_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsoadminApplicationAssignmentConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_application_assignment_configuration", resourceName);
  }

  get application_arn(): string {
    return `${this.resourceType}.${this.resourceName}.application_arn`;
  }

  get assignment_required(): string {
    return `${this.resourceType}.${this.resourceName}.assignment_required`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
