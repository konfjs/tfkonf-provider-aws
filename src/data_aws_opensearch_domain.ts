import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOpensearchDomainArgsOffPeakWindowOptions {
}

export interface DataAwsOpensearchDomainArgs {
  domain_name: string;
  off_peak_window_options?: DataAwsOpensearchDomainArgsOffPeakWindowOptions;
}

export class data_aws_opensearch_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOpensearchDomainArgs) {
    const meta = {off_peak_window_options:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_opensearch_domain", resourceName);
  }

  get access_policies(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_policies`;
  }

  get advanced_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.advanced_options`;
  }

  get advanced_security_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.advanced_security_options`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_tune_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_tune_options`;
  }

  get cluster_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_config`;
  }

  get cognito_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.cognito_options`;
  }

  get created(): string {
    return `data.${this.resourceType}.${this.resourceName}.created`;
  }

  get dashboard_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.dashboard_endpoint`;
  }

  get dashboard_endpoint_v2(): string {
    return `data.${this.resourceType}.${this.resourceName}.dashboard_endpoint_v2`;
  }

  get deleted(): string {
    return `data.${this.resourceType}.${this.resourceName}.deleted`;
  }

  get domain_endpoint_v2_hosted_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_endpoint_v2_hosted_zone_id`;
  }

  get domain_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_id`;
  }

  get domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get ebs_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_options`;
  }

  get encryption_at_rest(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_at_rest`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get endpoint_v2(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_v2`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address_type`;
  }

  get kibana_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.kibana_endpoint`;
  }

  get log_publishing_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_publishing_options`;
  }

  get node_to_node_encryption(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_to_node_encryption`;
  }

  get processing(): string {
    return `data.${this.resourceType}.${this.resourceName}.processing`;
  }

  get snapshot_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_options`;
  }

  get software_update_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.software_update_options`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_options`;
  }
}
