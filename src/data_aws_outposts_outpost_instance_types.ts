import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOutpostsOutpostInstanceTypesArgs {
  arn: string;
}

export class data_aws_outposts_outpost_instance_types extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOutpostsOutpostInstanceTypesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_outposts_outpost_instance_types", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_types`;
  }
}
