import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServiceArgs {
}

export class data_aws_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_service", resourceName);
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get partition(): string {
    return `data.${this.resourceType}.${this.resourceName}.partition`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get reverse_dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.reverse_dns_name`;
  }

  get reverse_dns_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.reverse_dns_prefix`;
  }

  get service_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_id`;
  }

  get supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported`;
  }
}
