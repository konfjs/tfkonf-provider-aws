import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrInstanceGroupArgsEbsConfig {
  iops?: number;
  size: number;
  type: string;
  volumes_per_instance?: number;
}

export interface AwsEmrInstanceGroupArgs {
  autoscaling_policy?: string;
  bid_price?: string;
  cluster_id: string;
  configurations_json?: string;
  ebs_optimized?: boolean;
  instance_type: string;
  name?: string;
  ebs_config?: AwsEmrInstanceGroupArgsEbsConfig[];
}

export class aws_emr_instance_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEmrInstanceGroupArgs) {
    const meta = {ebs_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_emr_instance_group", resourceName);
  }

  get cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_count(): string {
    return `${this.resourceType}.${this.resourceName}.instance_count`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get running_instance_count(): string {
    return `${this.resourceType}.${this.resourceName}.running_instance_count`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
