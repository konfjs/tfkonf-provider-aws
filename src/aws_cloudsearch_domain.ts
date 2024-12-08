import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudsearchDomainArgsEndpointOptions {
}

export interface AwsCloudsearchDomainArgsIndexField {
  analysis_scheme?: string;
  default_value?: string;
  facet?: boolean;
  highlight?: boolean;
  name: string;
  return?: boolean;
  search?: boolean;
  sort?: boolean;
  source_fields?: string;
  type: string;
}

export interface AwsCloudsearchDomainArgsScalingParameters {
}

export interface AwsCloudsearchDomainArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudsearchDomainArgs {
  name: string;
  endpoint_options?: AwsCloudsearchDomainArgsEndpointOptions;
  index_field?: AwsCloudsearchDomainArgsIndexField[];
  scaling_parameters?: AwsCloudsearchDomainArgsScalingParameters;
  timeouts?: AwsCloudsearchDomainArgsTimeouts;
}

export class aws_cloudsearch_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudsearchDomainArgs) {
    const meta = {endpoint_options:{isBlock:true},index_field:{isBlock:true},scaling_parameters:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudsearch_domain", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get document_service_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.document_service_endpoint`;
  }

  get domain_id(): string {
    return `${this.resourceType}.${this.resourceName}.domain_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get multi_az(): string {
    return `${this.resourceType}.${this.resourceName}.multi_az`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get search_service_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.search_service_endpoint`;
  }
}
