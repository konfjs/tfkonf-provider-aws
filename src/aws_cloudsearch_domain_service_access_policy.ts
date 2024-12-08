import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudsearchDomainServiceAccessPolicyArgsTimeouts {
  delete?: string;
  update?: string;
}

export interface AwsCloudsearchDomainServiceAccessPolicyArgs {
  access_policy: string;
  domain_name: string;
  timeouts?: AwsCloudsearchDomainServiceAccessPolicyArgsTimeouts;
}

export class aws_cloudsearch_domain_service_access_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudsearchDomainServiceAccessPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudsearch_domain_service_access_policy", resourceName);
  }

  get access_policy(): string {
    return `${this.resourceType}.${this.resourceName}.access_policy`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
