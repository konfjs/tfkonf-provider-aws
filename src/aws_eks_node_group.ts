import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksNodeGroupArgsLaunchTemplate {
  version: string;
}

export interface AwsEksNodeGroupArgsRemoteAccess {
  ec2_ssh_key?: string;
  source_security_group_ids?: string[];
}

export interface AwsEksNodeGroupArgsScalingConfig {
  desired_size: number;
  max_size: number;
  min_size: number;
}

export interface AwsEksNodeGroupArgsTaint {
  effect: string;
  key: string;
  value?: string;
}

export interface AwsEksNodeGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEksNodeGroupArgsUpdateConfig {
  max_unavailable?: number;
  max_unavailable_percentage?: number;
}

export interface AwsEksNodeGroupArgs {
  cluster_name: string;
  force_update_version?: boolean;
  labels?: { [key: string]: string };
  node_role_arn: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  launch_template?: AwsEksNodeGroupArgsLaunchTemplate;
  remote_access?: AwsEksNodeGroupArgsRemoteAccess;
  scaling_config: AwsEksNodeGroupArgsScalingConfig;
  taint?: AwsEksNodeGroupArgsTaint[];
  timeouts?: AwsEksNodeGroupArgsTimeouts;
  update_config?: AwsEksNodeGroupArgsUpdateConfig;
}

export class aws_eks_node_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEksNodeGroupArgs) {
    const meta = {launch_template:{isBlock:true},remote_access:{isBlock:true},scaling_config:{isBlock:true},taint:{isBlock:true},timeouts:{isBlock:true},update_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eks_node_group", resourceName);
  }

  get ami_type(): string {
    return `${this.resourceType}.${this.resourceName}.ami_type`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get capacity_type(): string {
    return `${this.resourceType}.${this.resourceName}.capacity_type`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get disk_size(): string {
    return `${this.resourceType}.${this.resourceName}.disk_size`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_types(): string {
    return `${this.resourceType}.${this.resourceName}.instance_types`;
  }

  get node_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.node_group_name`;
  }

  get node_group_name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.node_group_name_prefix`;
  }

  get node_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.node_role_arn`;
  }

  get release_version(): string {
    return `${this.resourceType}.${this.resourceName}.release_version`;
  }

  get resources(): string {
    return `${this.resourceType}.${this.resourceName}.resources`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
