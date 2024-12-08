import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppstreamFleetArgsComputeCapacity {
  desired_instances?: number;
  desired_sessions?: number;
}

export interface AwsAppstreamFleetArgsDomainJoinInfo {
}

export interface AwsAppstreamFleetArgsVpcConfig {
}

export interface AwsAppstreamFleetArgs {
  idle_disconnect_timeout_in_seconds?: number;
  instance_type: string;
  max_sessions_per_instance?: number;
  name: string;
  tags?: { [key: string]: string };
  compute_capacity: AwsAppstreamFleetArgsComputeCapacity;
  domain_join_info?: AwsAppstreamFleetArgsDomainJoinInfo;
  vpc_config?: AwsAppstreamFleetArgsVpcConfig;
}

export class aws_appstream_fleet extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppstreamFleetArgs) {
    const meta = {compute_capacity:{isBlock:true},domain_join_info:{isBlock:true},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appstream_fleet", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get disconnect_timeout_in_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.disconnect_timeout_in_seconds`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get enable_default_internet_access(): string {
    return `${this.resourceType}.${this.resourceName}.enable_default_internet_access`;
  }

  get fleet_type(): string {
    return `${this.resourceType}.${this.resourceName}.fleet_type`;
  }

  get iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_arn(): string {
    return `${this.resourceType}.${this.resourceName}.image_arn`;
  }

  get image_name(): string {
    return `${this.resourceType}.${this.resourceName}.image_name`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get max_user_duration_in_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.max_user_duration_in_seconds`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get stream_view(): string {
    return `${this.resourceType}.${this.resourceName}.stream_view`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
