import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppstreamUserStackAssociationArgs {
  authentication_type: string;
  send_email_notification?: boolean;
  stack_name: string;
  user_name: string;
}

export class aws_appstream_user_stack_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppstreamUserStackAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appstream_user_stack_association", resourceName);
  }

  get authentication_type(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get stack_name(): string {
    return `${this.resourceType}.${this.resourceName}.stack_name`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
