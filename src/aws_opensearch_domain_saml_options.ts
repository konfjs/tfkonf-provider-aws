import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchDomainSamlOptionsArgsSamlOptionsIdp {
  entity_id: string;
  metadata_content: string;
}

export interface AwsOpensearchDomainSamlOptionsArgsSamlOptions {
  enabled?: boolean;
  master_backend_role?: string;
  master_user_name?: string;
  roles_key?: string;
  session_timeout_minutes?: number;
  subject_key?: string;
  idp?: AwsOpensearchDomainSamlOptionsArgsSamlOptionsIdp;
}

export interface AwsOpensearchDomainSamlOptionsArgsTimeouts {
  delete?: string;
  update?: string;
}

export interface AwsOpensearchDomainSamlOptionsArgs {
  domain_name: string;
  saml_options?: AwsOpensearchDomainSamlOptionsArgsSamlOptions;
  timeouts?: AwsOpensearchDomainSamlOptionsArgsTimeouts;
}

export class aws_opensearch_domain_saml_options extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpensearchDomainSamlOptionsArgs) {
    const meta = {saml_options:{isBlock:true,idp:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearch_domain_saml_options", resourceName);
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
