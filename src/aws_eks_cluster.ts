import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksClusterArgsAccessConfig {
  bootstrap_cluster_creator_admin_permissions?: boolean;
}

export interface AwsEksClusterArgsEncryptionConfigProvider {
  key_arn: string;
}

export interface AwsEksClusterArgsEncryptionConfig {
  resources: string[];
  provider: AwsEksClusterArgsEncryptionConfigProvider;
}

export interface AwsEksClusterArgsKubernetesNetworkConfig {
}

export interface AwsEksClusterArgsOutpostConfigControlPlanePlacement {
  group_name: string;
}

export interface AwsEksClusterArgsOutpostConfig {
  control_plane_instance_type: string;
  outpost_arns: string[];
  control_plane_placement?: AwsEksClusterArgsOutpostConfigControlPlanePlacement;
}

export interface AwsEksClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEksClusterArgsUpgradePolicy {
}

export interface AwsEksClusterArgsVpcConfig {
  endpoint_private_access?: boolean;
  endpoint_public_access?: boolean;
  security_group_ids?: string[];
  subnet_ids: string[];
}

export interface AwsEksClusterArgsZonalShiftConfig {
  enabled?: boolean;
}

export interface AwsEksClusterArgs {
  bootstrap_self_managed_addons?: boolean;
  enabled_cluster_log_types?: string[];
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  access_config?: AwsEksClusterArgsAccessConfig;
  encryption_config?: AwsEksClusterArgsEncryptionConfig;
  kubernetes_network_config?: AwsEksClusterArgsKubernetesNetworkConfig;
  outpost_config?: AwsEksClusterArgsOutpostConfig;
  timeouts?: AwsEksClusterArgsTimeouts;
  upgrade_policy?: AwsEksClusterArgsUpgradePolicy;
  vpc_config: AwsEksClusterArgsVpcConfig;
  zonal_shift_config?: AwsEksClusterArgsZonalShiftConfig;
}

export class aws_eks_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEksClusterArgs) {
    const meta = {access_config:{isBlock:true},encryption_config:{isBlock:true,provider:{isBlock:true}},kubernetes_network_config:{isBlock:true},outpost_config:{isBlock:true,control_plane_placement:{isBlock:true}},timeouts:{isBlock:true},upgrade_policy:{isBlock:true},vpc_config:{isBlock:true},zonal_shift_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eks_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_authority(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_authority`;
  }

  get cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity(): string {
    return `${this.resourceType}.${this.resourceName}.identity`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get platform_version(): string {
    return `${this.resourceType}.${this.resourceName}.platform_version`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
