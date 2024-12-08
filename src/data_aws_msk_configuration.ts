import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskConfigurationArgs {
  name: string;
}

export class data_aws_msk_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMskConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_msk_configuration", resourceName);
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

  get kafka_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.kafka_versions`;
  }

  get latest_revision(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_revision`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get server_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_properties`;
  }
}
