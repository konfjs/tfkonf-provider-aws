import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodeartifactRepositoryPermissionsPolicyArgs {
  domain: string;
  policy_document: string;
  repository: string;
}

export class aws_codeartifact_repository_permissions_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodeartifactRepositoryPermissionsPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codeartifact_repository_permissions_policy", resourceName);
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get domain_owner(): string {
    return `${this.resourceType}.${this.resourceName}.domain_owner`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_document(): string {
    return `${this.resourceType}.${this.resourceName}.policy_document`;
  }

  get policy_revision(): string {
    return `${this.resourceType}.${this.resourceName}.policy_revision`;
  }

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
