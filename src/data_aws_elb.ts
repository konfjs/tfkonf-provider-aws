import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElbArgs {
  name: string;
}

export class data_aws_elb extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsElbArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elb", resourceName);
  }

  get access_logs(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_logs`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get connection_draining(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_draining`;
  }

  get connection_draining_timeout(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_draining_timeout`;
  }

  get cross_zone_load_balancing(): string {
    return `data.${this.resourceType}.${this.resourceName}.cross_zone_load_balancing`;
  }

  get desync_mitigation_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.desync_mitigation_mode`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get health_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.health_check`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get idle_timeout(): string {
    return `data.${this.resourceType}.${this.resourceName}.idle_timeout`;
  }

  get instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.instances`;
  }

  get internal(): string {
    return `data.${this.resourceType}.${this.resourceName}.internal`;
  }

  get listener(): string {
    return `data.${this.resourceType}.${this.resourceName}.listener`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get source_security_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_security_group`;
  }

  get source_security_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_security_group_id`;
  }

  get subnets(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnets`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
