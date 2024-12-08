import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketIntelligentTieringConfigurationArgsFilter {
  prefix?: string;
  tags?: { [key: string]: string };
}

export interface AwsS3BucketIntelligentTieringConfigurationArgsTiering {
  access_tier: string;
  days: number;
}

export interface AwsS3BucketIntelligentTieringConfigurationArgs {
  bucket: string;
  name: string;
  status?: string;
  filter?: AwsS3BucketIntelligentTieringConfigurationArgsFilter;
  tiering: AwsS3BucketIntelligentTieringConfigurationArgsTiering[];
}

export class aws_s3_bucket_intelligent_tiering_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketIntelligentTieringConfigurationArgs) {
    const meta = {filter:{isBlock:true},tiering:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_intelligent_tiering_configuration", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
