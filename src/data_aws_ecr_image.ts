import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcrImageArgs {
  image_tag?: string;
  most_recent?: boolean;
  repository_name: string;
}

export class data_aws_ecr_image extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEcrImageArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecr_image", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_digest(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_digest`;
  }

  get image_pushed_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_pushed_at`;
  }

  get image_size_in_bytes(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_size_in_bytes`;
  }

  get image_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_tags`;
  }

  get image_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_uri`;
  }

  get registry_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get repository_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_name`;
  }
}
