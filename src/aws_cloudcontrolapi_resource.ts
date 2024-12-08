import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudcontrolapiResourceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudcontrolapiResourceArgs {
  desired_state: string;
  role_arn?: string;
  type_name: string;
  type_version_id?: string;
  timeouts?: AwsCloudcontrolapiResourceArgsTimeouts;
}

export class aws_cloudcontrolapi_resource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudcontrolapiResourceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudcontrolapi_resource", resourceName);
  }

  get desired_state(): string {
    return `${this.resourceType}.${this.resourceName}.desired_state`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get properties(): string {
    return `${this.resourceType}.${this.resourceName}.properties`;
  }

  get schema(): string {
    return `${this.resourceType}.${this.resourceName}.schema`;
  }

  get type_name(): string {
    return `${this.resourceType}.${this.resourceName}.type_name`;
  }
}
