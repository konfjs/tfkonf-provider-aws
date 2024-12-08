import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDataexchangeDataSetArgs {
  asset_type: string;
  description: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_dataexchange_data_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDataexchangeDataSetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dataexchange_data_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get asset_type(): string {
    return `${this.resourceType}.${this.resourceName}.asset_type`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
