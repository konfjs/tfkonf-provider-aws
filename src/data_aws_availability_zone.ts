import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAvailabilityZoneArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsAvailabilityZoneArgsTimeouts {
  read?: string;
}

export interface DataAwsAvailabilityZoneArgs {
  all_availability_zones?: boolean;
  filter?: DataAwsAvailabilityZoneArgsFilter[];
  timeouts?: DataAwsAvailabilityZoneArgsTimeouts;
}

export class data_aws_availability_zone extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsAvailabilityZoneArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_availability_zone", resourceName);
  }

  get group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get name_suffix(): string {
    return `data.${this.resourceType}.${this.resourceName}.name_suffix`;
  }

  get network_border_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_border_group`;
  }

  get opt_in_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.opt_in_status`;
  }

  get parent_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_zone_id`;
  }

  get parent_zone_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_zone_name`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone_id`;
  }

  get zone_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone_type`;
  }
}
