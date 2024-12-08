import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2ImageBlockPublicAccessArgsTimeouts {
  update?: string;
}

export interface AwsEc2ImageBlockPublicAccessArgs {
  state: string;
  timeouts?: AwsEc2ImageBlockPublicAccessArgsTimeouts;
}

export class aws_ec2_image_block_public_access extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2ImageBlockPublicAccessArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_image_block_public_access", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
