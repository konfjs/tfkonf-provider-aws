import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsPartitionArgs {
}

export class data_aws_partition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsPartitionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_partition", resourceName);
  }

  get dns_suffix(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_suffix`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get partition(): string {
    return `data.${this.resourceType}.${this.resourceName}.partition`;
  }

  get reverse_dns_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.reverse_dns_prefix`;
  }
}
