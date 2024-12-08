import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchDomainPolicyArgsTimeouts {
  delete?: string;
  update?: string;
}

export interface AwsOpensearchDomainPolicyArgs {
  access_policies: string;
  domain_name: string;
  timeouts?: AwsOpensearchDomainPolicyArgsTimeouts;
}

export class aws_opensearch_domain_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOpensearchDomainPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearch_domain_policy", resourceName);
  }

  get access_policies(): string {
    return `${this.resourceType}.${this.resourceName}.access_policies`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
