import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlobalacceleratorCrossAccountAttachmentArgsResource {
  cidr_block?: string;
  endpoint_id?: string;
  region?: string;
}

export interface AwsGlobalacceleratorCrossAccountAttachmentArgs {
  name: string;
  principals?: string[];
  tags?: { [key: string]: string };
  resource?: AwsGlobalacceleratorCrossAccountAttachmentArgsResource[];
}

export class aws_globalaccelerator_cross_account_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorCrossAccountAttachmentArgs) {
    const meta = {resource:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_globalaccelerator_cross_account_attachment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
