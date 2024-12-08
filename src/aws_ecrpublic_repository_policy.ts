import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrpublicRepositoryPolicyArgs {
  policy: string;
  repository_name: string;
}

export class aws_ecrpublic_repository_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcrpublicRepositoryPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ecrpublic_repository_policy", resourceName);
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

  get repository_name(): string {
    return `${this.resourceType}.${this.resourceName}.repository_name`;
  }
}
