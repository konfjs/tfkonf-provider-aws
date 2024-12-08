import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticsearchDomainSamlOptionsArgsSamlOptionsIdp {
  entity_id: string;
  metadata_content: string;
}

export interface AwsElasticsearchDomainSamlOptionsArgsSamlOptions {
  enabled?: boolean;
  master_backend_role?: string;
  master_user_name?: string;
  roles_key?: string;
  session_timeout_minutes?: number;
  subject_key?: string;
  idp?: AwsElasticsearchDomainSamlOptionsArgsSamlOptionsIdp;
}

export interface AwsElasticsearchDomainSamlOptionsArgsTimeouts {
  delete?: string;
  update?: string;
}

export interface AwsElasticsearchDomainSamlOptionsArgs {
  domain_name: string;
  saml_options?: AwsElasticsearchDomainSamlOptionsArgsSamlOptions;
  timeouts?: AwsElasticsearchDomainSamlOptionsArgsTimeouts;
}

export class aws_elasticsearch_domain_saml_options extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticsearchDomainSamlOptionsArgs) {
    const meta = {saml_options:{isBlock:true,idp:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticsearch_domain_saml_options", resourceName);
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
