import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsControltowerControlArgsParameters {
  key: string;
  value: string;
}

export interface AwsControltowerControlArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsControltowerControlArgs {
  control_identifier: string;
  target_identifier: string;
  parameters?: AwsControltowerControlArgsParameters[];
  timeouts?: AwsControltowerControlArgsTimeouts;
}

export class aws_controltower_control extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsControltowerControlArgs) {
    const meta = {parameters:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_controltower_control", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get control_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.control_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get target_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.target_identifier`;
  }
}
