import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksFargateProfileArgsSelector {
  labels?: { [key: string]: string };
  namespace: string;
}

export interface AwsEksFargateProfileArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEksFargateProfileArgs {
  cluster_name: string;
  fargate_profile_name: string;
  pod_execution_role_arn: string;
  subnet_ids?: string[];
  tags?: { [key: string]: string };
  selector: AwsEksFargateProfileArgsSelector[];
  timeouts?: AwsEksFargateProfileArgsTimeouts;
}

export class aws_eks_fargate_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEksFargateProfileArgs) {
    const meta = {selector:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eks_fargate_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get fargate_profile_name(): string {
    return `${this.resourceType}.${this.resourceName}.fargate_profile_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get pod_execution_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.pod_execution_role_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
