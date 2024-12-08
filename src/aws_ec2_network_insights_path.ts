import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2NetworkInsightsPathArgs {
  destination?: string;
  destination_ip?: string;
  destination_port?: number;
  protocol: string;
  source: string;
  source_ip?: string;
  tags?: { [key: string]: string };
}

export class aws_ec2_network_insights_path extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2NetworkInsightsPathArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_network_insights_path", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get destination_arn(): string {
    return `${this.resourceType}.${this.resourceName}.destination_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get source(): string {
    return `${this.resourceType}.${this.resourceName}.source`;
  }

  get source_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
