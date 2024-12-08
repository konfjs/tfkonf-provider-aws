import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksPodIdentityAssociationArgs {
  cluster_name: string;
  namespace: string;
  role_arn: string;
  service_account: string;
  tags?: { [key: string]: string };
}

export class aws_eks_pod_identity_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEksPodIdentityAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_eks_pod_identity_association", resourceName);
  }

  get association_arn(): string {
    return `${this.resourceType}.${this.resourceName}.association_arn`;
  }

  get association_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_id`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get namespace(): string {
    return `${this.resourceType}.${this.resourceName}.namespace`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
