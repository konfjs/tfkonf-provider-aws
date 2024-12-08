import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOutpostsOutpostInstanceTypeArgs {
  arn: string;
  preferred_instance_types?: string[];
}

export class data_aws_outposts_outpost_instance_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOutpostsOutpostInstanceTypeArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_outposts_outpost_instance_type", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }
}
