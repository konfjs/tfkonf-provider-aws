import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlAccessGrantsLocationArgs {
  iam_role_arn: string;
  location_scope: string;
  tags?: { [key: string]: string };
}

export class aws_s3control_access_grants_location extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3controlAccessGrantsLocationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3control_access_grants_location", resourceName);
  }

  get access_grants_location_arn(): string {
    return `${this.resourceType}.${this.resourceName}.access_grants_location_arn`;
  }

  get access_grants_location_id(): string {
    return `${this.resourceType}.${this.resourceName}.access_grants_location_id`;
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location_scope(): string {
    return `${this.resourceType}.${this.resourceName}.location_scope`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
