import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEksAddonArgs {
  addon_name: string;
  cluster_name: string;
}

export class data_aws_eks_addon extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEksAddonArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_eks_addon", resourceName);
  }

  get addon_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.addon_name`;
  }

  get addon_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.addon_version`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get configuration_values(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration_values`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get modified_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.modified_at`;
  }

  get pod_identity_association(): string {
    return `data.${this.resourceType}.${this.resourceName}.pod_identity_association`;
  }

  get service_account_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_account_role_arn`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
