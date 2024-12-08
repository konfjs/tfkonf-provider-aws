import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEvidentlyProjectArgsDataDeliveryCloudwatchLogs {
  log_group?: string;
}

export interface AwsEvidentlyProjectArgsDataDeliveryS3Destination {
  bucket?: string;
  prefix?: string;
}

export interface AwsEvidentlyProjectArgsDataDelivery {
  cloudwatch_logs?: AwsEvidentlyProjectArgsDataDeliveryCloudwatchLogs;
  s3_destination?: AwsEvidentlyProjectArgsDataDeliveryS3Destination;
}

export interface AwsEvidentlyProjectArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEvidentlyProjectArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  data_delivery?: AwsEvidentlyProjectArgsDataDelivery;
  timeouts?: AwsEvidentlyProjectArgsTimeouts;
}

export class aws_evidently_project extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEvidentlyProjectArgs) {
    const meta = {data_delivery:{isBlock:true,cloudwatch_logs:{isBlock:true},s3_destination:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_evidently_project", resourceName);
  }

  get active_experiment_count(): string {
    return `${this.resourceType}.${this.resourceName}.active_experiment_count`;
  }

  get active_launch_count(): string {
    return `${this.resourceType}.${this.resourceName}.active_launch_count`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get experiment_count(): string {
    return `${this.resourceType}.${this.resourceName}.experiment_count`;
  }

  get feature_count(): string {
    return `${this.resourceType}.${this.resourceName}.feature_count`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get launch_count(): string {
    return `${this.resourceType}.${this.resourceName}.launch_count`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
