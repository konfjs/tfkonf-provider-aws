import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDetectiveMemberArgs {
  account_id: string;
  disable_email_notification?: boolean;
  email_address: string;
  graph_arn: string;
  message?: string;
}

export class aws_detective_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDetectiveMemberArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_detective_member", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get administrator_id(): string {
    return `${this.resourceType}.${this.resourceName}.administrator_id`;
  }

  get disabled_reason(): string {
    return `${this.resourceType}.${this.resourceName}.disabled_reason`;
  }

  get email_address(): string {
    return `${this.resourceType}.${this.resourceName}.email_address`;
  }

  get graph_arn(): string {
    return `${this.resourceType}.${this.resourceName}.graph_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invited_time(): string {
    return `${this.resourceType}.${this.resourceName}.invited_time`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.updated_time`;
  }

  get volume_usage_in_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.volume_usage_in_bytes`;
  }
}
