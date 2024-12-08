import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksAccessPolicyAssociationArgsAccessScope {
  namespaces?: string[];
  type: string;
}

export interface AwsEksAccessPolicyAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEksAccessPolicyAssociationArgs {
  cluster_name: string;
  policy_arn: string;
  principal_arn: string;
  access_scope: AwsEksAccessPolicyAssociationArgsAccessScope;
  timeouts?: AwsEksAccessPolicyAssociationArgsTimeouts;
}

export class aws_eks_access_policy_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEksAccessPolicyAssociationArgs) {
    const meta = {access_scope:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eks_access_policy_association", resourceName);
  }

  get associated_at(): string {
    return `${this.resourceType}.${this.resourceName}.associated_at`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get modified_at(): string {
    return `${this.resourceType}.${this.resourceName}.modified_at`;
  }

  get policy_arn(): string {
    return `${this.resourceType}.${this.resourceName}.policy_arn`;
  }

  get principal_arn(): string {
    return `${this.resourceType}.${this.resourceName}.principal_arn`;
  }
}
