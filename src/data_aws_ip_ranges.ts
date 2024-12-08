import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIpRangesArgs {
  regions?: string[];
  services: string[];
  url?: string;
}

export class data_aws_ip_ranges extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIpRangesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ip_ranges", resourceName);
  }

  get cidr_blocks(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_blocks`;
  }

  get create_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_cidr_blocks(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_cidr_blocks`;
  }

  get services(): string {
    return `data.${this.resourceType}.${this.resourceName}.services`;
  }

  get sync_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.sync_token`;
  }
}
