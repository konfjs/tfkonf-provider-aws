import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOamLinkArgsLinkConfigurationLogGroupConfiguration {
  filter: string;
}

export interface AwsOamLinkArgsLinkConfigurationMetricConfiguration {
  filter: string;
}

export interface AwsOamLinkArgsLinkConfiguration {
  log_group_configuration?: AwsOamLinkArgsLinkConfigurationLogGroupConfiguration;
  metric_configuration?: AwsOamLinkArgsLinkConfigurationMetricConfiguration;
}

export interface AwsOamLinkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOamLinkArgs {
  label_template: string;
  resource_types: string[];
  sink_identifier: string;
  tags?: { [key: string]: string };
  link_configuration?: AwsOamLinkArgsLinkConfiguration;
  timeouts?: AwsOamLinkArgsTimeouts;
}

export class aws_oam_link extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOamLinkArgs) {
    const meta = {link_configuration:{isBlock:true,log_group_configuration:{isBlock:true},metric_configuration:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_oam_link", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get label(): string {
    return `${this.resourceType}.${this.resourceName}.label`;
  }

  get label_template(): string {
    return `${this.resourceType}.${this.resourceName}.label_template`;
  }

  get link_id(): string {
    return `${this.resourceType}.${this.resourceName}.link_id`;
  }

  get resource_types(): string {
    return `${this.resourceType}.${this.resourceName}.resource_types`;
  }

  get sink_arn(): string {
    return `${this.resourceType}.${this.resourceName}.sink_arn`;
  }

  get sink_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.sink_identifier`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
