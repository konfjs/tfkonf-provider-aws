import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServiceDiscoveryServiceArgs {
  name: string;
  namespace_id: string;
  tags?: { [key: string]: string };
}

export class data_aws_service_discovery_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsServiceDiscoveryServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_service_discovery_service", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get dns_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_config`;
  }

  get health_check_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.health_check_config`;
  }

  get health_check_custom_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.health_check_custom_config`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get namespace_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.namespace_id`;
  }

  get tags_all(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
