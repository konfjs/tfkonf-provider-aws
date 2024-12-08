import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAvailabilityZonesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsAvailabilityZonesArgsTimeouts {
  read?: string;
}

export interface DataAwsAvailabilityZonesArgs {
  all_availability_zones?: boolean;
  exclude_names?: string[];
  exclude_zone_ids?: string[];
  state?: string;
  filter?: DataAwsAvailabilityZonesArgsFilter[];
  timeouts?: DataAwsAvailabilityZonesArgsTimeouts;
}

export class data_aws_availability_zones extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAvailabilityZonesArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_availability_zones", resourceName);
  }

  get group_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.group_names`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }

  get zone_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone_ids`;
  }
}
