import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubAccountArgs {
  auto_enable_controls?: boolean;
  enable_default_standards?: boolean;
}

export class aws_securityhub_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityhubAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_account", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get control_finding_generator(): string {
    return `${this.resourceType}.${this.resourceName}.control_finding_generator`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
