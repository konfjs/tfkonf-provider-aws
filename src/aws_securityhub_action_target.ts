import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubActionTargetArgs {
  description: string;
  identifier: string;
  name: string;
}

export class aws_securityhub_action_target extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecurityhubActionTargetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_action_target", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identifier(): string {
    return `${this.resourceType}.${this.resourceName}.identifier`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
