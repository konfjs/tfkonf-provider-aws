import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2HostArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2HostArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2HostArgs {
  filter?: DataAwsEc2HostArgsFilter[];
  timeouts?: DataAwsEc2HostArgsTimeouts;
}

export class data_aws_ec2_host extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2HostArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_host", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get asset_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.asset_id`;
  }

  get auto_placement(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_placement`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get cores(): string {
    return `data.${this.resourceType}.${this.resourceName}.cores`;
  }

  get host_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.host_id`;
  }

  get host_recovery(): string {
    return `data.${this.resourceType}.${this.resourceName}.host_recovery`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_family(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_family`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get sockets(): string {
    return `data.${this.resourceType}.${this.resourceName}.sockets`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get total_vcpus(): string {
    return `data.${this.resourceType}.${this.resourceName}.total_vcpus`;
  }
}
