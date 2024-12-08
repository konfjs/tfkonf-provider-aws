import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudformationStackArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudformationStackArgs {
  capabilities?: string[];
  disable_rollback?: boolean;
  iam_role_arn?: string;
  name: string;
  notification_arns?: string[];
  on_failure?: string;
  policy_url?: string;
  tags?: { [key: string]: string };
  template_url?: string;
  timeout_in_minutes?: number;
  timeouts?: AwsCloudformationStackArgsTimeouts;
}

export class aws_cloudformation_stack extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudformationStackArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudformation_stack", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get outputs(): string {
    return `${this.resourceType}.${this.resourceName}.outputs`;
  }

  get parameters(): string {
    return `${this.resourceType}.${this.resourceName}.parameters`;
  }

  get policy_body(): string {
    return `${this.resourceType}.${this.resourceName}.policy_body`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get template_body(): string {
    return `${this.resourceType}.${this.resourceName}.template_body`;
  }
}
