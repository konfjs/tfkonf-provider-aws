import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53domainsDelegationSignerRecordArgsSigningAttributes {
  algorithm: number;
  flags: number;
  public_key: string;
}

export interface AwsRoute53domainsDelegationSignerRecordArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRoute53domainsDelegationSignerRecordArgs {
  domain_name: string;
  signing_attributes?: AwsRoute53domainsDelegationSignerRecordArgsSigningAttributes[];
  timeouts?: AwsRoute53domainsDelegationSignerRecordArgsTimeouts;
}

export class aws_route53domains_delegation_signer_record extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53domainsDelegationSignerRecordArgs) {
    const meta = {signing_attributes:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53domains_delegation_signer_record", resourceName);
  }

  get dnssec_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.dnssec_key_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
