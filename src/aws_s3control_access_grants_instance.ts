import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlAccessGrantsInstanceArgs {
  identity_center_arn?: string;
  tags?: { [key: string]: string };
}

export class aws_s3control_access_grants_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3controlAccessGrantsInstanceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3control_access_grants_instance", resourceName);
  }

  get access_grants_instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.access_grants_instance_arn`;
  }

  get access_grants_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.access_grants_instance_id`;
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_center_application_arn(): string {
    return `${this.resourceType}.${this.resourceName}.identity_center_application_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
