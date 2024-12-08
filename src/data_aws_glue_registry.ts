import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGlueRegistryArgs {
  name: string;
}

export class data_aws_glue_registry extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsGlueRegistryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_glue_registry", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
