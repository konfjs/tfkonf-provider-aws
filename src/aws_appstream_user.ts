import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppstreamUserArgs {
  authentication_type: string;
  enabled?: boolean;
  first_name?: string;
  last_name?: string;
  send_email_notification?: boolean;
  user_name: string;
}

export class aws_appstream_user extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppstreamUserArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appstream_user", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_type(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_type`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
