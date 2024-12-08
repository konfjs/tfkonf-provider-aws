import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerHubArgsS3StorageConfig {
  s3_output_path?: string;
}

export interface AwsSagemakerHubArgs {
  hub_description: string;
  hub_display_name?: string;
  hub_name: string;
  hub_search_keywords?: string[];
  tags?: { [key: string]: string };
  s3_storage_config?: AwsSagemakerHubArgsS3StorageConfig;
}

export class aws_sagemaker_hub extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerHubArgs) {
    const meta = {s3_storage_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_hub", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get hub_description(): string {
    return `${this.resourceType}.${this.resourceName}.hub_description`;
  }

  get hub_name(): string {
    return `${this.resourceType}.${this.resourceName}.hub_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
