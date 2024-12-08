import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodeartifactDomainPermissionsPolicyArgs {
  domain: string;
  policy_document: string;
}

export class aws_codeartifact_domain_permissions_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodeartifactDomainPermissionsPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codeartifact_domain_permissions_policy", resourceName);
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

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
