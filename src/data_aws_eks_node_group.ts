import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEksNodeGroupArgs {
  cluster_name: string;
  node_group_name: string;
}

export class data_aws_eks_node_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEksNodeGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_eks_node_group", resourceName);
  }

  get ami_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.ami_type`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get capacity_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.capacity_type`;
  }

  get cluster_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get disk_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk_size`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_types`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get launch_template(): string {
    return `data.${this.resourceType}.${this.resourceName}.launch_template`;
  }

  get node_group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_group_name`;
  }

  get node_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_role_arn`;
  }

  get release_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.release_version`;
  }

  get remote_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.remote_access`;
  }

  get resources(): string {
    return `data.${this.resourceType}.${this.resourceName}.resources`;
  }

  get scaling_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.scaling_config`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get taints(): string {
    return `data.${this.resourceType}.${this.resourceName}.taints`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
