import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotPolicyArgsTimeouts {
  delete?: string;
  update?: string;
}

export interface AwsIotPolicyArgs {
  name: string;
  policy: string;
  tags?: { [key: string]: string };
  timeouts?: AwsIotPolicyArgsTimeouts;
}

export class aws_iot_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIotPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iot_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_version_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_version_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
