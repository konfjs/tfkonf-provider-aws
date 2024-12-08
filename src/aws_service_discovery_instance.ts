import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServiceDiscoveryInstanceArgs {
  attributes: { [key: string]: string };
  instance_id: string;
  service_id: string;
}

export class aws_service_discovery_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryInstanceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_service_discovery_instance", resourceName);
  }

  get attributes(): string {
    return `${this.resourceType}.${this.resourceName}.attributes`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }
}
