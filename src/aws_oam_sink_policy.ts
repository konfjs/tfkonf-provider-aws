import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOamSinkPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOamSinkPolicyArgs {
  policy: string;
  sink_identifier: string;
  timeouts?: AwsOamSinkPolicyArgsTimeouts;
}

export class aws_oam_sink_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOamSinkPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_oam_sink_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get sink_id(): string {
    return `${this.resourceType}.${this.resourceName}.sink_id`;
  }

  get sink_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.sink_identifier`;
  }
}
