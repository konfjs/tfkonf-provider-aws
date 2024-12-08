import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskConfigurationArgs {
  description?: string;
  kafka_versions?: string[];
  name: string;
  server_properties: string;
}

export class aws_msk_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMskConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_msk_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_revision(): string {
    return `${this.resourceType}.${this.resourceName}.latest_revision`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get server_properties(): string {
    return `${this.resourceType}.${this.resourceName}.server_properties`;
  }
}
