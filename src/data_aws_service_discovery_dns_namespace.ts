import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServiceDiscoveryDnsNamespaceArgs {
  name: string;
  type: string;
}

export class data_aws_service_discovery_dns_namespace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsServiceDiscoveryDnsNamespaceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_service_discovery_dns_namespace", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get hosted_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.hosted_zone`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
