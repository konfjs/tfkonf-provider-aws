import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminInstanceAccessControlAttributesArgsAttributeValue {
  source: string[];
}

export interface AwsSsoadminInstanceAccessControlAttributesArgsAttribute {
  key: string;
  value: AwsSsoadminInstanceAccessControlAttributesArgsAttributeValue[];
}

export interface AwsSsoadminInstanceAccessControlAttributesArgs {
  instance_arn: string;
  attribute: AwsSsoadminInstanceAccessControlAttributesArgsAttribute[];
}

export class aws_ssoadmin_instance_access_control_attributes extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsoadminInstanceAccessControlAttributesArgs) {
    const meta = {attribute:{isBlock:true,value:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_instance_access_control_attributes", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `${this.resourceType}.${this.resourceName}.status_reason`;
  }
}
