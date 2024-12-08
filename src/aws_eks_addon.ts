import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksAddonArgsPodIdentityAssociation {
  role_arn: string;
  service_account: string;
}

export interface AwsEksAddonArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEksAddonArgs {
  addon_name: string;
  cluster_name: string;
  preserve?: boolean;
  resolve_conflicts?: string;
  resolve_conflicts_on_create?: string;
  resolve_conflicts_on_update?: string;
  service_account_role_arn?: string;
  tags?: { [key: string]: string };
  pod_identity_association?: AwsEksAddonArgsPodIdentityAssociation[];
  timeouts?: AwsEksAddonArgsTimeouts;
}

export class aws_eks_addon extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEksAddonArgs) {
    const meta = {pod_identity_association:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eks_addon", resourceName);
  }

  get addon_name(): string {
    return `${this.resourceType}.${this.resourceName}.addon_name`;
  }

  get addon_version(): string {
    return `${this.resourceType}.${this.resourceName}.addon_version`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get configuration_values(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_values`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get modified_at(): string {
    return `${this.resourceType}.${this.resourceName}.modified_at`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
