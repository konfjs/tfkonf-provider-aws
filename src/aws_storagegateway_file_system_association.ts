import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayFileSystemAssociationArgsCacheAttributes {
  cache_stale_timeout_in_seconds?: number;
}

export interface AwsStoragegatewayFileSystemAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsStoragegatewayFileSystemAssociationArgs {
  audit_destination_arn?: string;
  gateway_arn: string;
  location_arn: string;
  password: string;
  tags?: { [key: string]: string };
  username: string;
  cache_attributes?: AwsStoragegatewayFileSystemAssociationArgsCacheAttributes;
  timeouts?: AwsStoragegatewayFileSystemAssociationArgsTimeouts;
}

export class aws_storagegateway_file_system_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsStoragegatewayFileSystemAssociationArgs) {
    const meta = {cache_attributes:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_file_system_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location_arn(): string {
    return `${this.resourceType}.${this.resourceName}.location_arn`;
  }

  get password(): string {
    return `${this.resourceType}.${this.resourceName}.password`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }
}
