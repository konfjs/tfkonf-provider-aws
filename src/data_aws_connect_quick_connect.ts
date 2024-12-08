import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectQuickConnectArgs {
  instance_id: string;
}

export class data_aws_connect_quick_connect extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsConnectQuickConnectArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_quick_connect", resourceName);
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

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get quick_connect_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.quick_connect_config`;
  }

  get quick_connect_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.quick_connect_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
