import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsInstanceStateArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsRdsInstanceStateArgs {
  identifier: string;
  state: string;
  timeouts?: AwsRdsInstanceStateArgsTimeouts;
}

export class aws_rds_instance_state extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRdsInstanceStateArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_instance_state", resourceName);
  }

  get identifier(): string {
    return `${this.resourceType}.${this.resourceName}.identifier`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
