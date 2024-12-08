import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServiceDiscoveryPublicDnsNamespaceArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_service_discovery_public_dns_namespace extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryPublicDnsNamespaceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_service_discovery_public_dns_namespace", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get hosted_zone(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone`;
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
