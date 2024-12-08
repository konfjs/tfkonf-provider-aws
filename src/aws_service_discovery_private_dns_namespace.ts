import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServiceDiscoveryPrivateDnsNamespaceArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  vpc: string;
}

export class aws_service_discovery_private_dns_namespace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsServiceDiscoveryPrivateDnsNamespaceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_service_discovery_private_dns_namespace", resourceName);
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

  get vpc(): string {
    return `${this.resourceType}.${this.resourceName}.vpc`;
  }
}
