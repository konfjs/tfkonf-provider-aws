import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2InstanceStateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2InstanceStateArgs {
  force?: boolean;
  instance_id: string;
  state: string;
  timeouts?: AwsEc2InstanceStateArgsTimeouts;
}

export class aws_ec2_instance_state extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2InstanceStateArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_instance_state", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
