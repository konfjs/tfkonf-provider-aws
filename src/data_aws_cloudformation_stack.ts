import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudformationStackArgs {
  name: string;
}

export class data_aws_cloudformation_stack extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudformationStackArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudformation_stack", resourceName);
  }

  get capabilities(): string {
    return `data.${this.resourceType}.${this.resourceName}.capabilities`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get disable_rollback(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_rollback`;
  }

  get iam_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get notification_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.notification_arns`;
  }

  get outputs(): string {
    return `data.${this.resourceType}.${this.resourceName}.outputs`;
  }

  get parameters(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameters`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get template_body(): string {
    return `data.${this.resourceType}.${this.resourceName}.template_body`;
  }

  get timeout_in_minutes(): string {
    return `data.${this.resourceType}.${this.resourceName}.timeout_in_minutes`;
  }
}
