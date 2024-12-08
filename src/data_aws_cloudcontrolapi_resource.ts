import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudcontrolapiResourceArgs {
  identifier: string;
  role_arn?: string;
  type_name: string;
  type_version_id?: string;
}

export class data_aws_cloudcontrolapi_resource extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudcontrolapiResourceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudcontrolapi_resource", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.identifier`;
  }

  get properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.properties`;
  }

  get type_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.type_name`;
  }
}
