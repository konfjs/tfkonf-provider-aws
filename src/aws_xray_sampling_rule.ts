import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsXraySamplingRuleArgs {
  attributes?: { [key: string]: string };
  fixed_rate: number;
  host: string;
  http_method: string;
  priority: number;
  reservoir_size: number;
  resource_arn: string;
  rule_name?: string;
  service_name: string;
  service_type: string;
  tags?: { [key: string]: string };
  url_path: string;
  version: number;
}

export class aws_xray_sampling_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsXraySamplingRuleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_xray_sampling_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get fixed_rate(): string {
    return `${this.resourceType}.${this.resourceName}.fixed_rate`;
  }

  get host(): string {
    return `${this.resourceType}.${this.resourceName}.host`;
  }

  get http_method(): string {
    return `${this.resourceType}.${this.resourceName}.http_method`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get reservoir_size(): string {
    return `${this.resourceType}.${this.resourceName}.reservoir_size`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }

  get service_type(): string {
    return `${this.resourceType}.${this.resourceName}.service_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get url_path(): string {
    return `${this.resourceType}.${this.resourceName}.url_path`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
