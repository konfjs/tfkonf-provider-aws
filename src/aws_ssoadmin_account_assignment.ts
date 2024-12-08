import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminAccountAssignmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSsoadminAccountAssignmentArgs {
  instance_arn: string;
  permission_set_arn: string;
  principal_id: string;
  principal_type: string;
  target_id: string;
  target_type?: string;
  timeouts?: AwsSsoadminAccountAssignmentArgsTimeouts;
}

export class aws_ssoadmin_account_assignment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsoadminAccountAssignmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_account_assignment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get permission_set_arn(): string {
    return `${this.resourceType}.${this.resourceName}.permission_set_arn`;
  }

  get principal_id(): string {
    return `${this.resourceType}.${this.resourceName}.principal_id`;
  }

  get principal_type(): string {
    return `${this.resourceType}.${this.resourceName}.principal_type`;
  }

  get target_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_id`;
  }
}
