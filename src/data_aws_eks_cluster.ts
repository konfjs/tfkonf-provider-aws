import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEksClusterArgs {
  name: string;
}

export class data_aws_eks_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEksClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_eks_cluster", resourceName);
  }

  get access_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_config`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_authority(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_authority`;
  }

  get cluster_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get enabled_cluster_log_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled_cluster_log_types`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity`;
  }

  get kubernetes_network_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.kubernetes_network_config`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get outpost_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_config`;
  }

  get platform_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform_version`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get upgrade_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.upgrade_policy`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }

  get vpc_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_config`;
  }

  get zonal_shift_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.zonal_shift_config`;
  }
}
