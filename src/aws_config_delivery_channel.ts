import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigDeliveryChannelArgsSnapshotDeliveryProperties {
  delivery_frequency?: string;
}

export interface AwsConfigDeliveryChannelArgs {
  name?: string;
  s3_bucket_name: string;
  s3_key_prefix?: string;
  s3_kms_key_arn?: string;
  sns_topic_arn?: string;
  snapshot_delivery_properties?: AwsConfigDeliveryChannelArgsSnapshotDeliveryProperties;
}

export class aws_config_delivery_channel extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConfigDeliveryChannelArgs) {
    const meta = {snapshot_delivery_properties:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_config_delivery_channel", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get s3_bucket_name(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket_name`;
  }
}
