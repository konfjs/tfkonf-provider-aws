import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServiceDiscoveryHttpNamespaceArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_service_discovery_http_namespace extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryHttpNamespaceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_service_discovery_http_namespace", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get http_name(): string {
    return `${this.resourceType}.${this.resourceName}.http_name`;
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
