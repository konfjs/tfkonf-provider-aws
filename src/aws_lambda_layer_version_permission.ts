import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaLayerVersionPermissionArgs {
  action: string;
  layer_name: string;
  organization_id?: string;
  principal: string;
  skip_destroy?: boolean;
  statement_id: string;
  version_number: number;
}

export class aws_lambda_layer_version_permission extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLambdaLayerVersionPermissionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lambda_layer_version_permission", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get layer_name(): string {
    return `${this.resourceType}.${this.resourceName}.layer_name`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.revision_id`;
  }

  get statement_id(): string {
    return `${this.resourceType}.${this.resourceName}.statement_id`;
  }

  get version_number(): string {
    return `${this.resourceType}.${this.resourceName}.version_number`;
  }
}
