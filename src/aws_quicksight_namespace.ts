import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightNamespaceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsQuicksightNamespaceArgs {
  namespace: string;
  tags?: { [key: string]: string };
  timeouts?: AwsQuicksightNamespaceArgsTimeouts;
}

export class aws_quicksight_namespace extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQuicksightNamespaceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_namespace", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get capacity_region(): string {
    return `${this.resourceType}.${this.resourceName}.capacity_region`;
  }

  get creation_status(): string {
    return `${this.resourceType}.${this.resourceName}.creation_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_store(): string {
    return `${this.resourceType}.${this.resourceName}.identity_store`;
  }

  get namespace(): string {
    return `${this.resourceType}.${this.resourceName}.namespace`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
