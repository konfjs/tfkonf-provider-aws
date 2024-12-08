import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskconnectCustomPluginArgs {
  name: string;
}

export class data_aws_mskconnect_custom_plugin extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMskconnectCustomPluginArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_mskconnect_custom_plugin", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_revision(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_revision`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
