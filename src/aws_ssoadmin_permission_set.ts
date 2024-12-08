import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminPermissionSetArgsTimeouts {
  update?: string;
}

export interface AwsSsoadminPermissionSetArgs {
  description?: string;
  instance_arn: string;
  name: string;
  relay_state?: string;
  session_duration?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsSsoadminPermissionSetArgsTimeouts;
}

export class aws_ssoadmin_permission_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsoadminPermissionSetArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_permission_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
