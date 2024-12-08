import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServiceDiscoveryHttpNamespaceArgs {
  name: string;
}

export class data_aws_service_discovery_http_namespace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsServiceDiscoveryHttpNamespaceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_service_discovery_http_namespace", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get http_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.http_name`;
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
}
