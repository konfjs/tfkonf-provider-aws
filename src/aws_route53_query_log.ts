import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53QueryLogArgs {
  cloudwatch_log_group_arn: string;
  zone_id: string;
}

export class aws_route53_query_log extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53QueryLogArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_query_log", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cloudwatch_log_group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.cloudwatch_log_group_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
