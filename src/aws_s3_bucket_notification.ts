import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketNotificationArgsLambdaFunction {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  lambda_function_arn?: string;
}

export interface AwsS3BucketNotificationArgsQueue {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  queue_arn: string;
}

export interface AwsS3BucketNotificationArgsTopic {
  events: string[];
  filter_prefix?: string;
  filter_suffix?: string;
  topic_arn: string;
}

export interface AwsS3BucketNotificationArgs {
  bucket: string;
  eventbridge?: boolean;
  lambda_function?: AwsS3BucketNotificationArgsLambdaFunction[];
  queue?: AwsS3BucketNotificationArgsQueue[];
  topic?: AwsS3BucketNotificationArgsTopic[];
}

export class aws_s3_bucket_notification extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketNotificationArgs) {
    const meta = {lambda_function:{isBlock:true},queue:{isBlock:true},topic:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_notification", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
