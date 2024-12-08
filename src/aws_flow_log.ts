import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFlowLogArgsDestinationOptions {
  file_format?: string;
  hive_compatible_partitions?: boolean;
  per_hour_partition?: boolean;
}

export interface AwsFlowLogArgs {
  deliver_cross_account_role?: string;
  eni_id?: string;
  iam_role_arn?: string;
  log_destination_type?: string;
  max_aggregation_interval?: number;
  subnet_id?: string;
  tags?: { [key: string]: string };
  traffic_type?: string;
  transit_gateway_attachment_id?: string;
  transit_gateway_id?: string;
  vpc_id?: string;
  destination_options?: AwsFlowLogArgsDestinationOptions;
}

export class aws_flow_log extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFlowLogArgs) {
    const meta = {destination_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_flow_log", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_destination(): string {
    return `${this.resourceType}.${this.resourceName}.log_destination`;
  }

  get log_format(): string {
    return `${this.resourceType}.${this.resourceName}.log_format`;
  }

  get log_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.log_group_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
