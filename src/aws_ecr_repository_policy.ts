import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrRepositoryPolicyArgs {
  policy: string;
  repository: string;
}

export class aws_ecr_repository_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcrRepositoryPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ecr_repository_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get registry_id(): string {
    return `${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }
}
