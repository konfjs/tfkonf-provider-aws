import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDirectoryServiceDirectoryArgs {
  directory_id: string;
}

export class data_aws_directory_service_directory extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDirectoryServiceDirectoryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_directory_service_directory", resourceName);
  }

  get access_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_url`;
  }

  get alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.alias`;
  }

  get connect_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.connect_settings`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get directory_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get dns_ip_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_ip_addresses`;
  }

  get edition(): string {
    return `data.${this.resourceType}.${this.resourceName}.edition`;
  }

  get enable_sso(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_sso`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get radius_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.radius_settings`;
  }

  get security_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get short_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.short_name`;
  }

  get size(): string {
    return `data.${this.resourceType}.${this.resourceName}.size`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get vpc_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_settings`;
  }
}
