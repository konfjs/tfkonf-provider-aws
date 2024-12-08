import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessGroupArgsSseConfiguration {
  customer_managed_key_enabled?: boolean;
  kms_key_arn?: string;
}

export interface AwsVerifiedaccessGroupArgs {
  policy_document?: string;
  tags?: { [key: string]: string };
  verifiedaccess_instance_id: string;
  sse_configuration?: AwsVerifiedaccessGroupArgsSseConfiguration;
}

export class aws_verifiedaccess_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVerifiedaccessGroupArgs) {
    const meta = {sse_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_verifiedaccess_group", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get deletion_time(): string {
    return `${this.resourceType}.${this.resourceName}.deletion_time`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get verifiedaccess_group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.verifiedaccess_group_arn`;
  }

  get verifiedaccess_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.verifiedaccess_group_id`;
  }

  get verifiedaccess_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.verifiedaccess_instance_id`;
  }
}
